import { useEffect, useState } from "react";
import { DatePicker, Radio, RadioGroup } from '@adobe/react-spectrum';
import { DateValue } from "@react-types/datepicker";
import { MultiSelect } from 'react-multi-select-component';
import { Section, Text, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import campaignOptions from '../../components/utilities/campaignOptions'
import { CampData } from "../utilities/campaignData";

interface MetricProps {
    textSearch?: boolean,
    campaignData: CampData[],
    updateData: any,
    type: any
}

interface valueLabel {
    value: number,
    label: string
}

export default function MetricFilters({  textSearch = false, type, campaignData, updateData }: MetricProps) {
   
    const [selectedMetric, setSelectedMetric] = useState<string>(""); 

  
    useEffect(()=>{
        updateData(selectedMetric);
    },[selectedMetric])
    const handleMetricChange = (value: string) => {
        setSelectedMetric(value);
    };

    useEffect(()=>{
        if(type == 'Email'){
            setSelectedMetric("['OR','CTR']")
        }else if (type == 'Youtube' || type == 'Facebook' || type == 'Snapchat'){
            setSelectedMetric("['Views','Clicks']")
        }
        else if (type =='App Notification'){
            setSelectedMetric("ConversionRate")
        }
    },[type])

    return (
        <>
            {textSearch && (
                <Section style={{ display: "flex", alignItems: "end", padding: "0", marginBottom: "7px" }}>
                    <TextField.Root style={{ backgroundColor: '#FFF', width: '200px' }} placeholder="Search Campaigns...">
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>
                </Section>
            )}
{ type == 'Email' && (
            <RadioGroup value={selectedMetric} onChange={handleMetricChange}>
                <Radio value="['OR','CTR']" >OR, CTR</Radio>
                <Radio value="['OR','UnsubscribeRate']" >OR, Unsubscribe Rate</Radio>
                <Radio value="TotalSales" >Total Sales</Radio>
                <Radio value="['CTR','ConversionRate']" >CTR, Conversion Rate</Radio>
            </RadioGroup>
)}
{ (type == 'Youtube' || type == 'Facebook') && (
            <RadioGroup value={selectedMetric} onChange={handleMetricChange}>
                <Radio value="['Views','Clicks']" >Views vs Clicks</Radio>
                <Radio value="['Likes','Comments','Shares]" >Likes vs Comments vs Shares</Radio>
                <Radio value="['CTR','ConversionRate']" >CTR, Conversion Rate</Radio>
                <Radio value="['MarketSpend','TotalSales']" >MarketSpend vs Total Sales</Radio>

            </RadioGroup>
)}
{ (type == 'Snapchat' ) && (
            <RadioGroup value={selectedMetric} onChange={handleMetricChange}>
                <Radio value="['Views','Clicks']" >Views vs Clicks</Radio>
                <Radio value="['CTR','ConversionRate']" >CTR, Conversion Rate</Radio>
                <Radio value="['MarketSpend','TotalSales']" >MarketSpend vs Total Sales</Radio>

            </RadioGroup>
)}
{ (type == 'App Notification' ) && (
            <RadioGroup value={selectedMetric} onChange={handleMetricChange}>
               <Radio value="ConversionRate" >Conversion Rate</Radio>
               <Radio value="TotalSales" >Total Sales</Radio>
            </RadioGroup>
)}
        </>
    );
}
