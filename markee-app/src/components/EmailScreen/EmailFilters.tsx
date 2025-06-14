import { useEffect, useState } from "react";
import { DatePicker, View } from '@adobe/react-spectrum';
import { DateValue } from "@react-types/datepicker";
import { MultiSelect } from 'react-multi-select-component';
import { Section, Text, TextField, Button } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import campaignOptions from '../../components/utilities/campaignOptions';
import { CampData } from "../utilities/campaignData";

interface EmailProps {
    textSearch?: boolean,
    campaignData: CampData[],
    updateData: any
}

interface valueLabel {
    value: number,
    label: string
}

export default function EmailFilters({ textSearch = false, campaignData, updateData }: EmailProps) {

    const [selectedType, setSelectedType] = useState<valueLabel[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<valueLabel[]>([]);
    const [selectedLanguages, setSelectedLanguages] = useState<valueLabel[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<valueLabel[]>([]);
    const [selectedStartDate, setSelectedStartDate] = useState<DateValue | null>(null);
    const [selectedEndDate, setSelectedEndDate] = useState<DateValue | null>(null);
    const [searchInput, setSearchInput] = useState<string>(""); // New state for search input

    useEffect(() => {
        let filteredData = campaignData;

        if (searchInput) {
            filteredData = filteredData.filter(({ campaignName }) => 
                campaignName?.toLowerCase().includes(searchInput.toLowerCase())
            );
        }

        if (selectedType.length > 0) {
            filteredData = filteredData.filter(({ campaignStage = "" }) => selectedType.map(e => e.label).includes(campaignStage));
        }
        if (selectedProducts.length > 0) {
            const sproducts = selectedProducts.map(e => e.label);
            filteredData = filteredData.filter(({ products }) => products?.some(e => sproducts.includes(e)));
        }
        if (selectedLocation.length > 0) {
            const locations = selectedLocation.map(e => e.label);
            filteredData = filteredData.filter(({ location }) => location?.some(e => locations.includes(e)));
        }
        if (selectedLanguages.length > 0) {
            const languages = selectedLanguages.map(e => e.label);
            filteredData = filteredData.filter(({ language }) => language?.some(e => languages.includes(e)));
        }
        updateData(filteredData);
    }, [selectedType, selectedProducts, selectedLanguages, selectedLocation, selectedStartDate, selectedEndDate, searchInput]);

    const resetFilters = () => {
        setSelectedType([]);
        setSelectedProducts([]);
        setSelectedLanguages([]);
        setSelectedLocation([]);
        setSelectedStartDate(null);
        setSelectedEndDate(null);
        setSearchInput(""); // Reset search input
    };

    return (
        <>
            {textSearch && (
                <Section style={{ display: "flex", alignItems: "end", padding: "0", marginBottom: "7px" }}>
                    <TextField.Root 
                        style={{ backgroundColor: '#FFF', width: '200px' }} 
                        placeholder="Search Campaigns..."
                        onChange={e => setSearchInput(e.target.value)} // Handle input change
                    >
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>
                </Section>
            )}
            
            <Section className="py-2 ta-left max-w-200">
                <Text style={{ fontSize: "12px", fontWeight: '500' }}>Campaign Stage</Text>
                <MultiSelect
                    labelledBy='Campaign Stage'
                    value={selectedType}
                    onChange={setSelectedType}
                    options={campaignOptions.Type.options}
                />
            </Section>
            <Section className="py-2 ta-left  max-w-200">
                <Text style={{ fontSize: "12px", fontWeight: '500' }}>Products</Text>
                <MultiSelect
                    labelledBy='Products'
                    value={selectedProducts}
                    onChange={setSelectedProducts}
                    options={campaignOptions.Products.options}
                />
            </Section>
            <Section className="py-2 ta-left  max-w-200">
                <Text style={{ fontSize: "12px", fontWeight: '500' }}>Languages</Text>
                <MultiSelect
                    labelledBy='Languages'
                    value={selectedLanguages}
                    onChange={setSelectedLanguages}
                    options={campaignOptions.Languages.options}
                />
            </Section>
            <Section className="py-2 ta-left  max-w-200">
                <Text style={{ fontSize: "12px", fontWeight: '500' }}>Geography</Text>
                <MultiSelect
                    labelledBy='Geography'
                    value={selectedLocation}
                    onChange={setSelectedLocation}
                    options={campaignOptions.Geography.options}
                />
            </Section>
            <View>
                <Button mt='30px' variant='outline' onClick={resetFilters}>Reset</Button>
            </View>
        </>
    );
}
