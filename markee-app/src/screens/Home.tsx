import React, { useEffect, useState } from 'react';
import { Box, Card, Flex } from '@radix-ui/themes';
import { HomeFilters } from '../components/HomeScreen/HomeFilters';
import { HomeCards } from '../components/HomeScreen/HomeCards';
import { HomeCampaignTabs } from '../components/HomeScreen/HomeCampaignTabs';
import { HomeUpdates } from '../components/HomeScreen/HomeUpdates';
// import { HomeTopPerformers } from '../components/HomeScreen/HomeTopPerformers'; // Uncomment if needed
import { BoxIcon } from '@radix-ui/react-icons';

const Home: React.FC = () => {
  const [activeTitle, setActiveTitle] = useState<string>("Awareness");
  const [key, setKey] = useState<number>(0);
  const [filteredOptions, setFilteredOptions] = useState({});

  useEffect(() => {
   console.log('filter options',filteredOptions)
  }, [filteredOptions]);

  const handleActiveTitleUpdate = (title: string) => {
    setActiveTitle(title);
    setKey(prevKey => prevKey + 1);
  };

  const handleFilterChange = (filters: any) => {
    setFilteredOptions(filters);
  };

  return (
    <Flex direction="column" align="start">
      <Box className='card-content2' style={{ width: '100%', paddingBottom: '10px', marginBottom: '20px' }}>
        <HomeFilters onFilterChange={handleFilterChange} />
      </Box>
      <HomeCards updateActiveTitle={handleActiveTitleUpdate} />

      <Card variant='surface' className='card-content' style={{ width: '100%' }}>
        <HomeUpdates campaignStage={activeTitle} filteredOptions={filteredOptions} />
      </Card>

      <Card variant='surface' className='card-content' style={{ width: '100%', marginTop: '20px', marginBottom: '20px' }}>
        <HomeCampaignTabs key={key} campaignStage={activeTitle} />
      </Card>
       
      {/* <HomeTopPerformers /> */}
    </Flex>
  );
};

export default Home;
