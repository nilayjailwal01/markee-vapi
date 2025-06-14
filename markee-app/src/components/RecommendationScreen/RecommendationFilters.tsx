import React, { useState } from 'react';
import { View, ComboBox, Item, Grid, Text } from '@adobe/react-spectrum';
import { MultiSelect, Option as MultiSelectOption } from 'react-multi-select-component';
import campaignOptions from '../../components/utilities/campaignOptions';
import { Box, Button } from '@radix-ui/themes';

interface Option {
  value: string | number;
  label: string;
}

interface RecommendationDropdownProps {
  campaignStage: string;
  locationList: Option[];
  onChange: (field: string, value: any) => void;
}

const convertToValues = (options: Option[]): string[] => {
  return options.map(option => String(option.label));
};

const RecommendationDropdown: React.FC<RecommendationDropdownProps> = ({
  campaignStage,
  locationList,
  onChange
}) => {
  const [geographyOptions] = useState<Option[]>(campaignOptions.Geography.options);

  const handleGeographyChange = (items: MultiSelectOption[]) => {
    onChange('location', convertToValues(items));
    onChange('locationList', items);
  };

  const handleReset = () => {
    onChange('campaignStage', '');
    onChange('location', []);
    onChange('locationList', []);
  };
  return (
    <Grid
      gap="size-100"
      columns="1fr 1fr 1fr 1fr"
      areas={['stage geography']}
    >
      <View gridArea="stage" margin="size-100" UNSAFE_className='customlabel'>
        <ComboBox
          label="Campaign Stage"
          minWidth="250px"
          placeholder="Select.."
          defaultItems={campaignOptions.Type.options}
          selectedKey={campaignStage}
          onSelectionChange={item => onChange('campaignStage', item)}
          UNSAFE_className='custom-combobox'
        >
          {item => <Item key={item.label}>{item.label}</Item>}
        </ComboBox>
      </View>

      <View gridArea="geography" margin="size-100" UNSAFE_className='custom-multi' UNSAFE_style={{ textAlign: 'left' }}>
        <Text >Geography</Text>
        <Box minWidth='250px'  >
          <MultiSelect
            labelledBy="Geography"
            value={locationList}
            onChange={handleGeographyChange}
            options={geographyOptions}
          />
         
        </Box>
      
      </View>
      <Box width={'100px'}>
        <Button variant='outline' onClick={handleReset} mt='32px'>
            Reset
          </Button>
        </Box>

    </Grid>
  );
};

export default RecommendationDropdown;
