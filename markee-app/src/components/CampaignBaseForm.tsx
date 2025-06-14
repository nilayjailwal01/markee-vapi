import React, { useState, useEffect } from 'react';
import { View, DatePicker, ComboBox, Item, Grid, TextArea } from '@adobe/react-spectrum';
import { Text } from '@radix-ui/themes';
import { MultiSelect, Option as MultiSelectOption } from 'react-multi-select-component';
import campaignOptions from '../components/utilities/campaignOptions';
import { parseDate, DateValue } from '@internationalized/date';

interface Option {
    value: string | number;
    label: string;
}

interface CampaignBaseFormProps {
    plannedStartDate?: any; 
    plannedEndDate?: any;
    campaignStage: string;
    campaignName: string;
    description: string;
    targetAudience: string;
    location: string[];
    channel: string[];
    language: string[];
    products: string[];
    productList: Option[];
    channelList: Option[];
    languageList: Option[];
    locationList: Option[];
    onChange: (field: string, value: any) => void;
}

export const convertToValues = (options: Option[]): string[] => {
    return options.map(option => String(option.label));
};

const CampaignBaseForm: React.FC<CampaignBaseFormProps> = ({
    plannedStartDate,
    plannedEndDate,
    campaignStage,
    campaignName,
    description,
    targetAudience,
    location,
    channel,
    language,
    products,
    productList,
    channelList,
    languageList,
    locationList,
    onChange
}) => {
    const [localPlannedStartDate, setLocalPlannedStartDate] = useState<DateValue | null>(plannedStartDate ? parseDate(plannedStartDate) : null);
    const [localPlannedEndDate, setLocalPlannedEndDate] = useState<DateValue | null>(plannedEndDate ? parseDate(plannedEndDate) : null);

    const [productOptions] = useState<Option[]>(campaignOptions.Products.options);
    const [channelOptions] = useState<Option[]>(campaignOptions.Channel.options);
    const [languageOptions] = useState<Option[]>(campaignOptions.Languages.options);
    const [geographyOptions] = useState<Option[]>(campaignOptions.Geography.options);

    useEffect(() => {
        if (plannedStartDate) {
            setLocalPlannedStartDate(parseDate(plannedStartDate));
        } else {
            setLocalPlannedStartDate(null);
        }

        if (plannedEndDate) {
            setLocalPlannedEndDate(parseDate(plannedEndDate));
        } else {
            setLocalPlannedEndDate(null);
        }
    }, [plannedStartDate, plannedEndDate]);

    const handleProductChange = (items: MultiSelectOption[]) => {
        onChange('products', convertToValues(items));
        onChange('productList', items);
    };

    const handleChannelChange = (items: MultiSelectOption[]) => {
        onChange('channel', convertToValues(items));
        onChange('channelList', items);
    };

    const handleLanguageChange = (items: MultiSelectOption[]) => {
        onChange('language', convertToValues(items));
        onChange('languageList', items);
    };

    const handleGeographyChange = (items: MultiSelectOption[]) => {
        onChange('location', convertToValues(items));
        onChange('locationList', items);
    };

    return (
        <>
            <Grid
                areas={['col1 col2 col3 col4 col5 col6']}
                columns={['1fr', '1fr', '1fr', '1fr', '1fr', '1fr']}
                gap="size-100"
                UNSAFE_className='campaignForm'
                
            >
                <View gridArea="col1" margin="size-100">
                    <DatePicker
                        label="Launch Date"
                        value={localPlannedStartDate}
                        onChange={date => {
                            setLocalPlannedStartDate(date);
                            onChange('plannedStartDate', date ? date.toString() : ''); 
                        }}
                        width='100%'
                        
                    />
                </View>
                <View gridArea="col2" margin="size-100">
                    <DatePicker
                        label="End Date"
                        value={localPlannedEndDate}
                        onChange={date => {
                            setLocalPlannedEndDate(date);
                            onChange('plannedEndDate', date ? date.toString() : ''); 
                        }}
                        width='100%'
                        
                    />
                </View>
                <View gridArea="col3" margin="size-100" UNSAFE_className='customlabel'>
                    <ComboBox
                        label="Campaign Stage"
                        isRequired
                        width='100%'
                        placeholder='Select..'
                        UNSAFE_className="custom-combobox" 
                        defaultItems={campaignOptions.Type.options}
                        selectedKey={campaignStage}
                        onSelectionChange={item => onChange('campaignStage', item)}
                    >
                        {item => <Item key={item.label}>{item.label}</Item>}
                    </ComboBox>
                </View>
                <View gridArea="col4" margin="size-100" UNSAFE_className='custom-multi'>
                    <Text size='1'>Products *</Text>
                    <MultiSelect
                        options={productOptions}
                        value={productList}
                        onChange={handleProductChange}
                        labelledBy="Select"
                    />
                </View>
                <View gridArea="col5" margin="size-100" UNSAFE_className='custom-multi'>
                    <Text size='1'>Languages *</Text>
                    <MultiSelect
                        options={languageOptions}
                        value={languageList}
                        onChange={handleLanguageChange}
                        labelledBy="Select"
                    />
                </View>
                <View gridArea="col6" margin="size-100" UNSAFE_className='custom-multi'>
                    <Text size='1'>Geography *</Text>
                    <MultiSelect
                        labelledBy='Geography'
                        value={locationList}
                        onChange={handleGeographyChange}
                        options={geographyOptions}
                    />
                </View>
            </Grid>
            <Grid
                areas={['col1 col2 col3']}
                columns={['5fr', '5fr', '2fr']}
                gap="size-100"
            >
                <View gridArea="col1" margin="size-100" UNSAFE_className='customlabel'>
                    <TextArea
                        isRequired
                        label="Name"
                        width='100%'
                        value={campaignName}
                        onChange={value => onChange('campaignName', value)}
                    />
                </View>
                <View gridArea="col2" margin="size-100" UNSAFE_className='customlabel'>
                    <TextArea
                        label="Description"
                        width='100%'
                        value={description}
                        onChange={value => onChange('description', value)}
                    />
                </View>
                <View gridArea="col3" margin="size-100" UNSAFE_className='custom-multi'>
                    <Text size='1'>Channel *</Text>
                    <MultiSelect
                        options={channelOptions}
                        value={channelList}
                        onChange={handleChannelChange}
                        labelledBy="Select"
                    />
                </View>
            </Grid>
            <Grid
                areas={['col1 col2 col3']}
                columns={['5fr 5fr 2fr']}
                gap="size-100"
            >
                <View gridArea="col1" margin="size-100" UNSAFE_className='customlabel'>
                    <TextArea
                        label="Target Audience"
                        width='100%'
                        value={targetAudience}
                        onChange={value => onChange('targetAudience', value)}
                    />
                </View>
                <View gridArea="col2"></View>
                <View gridArea="col3"></View>
            </Grid>
        </>
    );
};

export default CampaignBaseForm;
