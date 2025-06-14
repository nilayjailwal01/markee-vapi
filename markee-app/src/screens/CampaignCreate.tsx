import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@adobe/react-spectrum';
import { Box, Card, Flex, Heading, IconButton } from '@radix-ui/themes';
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CampaignBaseForm from '../components/CampaignBaseForm';
import PropertiesSVG from '../icons/properties-fill.svg';
import dropdownOptions from '../components/utilities/campaignOptions';

interface MultiDropdownOption {
    value: any;
    label: string;
}

interface CampaignFormData {
    plannedStartDate: any;
    plannedEndDate: any;
    campaignStage: string;
    campaignName: string;
    description: string;
    targetAudience: string;
    location: string[];
    channel: string[];
    language: string[];
    products: string[];
    productList: MultiDropdownOption[];
    channelList: MultiDropdownOption[];
    locationList: MultiDropdownOption[];
    languageList: MultiDropdownOption[];
}

const CampaignCreate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState<CampaignFormData>({
        plannedStartDate: null,
        plannedEndDate: null,
        campaignStage: '',
        campaignName: '',
        description: '',
        targetAudience: '',
        location: [],
        channel: [],
        language: [],
        products: [],
        productList: [],
        channelList: [],
        locationList: [],
        languageList: []
    });

    useEffect(() => {
        if (location.state && location.state.formData) {
            const { formData: incomingData } = location.state;

            // Convert products and channels to MultiDropdownOption format
            const productList = incomingData.products.map((product:any) => 
                dropdownOptions.Products.options.find((option:any) => option.label === product)
            ).filter((option:any) => option !== undefined) as MultiDropdownOption[];

            const channelList = incomingData.channel.map((channel:any) => 
                dropdownOptions.Channel.options.find((option:any) => option.label === channel)
            ).filter((option:any) => option !== undefined) as MultiDropdownOption[];

            setFormData({
                ...incomingData,
                productList,
                channelList
            });
        }
    }, [location.state]);

    const handleDataChange = (field: string, value: any) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleSaveCampaign = () => {
        if (!formData.campaignStage || !formData.campaignName) {
            alert('Please fill in all required fields.');
            return;
        }
    
        try {
            const values = {
                id: uuidv4(),
                campaignName: formData.campaignName,
                description: formData.description,
                plannedStartDate: formData.plannedStartDate,
                plannedEndDate: formData.plannedEndDate,
                status: 'In Development',
                products: formData.products,
                language: formData.language,
                location: formData.location,
                campaignStage: formData.campaignStage,
                targetAudience : formData.targetAudience,
                channel: formData.channel,
                productList: formData.productList,
                languageList: formData.languageList,
                locationList: formData.locationList,
                channelList: formData.channelList,
                isCreated: true
            };
    
            const existingCampaignsJSON = localStorage.getItem('savedCampaign');
            let existingCampaigns = [];
    
            if (existingCampaignsJSON) {
                try {
                    existingCampaigns = JSON.parse(existingCampaignsJSON);
                    if (!Array.isArray(existingCampaigns)) {
                        console.error('Data in localStorage is not an array.');
                        existingCampaigns = [];
                    }
                } catch (error) {
                    console.error('Error parsing existing campaigns JSON:', error);
                    existingCampaigns = [];
                }
            }
    
            if (Array.isArray(existingCampaigns)) {
                existingCampaigns.push(values);
            } else {
                console.error('existingCampaigns is not an array.');
                existingCampaigns = [values];
            }
    
            localStorage.setItem('savedCampaign', JSON.stringify(existingCampaigns));
            console.log('Campaign data saved:', values);
    
            if (window.location.pathname === '/campaigns') {
                window.location.reload();
            } else {
                navigate('/campaigns');
            }
        } catch (error) {
            console.error('Error saving campaign:', error);
            alert('Failed to save campaign. Please try again.');
        }
    };

    return (
        <>
            <Flex gap="4" wrap="wrap">
                <Flex gap="2" align="center" >
                    <IconButton className='IconButton'  variant="outline" style={{ border: 0, boxShadow: 'none' }}>
                        <img src={PropertiesSVG} width='22' height='22' alt="Properties" />
                    </IconButton>
                <Heading as="h4" className='pagehead'>New Campaign</Heading>
                </Flex>
                <Box width="100%">
                    <Card variant="surface" className='card-content'>
                        <CampaignBaseForm
                            plannedStartDate={formData.plannedStartDate}
                            plannedEndDate={formData.plannedEndDate}
                            campaignStage={formData.campaignStage}
                            campaignName={formData.campaignName}
                            description={formData.description}
                            targetAudience={formData.targetAudience}
                            location={formData.location}
                            channel={formData.channel}
                            language={formData.language}
                            products={formData.products}
                            productList={formData.productList}
                            channelList={formData.channelList}
                            languageList={formData.languageList}
                            locationList={formData.locationList}
                            onChange={handleDataChange}
                        />
                        <Box style={{ marginBottom: '30px' }}></Box>
                        <Flex justify='end' align='end' style={{ marginBottom: '30px' }}>
                            <ButtonGroup justifySelf='right'>
                                <Button variant='accent' onPress={handleSaveCampaign} UNSAFE_style={{ borderRadius: '4px' }}>
                                    Save Campaign
                                </Button>
                            </ButtonGroup>
                        </Flex>
                    </Card>
                </Box>
            </Flex>
        </>
    );
}

export default CampaignCreate;
