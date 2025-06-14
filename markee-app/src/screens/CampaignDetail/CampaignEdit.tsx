import React, { useEffect, useState, ChangeEvent } from 'react';
import { CampData } from '../../components/utilities/campaignData';
import CampaignBaseForm from '../../components/CampaignBaseForm';
import { ButtonGroup, Content, Dialog, Button as Button2, Heading as HeadingR, Flex, ComboBox, Item, DialogTrigger, ActionButton, DialogContainer, View, TextArea, NumberField } from '@adobe/react-spectrum';
import { Box, Card, Text, TextField } from '@radix-ui/themes';
import dropdownOptions, { MultiDropdownOption, DropdownOptions } from '../../components/utilities/campaignOptions';
import { DateValue } from '@internationalized/date';

interface Option {
  value: string | number;
  label: string;
}

interface CampaignEditProps {
  campaign: CampData | null;
  updateCampaign: (data: any) => void;
  onClose: () => void;

}


interface FormData {
  id: any;
  plannedStartDate: DateValue | null | string | undefined;
  plannedEndDate: DateValue | null | string | undefined;
  campaignStage: string;
  campaignName: string;
  description: string;
  targetAudience: string;
  status: any;
  location: string[];
  channel: string[];
  language: string[];
  products: string[];
  channelList: Option[];
  productList: Option[];
  languageList: Option[];
  locationList: Option[];
  imagePreviews: Record<number, string | null>;
  isCreated?: boolean;
  selectedLocation: Record<number, string>;
  selectedLanguage: Record<number, string>;
  heading?: Record<number, string>;
  subHeading?: Record<number, string>;
  body?: Record<number, string>;
  MarketSpend?: Record<number, number>;
  TotalSales?: Record<number, number>;
}


const CampaignEdit: React.FC<CampaignEditProps> = ({ campaign, updateCampaign, onClose }) => {
  const [confirmationModal, setConfirmationModal] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    id: null,
    plannedStartDate: null,
    plannedEndDate: null,
    campaignStage: "",
    campaignName: "",
    description: "",
    targetAudience: "",
    status: '',
    location: [],
    channel: [],
    language: [],
    products: [],
    channelList: [],
    productList: [],
    languageList: [],
    locationList: [],
    imagePreviews: {},
    isCreated: false,
    selectedLocation: {},
    selectedLanguage: {}
  });

  useEffect(() => {
    if (campaign) {
      const updatedHeading: Record<string, string> = {};
      const updatedSubHeading: Record<string, string> = {};
      const updatedBody: Record<string, string> = {};
      const updatedSelectedLocation: Record<number, string> = {};
      const updatedSelectedLanguage: Record<number, string> = {};
      const updatedImagePreviews: Record<number, string | null> = {};
      const updatedMarketSpend: Record<string, number> = {};
      const updatedTotalSales: Record<string, number> = {};
      

      if (campaign.creatives) {
        campaign.creatives.forEach((creative, index) => {
          if (creative.location) {
            updatedSelectedLocation[index] = creative.location;
          }
          if (creative.language) {
            updatedSelectedLanguage[index] = creative.language;
          }
          if (creative.CreativeGraphic) {
            updatedImagePreviews[index] = creative.CreativeGraphic;
          }
          
          if (creative.heading) {
            updatedHeading[index] = creative.heading;
          }
          if (creative.subHeading) {
            updatedSubHeading[index] = creative.subHeading;
          }
          if (creative.body) {
            updatedBody[index] = creative.body;
          }
          if (creative.TotalSales) {
            updatedTotalSales[index] = creative.TotalSales;
          }
          if (creative.MarketSpend) {
            updatedMarketSpend[index] = creative.MarketSpend;
          }
        });
      }

      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('imageData-')) {
          const storedData = JSON.parse(localStorage.getItem(key) || '{}');
          const currentTime = Date.now();

          if (storedData && storedData.expirationTime > currentTime) {
            setFormData(prevState => ({
              ...prevState,
              imagePreviews: {
                ...prevState.imagePreviews,
                [key.split('-')[1]]: storedData.dataURL
              }
            }));
          } else {
            localStorage.removeItem(key);
          }
        }
      });

      setFormData(prevState => ({
        ...prevState,
        id: campaign.id,
        isCreated: campaign.isCreated,
        status: campaign.status,
        plannedStartDate: campaign.plannedStartDate || '',
        plannedEndDate: campaign.plannedEndDate || '',
        campaignStage: campaign.campaignStage || "",
        campaignName: campaign.campaignName || "",
        description: campaign.description || "",
        targetAudience: campaign.targetAudience || "",
        location: campaign.location || [],
        channel: campaign.channel || [],
        language: campaign.language || [],
        products: campaign.products || [],
        channelList: campaign.channelList || [],
        productList: campaign.productList || [],
        languageList: campaign.languageList || [],
        locationList: campaign.locationList || [],
        imagePreviews: updatedImagePreviews,
        selectedLocation: updatedSelectedLocation,
        selectedLanguage: updatedSelectedLanguage,
        heading:updatedHeading,
        subHeading:updatedSubHeading,
        body:updatedBody,
        MarketSpend : updatedMarketSpend,
        TotalSales:updatedTotalSales
      }));
    }
  }, [campaign]);


  const handleFormChange = (field: string, value: any) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleFieldChange = (index: number, fieldType: string, value: string | number) => {
    setFormData(prevState => ({
        ...prevState,
        [fieldType]: {
            ...prevState[fieldType as keyof FormData],
            [index]: value
        }
    }));
};

