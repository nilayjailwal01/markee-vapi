import React, { useState } from 'react';
import { Box, Card, Flex, Heading, IconButton, Tabs } from '@radix-ui/themes';
import AnalyticsSVG from '../icons/chart.svg';
import MMMCardContainer from '../components/MediaMixModelScreen/MMMCardcontainer';
import SalesLineChart from '../components/ui/LineChartComponent';
import DonutChart from '../components/ui/DonutChartComponent';
import InsightsComponent from '../components/MediaMixModelScreen/MMMInsightsCard';
import RecommendationDropdown from '../components/RecommendationScreen/RecommendationFilters';
import RecommendationCardComponent from '../components/RecommendationScreen/RecommendationCards';
import ResponsiveLineChart from '../components/ui/ResponsiveChartComponent';
import ABTesting from '../components/ABTesting/ABTesting';

interface Option {
  value: string | number;
  label: string;
}

const AI_Anlaytics: React.FC = () => {


  const cardData = [{
    title: "Sales",
    content: "25.10",
    change:"+10%"
  },
  {
    title: "Incremental Sales",
    content: "6.30",
    change:"+13%"
  },
  {
    title: "Media Spends",
    content: "5.10",
    change:"-7%"
  },
  {
    title: "Media ROI",
    content: "1.15",
    change:"+20%"
  }];

  const [campaignStage, setCampaignStage] = useState<string>('');
  const [locationList, setLocationList] = useState<Option[]>([]);

  // Handler to update state based on changes from RecommendationDropdown
  const handleChange = (field: string, value: any) => {
    if (field === 'campaignStage') {
      setCampaignStage(value);
    } else if (field === 'location') {
      // You might handle the location value differently
    } else if (field === 'locationList') {
      setLocationList(value);
    }
  };

  return (
    <Flex gap="4" wrap="wrap">
      <Flex gap="2" align="center">
        <IconButton  className='IconButton' variant="outline" style={{ border: 0, boxShadow: 'none' }}>
          <img src={AnalyticsSVG} width='22' height='22' alt="Properties" />
        </IconButton>
        <Heading as="h3" className='pagehead'>AI Analytics</Heading>
      </Flex>
      <Box width="100%">
          <Tabs.Root defaultValue="2">
            <Tabs.List mb='20px'>
              <Tabs.Trigger value="2">NBX Generation</Tabs.Trigger>
              <Tabs.Trigger value="1">Media Attribution</Tabs.Trigger>
              
              <Tabs.Trigger value="3">A/B Testing</Tabs.Trigger>
            </Tabs.List>

          <Tabs.Content value="1" className='tabs-content'>
       
          <Card variant="surface" className='card-content'>

            <Flex direction="row" gap="10px" style={{ flexWrap: 'wrap' }}>
              {/* MMM Cards */}
              <Box style={{ flex: '1', minWidth: '300px' }}>
                <MMMCardContainer cards={cardData} />
              </Box>
              {/* Insights Component */}
              <Box style={{ flex: '0 0 300px', minWidth: '340px', display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                <InsightsComponent />
              </Box>

            </Flex>
            </Card>

            {/* Charts */}
            <Flex direction="row" gap="20px" style={{ marginTop: '20px', flexWrap: 'wrap' }}>
              <Box style={{ flex: '1', minWidth: '300px' }}>
              <Card variant="surface" className='card-content'>
                <SalesLineChart />
                </Card>
              </Box>
              <Box style={{ flex: '1', minWidth: '300px' }}>
              <Card variant="surface" className='card-content'>
                <DonutChart />
                </Card>
              </Box>
            </Flex>

            {/* ResponsiveLineChart */}
            <Box style={{ marginTop: '20px' }}>
            <Card variant="surface" className='card-content'>
                <ResponsiveLineChart />
              </Card>
            </Box>
          </Tabs.Content>

            <Tabs.Content value="2" className='tabs-content'>
 <Box style={{padding:'20px', background:'white',borderRadius:'10px', marginBottom:'20px'}}>
              <RecommendationDropdown
                campaignStage={campaignStage}
                locationList={locationList}
                onChange={handleChange}
              />
              </Box>
                
              <RecommendationCardComponent
                campaignStage={campaignStage}
                locationList={locationList} />
            </Tabs.Content>

            <Tabs.Content value="3" className='tabs-content'>
            <Card variant="surface" className='card-content'>

              <ABTesting />
              </Card>
            </Tabs.Content>
          </Tabs.Root>

      </Box>

    </Flex>
  );
};

export default AI_Anlaytics;
