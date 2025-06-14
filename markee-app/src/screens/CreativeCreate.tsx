import { useCallback, useState, useRef, useEffect } from 'react';
import { ButtonGroup, ComboBox, Item, ProgressCircle } from '@adobe/react-spectrum';
import { Box, Card, Flex, Heading, IconButton, Text, Button, TextArea } from '@radix-ui/themes';
import campaignOptions from '../components/utilities/campaignOptions';
import PropertiesSVG from '../icons/properties-fill.svg';
import { DateValue } from "@react-types/datepicker";
import DownloadIcon from '../icons/download.svg';
import InfoCircledIcon from '../icons/info.svg';
import debounce from 'lodash/debounce';
import { MultiSelect, Option } from 'react-multi-select-component';
import { Key } from '@react-types/shared';
import campaignData, { CampData } from '../components/utilities/campaignData';

type Campaign = {
    id: string;
    campaignName: string;
    products: string[];
    language: string[];
    channel: string[];
    location: string[];
    status: string;
};

const CreativeCreate = () => {
    const [newCreate, setNewCreate] = useState('');
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [imageName, setImageName] = useState<string>('');
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);
    const [isGeneratingPrompts, setIsGeneratingPrompts] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Option[]>([]);
    const [selectedLanguage, setSelectedLanguage] = useState<Option[]>([]);
    const [selectedGeography, setSelectedGeography] = useState<Option[]>([]);
    const [selectedChannel, setSelectedChannel] = useState<Option[]>([]);
    const [apiPrompts, setApiPrompts] = useState<string[]>([]);
    const [selectedPromptIndex, setSelectedPromptIndex] = useState<number | null>(null);
    const [campaignList, setCampaignDropdownList] = useState<Campaign[]>([]);
    const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
    const [selectedCampKey, setSelectedCampaignKey] = useState<string | null>(null);
    const [campaignChannels, setCampaignChannels] = useState<Option[]>([]);
    const [isChannelSelected, setIsChannelSelected] = useState(false);
    const [loading, setLoader] = useState(false);


    const generateImageAbortControllerRef = useRef<AbortController | null>(null);
    const generatePromptsAbortControllerRef = useRef<AbortController | null>(null);

    const BASE_URL = 'http://localhost:5000';
    //const BASE_URL = 'https://markee.latentview.com';

    useEffect(() => {
        const loadLocalCampaigns = () => {
            const storedCampaignList = localStorage.getItem('savedCampaign');
            try {
                const parsedList = JSON.parse(storedCampaignList || '[]');
                return Array.isArray(parsedList) ? parsedList : [];
            } catch (e) {
                console.error('Failed to parse stored campaign list:', e);
                return [];
            }
        };

        const loadInDevelopmentCampaigns = () => {
            return campaignData.filter(campaign => campaign?.status === 'In Development');
        };

        const localCampaigns = loadLocalCampaigns();
        const inDevelopmentCampaigns = loadInDevelopmentCampaigns();

        const mergedCampaigns = [
            ...localCampaigns,
            ...inDevelopmentCampaigns
        ];
        setCampaignDropdownList(mergedCampaigns);
    }, []);

    const handleButtonClick = (text: string, index: number) => {
        setNewCreate(text);
        setSelectedPromptIndex(index);
        if (generateImageAbortControllerRef.current) {
            generateImageAbortControllerRef.current.abort();
            setIsGeneratingImage(false);
        }
    };

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewCreate(event.target.value);
        debouncedGenerate(event.target.value);
    };

    useEffect(() => {
        if (selectedCampaign && selectedChannel.length > 0) {
            debouncedGenerate(newCreate);
        }
    }, [selectedCampaign, selectedChannel, isChannelSelected]);

    const handleGenerate = async () => {
        const values = {
            newCreate,
            product: selectedProduct.map(item => item.label).join(', '),
            language: selectedLanguage.map(item => item.label).join(', '),
            geography: selectedGeography.map(item => item.label).join(', '),
            channel: selectedChannel.map(item => item.label).join(', ')
        };

        if (!selectedCampaign) {
            alert('Please select a campaign.');
            return;
        }

        setIsGeneratingImage(true);

        if (generateImageAbortControllerRef.current) {
            generateImageAbortControllerRef.current.abort();
        }

        const newAbortController = new AbortController();
        generateImageAbortControllerRef.current = newAbortController;

        try {
            const response = await fetch(`${BASE_URL}/generate-image`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text_prompts: [
                        {
                            text: values.newCreate,
                        },
                    ],
                }),
                signal: newAbortController.signal
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const imageBlob = await response.blob();
            const imageUrl = URL.createObjectURL(imageBlob);

            setImageSrc(imageUrl);
            setImageName(`creative_${Date.now()}.jpg`);
        } catch (error) {
            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    console.log('Generate image request was aborted');
                } else {
                    console.error('Error:', error.message);
                    alert('An error occurred while generating the image. Please try again.');
                }
            } else {
                console.error('Unexpected error:', error);
                alert('An unexpected error occurred. Please try again.');
            }
        } finally {
            setIsGeneratingImage(false);
        }
    };

    const debouncedGenerate = useCallback(debounce(async (text: string) => {
        if (!isChannelSelected) {
            console.log('No channel selected, skipping prompt generation.');
            return;
        }

        setImageSrc(null);
        setImageName('');
        setIsGeneratingPrompts(true);

        if (generatePromptsAbortControllerRef.current) {
            generatePromptsAbortControllerRef.current.abort();
            setIsGeneratingImage(false);
        }

        const newAbortController = new AbortController();
        generatePromptsAbortControllerRef.current = newAbortController;

        try {
            const campaignProducts = Array.isArray(selectedCampaign?.products) ? selectedCampaign?.products.join(', ') : '';
            const campaignGeographies = Array.isArray(selectedCampaign?.location) ? selectedCampaign?.location.join(', ') : '';
            const campaignLanguages = Array.isArray(selectedCampaign?.language) ? selectedCampaign?.language.join(', ') : '';
            const campaignChannels = Array.isArray(selectedCampaign?.channel) ? selectedCampaign?.channel.join(', ') : '';
            setLoader(true)
            const response = await fetch(`${BASE_URL}/generate-prompts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product: campaignProducts,
                    geography: campaignGeographies,
                    language: campaignLanguages,
                    channel: selectedChannel.map(item => item.label).join(', '),
                    campaign_description: text.trimEnd()
                }),
                signal: newAbortController.signal,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const data = await response.json();

            if (data.prompts) {

                setApiPrompts(data.prompts);
                setSelectedPromptIndex(null);
            } else {
                console.error('No prompts found in the response');
                setApiPrompts([]);
            }
        } catch (error) {
            if (error instanceof Error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch request was aborted');
                } else {
                    console.error('Error:', error.message);
                    alert('An error occurred while generating the prompts. Please try again.');
                }
            } else {
                console.error('Unexpected error:', error);
                alert('An unexpected error occurred. Please try again.');
            }
        } finally {
            setLoader(false)
            setIsGeneratingPrompts(false);
        }
    }, 500), [selectedChannel, isChannelSelected, selectedCampaign]);

    const handleDownload = () => {
        if (imageSrc) {
            const link = document.createElement('a');
            link.href = imageSrc;
            link.download = imageName || 'generated_image.jpg';
            link.click();
        }
    };

    const updateTextAndGenerate = (text: string) => {
        setNewCreate(text);
        debouncedGenerate(text);
    };

    const handleCampaignSelection = (key: Key | null) => {
        if (key === null) {
            setSelectedCampaignKey(null);
            setSelectedCampaign(null);
            setImageSrc(null);
            setImageName('');
            setCampaignChannels([]);
            setSelectedChannel([]);
            setIsChannelSelected(false);
            setApiPrompts([]);
            return;
        }
        const selected = campaignList.find(campaign => campaign.id == key);
        setApiPrompts([]);
        if (selected) {
            if (!selected.channel.includes(selectedChannel?.[0]?.label)) {
                setSelectedChannel([]);
                setIsChannelSelected(false);
            }

            setNewCreate('');
            setSelectedCampaignKey(key as string);
            setSelectedCampaign(selected);
            setCampaignChannels(
                selected.channel.map(channel => ({ label: channel, value: channel }))
            );
        } else {
            console.error('Campaign not found:', key);
        }
    };

    const handleChannelSelection = (key: Key | null) => {
        if (key === null) {
            setSelectedChannel([]);
            setIsChannelSelected(false);
            return;
        }
        const selected = campaignChannels.find(channel => channel.value === key);

        if (selected) {
            setSelectedChannel([selected]);
            setIsChannelSelected(true);
        } else {
            console.error('Channel not found:', key);
        }
    };

    return (
        <>
            <Flex gap="4" wrap="wrap">
                <Flex gap="2" align="center">
                    <IconButton  className='IconButton'  variant="outline" style={{ border: 0, boxShadow: 'none' }}>
                        <img src={PropertiesSVG} width='22' height='22' alt="Properties" />
                    </IconButton>
                    <Heading as="h3" className='pagehead'>Create Creative</Heading>
                </Flex>
                <Box width="100%">
                    <Card variant="surface" className='card-content'>
                        <Flex direction='column'>
                            <Flex gap="2" wrap="wrap" align="start" >
                               
                                <ComboBox
                                    label="Campaign"
                                    placeholder="Select campaign.."
                                    items={campaignList}
                                    selectedKey={selectedCampKey}
                                    isRequired 
                                    onSelectionChange={handleCampaignSelection}
                                    UNSAFE_className="customlabel" 
                                    
                                >
                                    {(item) => <Item key={item.id}>{item.campaignName}</Item>}
                                </ComboBox>
    
                               <Box>
                                <ComboBox
                                    label="Channel"
                                    placeholder="Select channel"
                                    items={campaignChannels}
                                    isRequired = {true}
                                    selectedKey={selectedChannel.length > 0 ? selectedChannel[0].value : null}
                                    onSelectionChange={handleChannelSelection}
                                    UNSAFE_className="customlabel" 
                                >
                                    {(item) => <Item key={item.value}>{item.label}</Item>}
                                </ComboBox>
                                { selectedCampaign != null && isChannelSelected == false &&(
                                    <Box>
                                  <Text size='1' color='red'>  Please select the Channel </Text>
                                  </Box>
                                )}
                                </Box>

                              
                            </Flex>
    
                            <Flex gap="2" direction='column' align="start" mt='20px'>
                                <Flex gap="2" direction='column' align="start" mt='0px' width='50%'>
                                    <Text size='1' style={{fontWeight:'500'}}>What do you want to create?</Text>
                                    <TextArea
                                        placeholder='Describe your Campaign………'
                                        required
                                        value={newCreate}
                                        onChange={handleTextAreaChange}
                                        className='custom-textarea'
                                        style={{ height: '120px', width: '100%', marginBottom: '20px' }}
                                        
                                    />
                                </Flex>
                                
                                {loading && ( <Flex><Box style={{ height:'30px'}}> <span className='loader'></span> </Box>  </Flex>)}
                                
                                <Flex>
                                    {apiPrompts.map((prompt, index) => (
                                        <Button
                                            key={index}
                                            variant='soft'
                                            style={{
                                                borderRadius: '15px',
                                                marginRight: '10px',
                                                maxWidth: '300px',
                                                textWrap: 'wrap',
                                                height: 'auto',
                                                padding: '10px',
                                                textAlign: 'left',
                                                border: selectedPromptIndex === index ? '1px solid #becbe9' : '1px solid #edf2fe'
                                            }}
                                            onClick={() => handleButtonClick(prompt, index)}
                                        >
                                            {prompt}
                                        </Button>
                                    ))}
                                </Flex>
                            </Flex>
    
                            <ButtonGroup UNSAFE_style={{ padding: '10px 0px' }}>
                                <Button
                                    variant="solid"
                                    onClick={handleGenerate}
                                    style={{ borderRadius: '4px', marginBottom: '20px' }}
                                    disabled={isGeneratingImage || !selectedCampaign}
                                >
                                    {isGeneratingImage ? <ProgressCircle aria-label="Loading…" size="S" isIndeterminate /> : 'Generate'}
                                </Button>
                            </ButtonGroup>
    
                            {imageSrc && (
                                <Box>
                                    <Box width='200px'>
                                        <img
                                            src={imageSrc}
                                            alt="Generated"
                                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px', marginBottom: '20px' }}
                                        />
                                    </Box>
                                    <ButtonGroup>
                                        <Button variant="solid" onClick={handleDownload} style={{ borderRadius: '4px' }}>
                                            <img src={DownloadIcon} style={{ filter: 'invert(1)', marginRight: '5px' }} /> Download
                                        </Button>
                                    </ButtonGroup>
                                </Box>
                            )}
                        </Flex>
                    </Card>
                </Box>
            </Flex>
        </>
    );
};

export default CreativeCreate;