const handleComboBoxChange = (index: number, type: 'location' | 'language', value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [`selected${type.charAt(0).toUpperCase() + type.slice(1)}`]: {
        ...prevState[`selected${type.charAt(0).toUpperCase() + type.slice(1)}` as keyof FormData],
        [index]: value
      }
    }));
  };
  

  const convertToOptions = (items: string[]): Option[] => {
    return items.map(item => ({
      value: item,
      label: item
    }));
  };

  const getOptions = (type: keyof DropdownOptions): MultiDropdownOption[] => {
    return dropdownOptions[type].options || [];
  };

  const formatSelectedValues = (selectedValues: string[], options: MultiDropdownOption[]): Option[] => {
    return options.filter(option =>
      selectedValues.includes(option.label)
    ).map(option => ({
      value: option.value,
      label: option.label
    }));
  };

  const channelList = formData.channelList.length > 0 ? formData.channelList : formatSelectedValues(formData.channel, getOptions('Channel'));
  const productList = formData.productList.length > 0 ? formData.productList : formatSelectedValues(formData.products, getOptions('Products'));
  const languageList = formData.languageList.length > 0 ? formData.languageList : formatSelectedValues(formData.language, getOptions('Languages'));
  const locationList = formData.locationList.length > 0 ? formData.locationList : formatSelectedValues(formData.location, getOptions('Geography'));

  const handleFileUploadClick = (index: number) => {
    const fileInput = document.getElementById(`file-input-${index}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = function () {
        const dataURL = reader.result as string;
        const timestamp = Date.now();
        const expirationTime = timestamp + 5 * 60 * 1000;

        localStorage.setItem(`imageData-${index}`, JSON.stringify({ dataURL, expirationTime }));

        setFormData(prevState => ({
          ...prevState,
          imagePreviews: {
            ...prevState.imagePreviews,
            [index]: dataURL
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSave = () => {
    const creatives = formData.channel.map((channel, index) => {
      return {
        uid: index + 1,
        CreativeID: Math.floor(Math.random() * 10000),
        CreativeName: `Creative_${index + 1}`,
        CreativeGraphic: formData.imagePreviews[index] || "",
        language: formData.selectedLanguage[index] || '',
        channel,
        location: formData.selectedLocation[index] || '',
        heading:formData.heading?formData.heading[index]: '',
        subHeading:formData.subHeading?formData.subHeading[index] : '',
        body:formData.body?formData.body[index]: '',
        MarketSpend:formData.MarketSpend?formData.MarketSpend[index] : '',
        TotalSales:formData.TotalSales?formData.TotalSales[index] : '',
      };
    });

    const updatedCampaign = {
      ...campaign,
      ...formData,
      creatives
    };

    updateCampaign(updatedCampaign);
  };
 
  const validateFormData = (data: FormData): boolean => {
    const isValidCampaignName = data.campaignName.trim() !== '';
    const hasValidProducts = Array.isArray(data.products) && data.products.length > 0;
    const hasValidChannels = Array.isArray(data.channel) && data.channel.length > 0;
    const hasValidLocations = Array.isArray(data.location) && data.location.length > 0;
    const hasValidLanguages = Array.isArray(data.language) && data.language.length > 0;
    const hasValidDescription =  data.description != '';
    const hasValidTargetAudience =  data.targetAudience != '';



    const startDate = data.plannedStartDate ?? '';
    const endDate = data.plannedEndDate ?? ''; 

    const isValidStartDate = startDate === '' ? false:true ;
    const isValidEndDate =  endDate === '' ? false:true;

  const hasValidComboBoxSelections = data.channel.every((_, index) => {
    const selectedLocation = data.selectedLocation[index];
    const selectedLanguage = data.selectedLanguage[index];
    return selectedLocation && selectedLanguage;
  });

  const hasUploadedCreatives = data.channel.every((_, index) => {
    return !!data.imagePreviews[index]; 
  });


    return (
        isValidCampaignName &&
        hasValidProducts &&
        hasValidChannels &&
        hasValidLocations &&
        hasValidLanguages &&
        isValidStartDate &&
        hasValidDescription &&
        hasValidTargetAudience &&
        isValidEndDate &&
        hasValidComboBoxSelections &&
        hasUploadedCreatives
    );
};

const handleSubmit = ()=>{
  if (validateFormData(formData)) {
  setConfirmationModal(true)
} else {
  alert('Please fill in fields correctly.');
}
}


  const handleConfirm = () => {
      const creatives = formData.channel.map((channel, index) => ({
        uid: index + 1,
        CreativeID: Math.floor(Math.random() * 10000),
        CreativeName: `Creative_${index + 1}`,
        CreativeGraphic: formData.imagePreviews[index] || "",
        language: formData.selectedLanguage[index] || '',
        channel,
        location: formData.selectedLocation[index] || '',
        heading:formData.heading?formData.heading[index]: '',
        subHeading:formData.subHeading?formData.subHeading[index] : '',
        body:formData.body?formData.body[index]: '',
        MarketSpend:formData.MarketSpend?formData.MarketSpend[index] : '',
        TotalSales:formData.TotalSales?formData.TotalSales[index] : '',
      }));

      const updatedCampaign = {
        ...campaign,
        ...formData,
        status: "Testing & Approval",
        creatives
      };
      updateCampaign(updatedCampaign);
      localStorage.setItem('campaignData', JSON.stringify(updatedCampaign));
      onClose();
    
  };


  return (
    <Dialog>
      <HeadingR UNSAFE_style={{fontSize:'18px'}}>Edit Campaign : {campaign?.campaignName}</HeadingR>
      <Content UNSAFE_style={{ marginTop: '30px' }}>
        <Box style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
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
            channelList={channelList}
            productList={productList}
            languageList={languageList}
            locationList={locationList}
            onChange={handleFormChange}
          />
             <Card variant='surface' className='card-content' style={{padding:'10px', marginTop:'20px'}}>
          <Flex direction='row' wrap='wrap' gap='size-100'>
            {formData?.channel?.map((label, index) => (
              <Box key={index} maxWidth='280px' style={{ padding: '20px', border: "1px solid #eee" }}>
                <Box style={{ marginBottom: '10px' }}>
                  <Text size='1' style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px' }}>{label}</Text>
                </Box>
               

      {/* Heading Field */}
      <TextArea
        label="Heading"
        width='100%'
        value={formData.heading?formData.heading[index] : ''}
        onChange={(value) => handleFieldChange(index, 'heading', value)}
        marginBottom={'10px'}
      />

      
      <TextArea
        label="Sub Heading"
        width='100%'
        value={formData.subHeading?formData.subHeading[index] : ''}
        onChange={(value) => handleFieldChange(index, 'subHeading', value)} 
        marginBottom={'10px'}

      />

     
      <TextArea
        label="Body"
        width='100%'
        value={formData.body?formData.body[index] : ''}
        onChange={(value) => handleFieldChange(index, 'body', value)} 
        marginBottom={'10px'}

      />

      
      <NumberField
        width='100%'
        label="Market Spend"
        minValue={0}
        value={formData.MarketSpend?formData.MarketSpend[index] : 0}
        onChange={(value) => handleFieldChange(index, 'MarketSpend', value)} 
        marginBottom={'10px'}

      />

      
      {/* <NumberField
        width='100%'
        label="Total Sales"
        minValue={0}
        value={formData.TotalSales? formData.TotalSales[index] : 0}
        onChange={(value) => handleFieldChange(index, 'TotalSales', value)} 
        marginBottom={'10px'}

      /> */}

                <ComboBox
                  label="Geography"
                  isRequired
                  width='100%'
                  placeholder='Select..'
                  defaultItems={locationList}
                  selectedKey={formData.selectedLocation[index] || ''}
                  onSelectionChange={key => handleComboBoxChange(index, 'location', key as string)}
        marginBottom={'10px'}

                >
                  {item => <Item key={item.label}>{item.label}</Item>}
                </ComboBox>

                <ComboBox
                  label="Language"
                  isRequired
                  width='100%'
                  placeholder='Select..'
                  defaultItems={languageList}
                  selectedKey={formData.selectedLanguage[index] || ''}
                  onSelectionChange={key => handleComboBoxChange(index, 'language', key as string)}
        marginBottom={'10px'}

                >
                  {item => <Item key={item.label}>{item.label}</Item>}
                </ComboBox>




                <Button2
                  variant='primary'
                  UNSAFE_style={{ marginTop: '10px' }}
                  onPress={() => handleFileUploadClick(index)}
                >
                  Upload Creative
                </Button2>
                <input
                  type="file"
                  id={`file-input-${index}`}
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={(event) => handleFileChange(index, event)}
                />
                {formData.imagePreviews[index] && (
                  <Box style={{ marginTop: '10px' }}>
                    <img
                      src={formData.imagePreviews[index] || ''}
                      alt="Uploaded Preview"
                      style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Flex>
        </Card>
        </Box>
     
      </Content>
      <ButtonGroup>
        <Button2 variant="secondary" onPress={onClose}>Cancel</Button2>
        <Button2 variant="primary" onPress={handleSave}>Save</Button2>
        <Button2 variant="accent" onPress={handleSubmit}>Submit</Button2>

{ confirmationModal && (

        <DialogContainer onDismiss={()=>{setConfirmationModal(false)}}>
            <Dialog >

              <Content>
                <Text align='center'>
                  Once you submit, you won’t be able to make further changes, and the campaign will be set to <b>Testing & Approval</b> .
                </Text>
              </Content>
              <ButtonGroup>
                <Button2 variant="secondary" onPress={()=>{setConfirmationModal(false)}}>Cancel</Button2>
                <Button2 variant="accent" onPress={handleConfirm}>Confirm</Button2>
              </ButtonGroup>
            </Dialog>
        </DialogContainer>
)
}
      </ButtonGroup>
    </Dialog>
  );
};

export default CampaignEdit;
