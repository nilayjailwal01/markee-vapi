import React, { useState } from 'react';
import { Box, Text } from '@radix-ui/themes';
import { Button } from '@radix-ui/themes';
import campaignOptions from '../../components/utilities/campaignOptions';
import { MultiSelect } from "react-multi-select-component";

// Define the props interface
interface HomeFiltersProps {
    onFilterChange: (filters: {
        products: any[];
        languages: any[];
        geography: any[];
    }) => void;
}

export const HomeFilters: React.FC<HomeFiltersProps> = ({ onFilterChange }) => {
    const [selected, setSelected] = useState<any[]>([]);
    const [selected2, setSelected2] = useState<any[]>([]);
    const [selected3, setSelected3] = useState<any[]>([]);

    const handleProductChange = (selectedOptions: any[]) => {
        setSelected(selectedOptions);
        onFilterChange({
            products: selectedOptions,
            languages: selected2,
            geography: selected3,
        });
    };

    const handleLanguageChange = (selectedOptions: any[]) => {
        setSelected2(selectedOptions);
        onFilterChange({
            products: selected,
            languages: selectedOptions,
            geography: selected3,
        });
    };

    const handleGeographyChange = (selectedOptions: any[]) => {
        setSelected3(selectedOptions);
        onFilterChange({
            products: selected,
            languages: selected2,
            geography: selectedOptions,
        });
    };

    return (
        <div>
            <Box>
                <ul style={{ gap: '1rem' }} className='flex mb-1-5 wrap'>
                    <li style={{ width: '230px', textAlign: 'left' }}>
                        <Text size='2' style={{ marginTop: '3px', fontWeight: '500' }}>Products</Text>
                        <Box style={{ height: '20px' }}>
                            <MultiSelect
                                options={campaignOptions.Products.options}
                                value={selected}
                                onChange={handleProductChange}
                                labelledBy="Select"
                            />
                        </Box>
                    </li>
                    <li style={{ width: '230px', textAlign: 'left' }}>
                        <Text size='2' style={{ marginTop: '3px', fontWeight: '500' }}>Languages</Text>
                        <Box style={{ height: '20px' }}>
                            <MultiSelect
                                options={campaignOptions.Languages.options}
                                value={selected2}
                                onChange={handleLanguageChange}
                                labelledBy="Select"
                            />
                        </Box>
                    </li>
                    <li style={{ width: '230px', textAlign: 'left' }}>
                        <Text size='2' style={{ marginTop: '3px', fontWeight: '500' }}>Geography</Text>
                        <Box style={{ height: '20px' }}>
                            <MultiSelect
                                options={campaignOptions.Geography.options}
                                value={selected3}
                                onChange={handleGeographyChange}
                                labelledBy="Select"
                            />
                        </Box>
                    </li>
                    <li key="reset" className='flex f-end m-width-16' style={{ paddingTop: '25px' }}>
                        <Button variant='outline' onClick={() => {
                            setSelected([]);
                            setSelected2([]);
                            setSelected3([]);
                            onFilterChange({ products: [], languages: [], geography: [] }); // Notify parent of reset
                        }}>
                            Reset
                        </Button>
                    </li>
                </ul>
            </Box>
        </div>
    );
};
