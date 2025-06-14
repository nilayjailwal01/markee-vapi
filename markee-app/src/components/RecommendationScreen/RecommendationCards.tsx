import React, { useState, useEffect } from 'react';
import { Flex, Box, Button, Heading, Text } from '@radix-ui/themes';
import WarningIcon from '../../icons/warning(3).svg';
import SuccessIcon from '../../icons/warning(1).svg';
import { useNavigate } from 'react-router-dom';
import campaignData, { CampData } from '../utilities/campaignData';
import newCampaignsData from '../utilities/creativesofCampaignData';

interface Option {
  value: string | number;
  label: string;
}

interface RecommendationCardComponentProps {
  campaignStage: string;
  locationList: Option[];
}

// JSON data
const campaignRecommendationCard = [
  {
    Title: "Urban Retreats",
    Priority: "01",
    dynamic: "Frequent Travellers Early Booker",
    description: "Books once every three months booking at least a month prior to the Reservation date",
    customer: "Customer Count - 1.7 Mil",
    type: "success",
    link: "#details1",
    NextBestProduct: "Travel and Tourism",
    NextBestChannel: "Email",
    SecondBestProduct: "Restro-bars",
    SecondBestChannel: "Facebook",
  },
  {
    Title: "Luxury Unleashed",
    Priority: "02",
    dynamic: "Business Luxury Traveller ",
    description: "Books for Business purpose only Luxury Properties and Services",
    customer: "Customer Count - 2.7 Mil",
    type: "warning",
    link: "#details2",
    NextBestProduct: "Resorts",
    NextBestChannel: "Snapchat",
    SecondBestProduct: "Entertainment and Recreation",
    SecondBestChannel: "YouTube",
  },
  {
    Title: "Transform your Experiences",
    Priority: "03",
    dynamic: "Business Luxury Traveller ",
    description: "Books for Business purpose only Luxury Properties and Services",
    customer: "Customer Count - 3.2 Mil",
    type: "warning",
    link: "#details3",
    NextBestProduct: "Beach Property",
    NextBestChannel: "Email",
    SecondBestProduct: "Heritage Property",
    SecondBestChannel: "Snapchat",
  },
  {
    Title: "Belong Anywhere",
    Priority: "04",
    dynamic: "Infrequent Traveller Points User",
    description: "Travels less than three times in twelve months utilizing Points offers for making Bookings",
    customer: "Customer Count - 1.6 Mil",
    type: "warning",
    link: "#details4",
    NextBestProduct: "Suites",
    NextBestChannel: "Snapchat",
    SecondBestProduct: "Restro-bars",
    SecondBestChannel: "Facebook",
  },
  {
    Title: "Travel with Purpose",
    Priority: "05",
    dynamic: "Family Traveller High Folio",
    description: "Books for Family travels with additional spends more than 30% of the Booking value",
    customer: "Customer Count - 5.4 Mil",
    type: "warning",
    link: "#details5",
    NextBestProduct: "Travel and Tourism",
    NextBestChannel: "Email",
    SecondBestProduct: "Suites",
    SecondBestChannel: "Facebook",
  },
  {
    Title: "True Hospitality for every journey",
    Priority: "06",
    dynamic: "Business Traveller Loyal Segment",
    description: "Books for Business purposes and Belongs to Gold or higher tiers of Loyalty",
    customer: "Customer Count - 3.8 Mil",
    type: "warning",
    link: "#details6",
    NextBestProduct: "Accommodation",
    NextBestChannel: "Facebook",
    SecondBestProduct: "Restro-bars",
    SecondBestChannel: "YouTube",
  },
];

const campaignRecommendationCardChange = [
  {
    Title: "Celebrate the Free Spirit",
    Priority: "01",
    dynamic: "Frequent Travellers Early Booker",
    description: "Books once every three months booking at least a month prior to the Reservation date",
    customer: "Customer Count - 1.1 Mil",
    type: "success",
    link: "#details1",
    NextBestProduct: "Travel and Tourism",
    NextBestChannel: "Email",
    SecondBestProduct: "Resorts",
    SecondBestChannel: "Facebook",
  },
  {
    Title: "Luxury Unleashed",
    Priority: "02",
    dynamic: "Frequent Traveller on Time Booker",
    description: "Books once every three months booking not earlier than one week prior to the Reservation date",
    customer: "Customer Count - 2.1 Mil",
    type: "warning",
    link: "#details2",
    NextBestProduct: "Resorts",
    NextBestChannel: "Snapchat",
    SecondBestProduct: "Entertainment and Recreation",
    SecondBestChannel: "YouTube",
  },
  {
    Title: "Transform your Experiences",
    Priority: "03",
    dynamic: "Business Luxury Traveller ",
    description: "Books for Business purpose only Luxury Properties and Services",
    customer: "Customer Count - 3.2 Mil",
    type: "warning",
    link: "#details3",
    NextBestProduct: "Beach Property",
    NextBestChannel: "Email",
    SecondBestProduct: "Heritage Property",
    SecondBestChannel: "Snapchat",
  },
  {
    Title: "Belong Anywhere",
    Priority: "04",
    dynamic: "Infrequent Traveller Points User",
    description: "Travels less than three times in twelve months utilizing Points offers for making Bookings",
    customer: "Customer Count - 1.6 Mil",
    type: "warning",
    link: "#details4",
    NextBestProduct: "Suites",
    NextBestChannel: "Snapchat",
    SecondBestProduct: "Restro-bars",
    SecondBestChannel: "Facebook",
  },
  {
    Title: "Travel with Purpose",
    Priority: "05",
    dynamic: "Family Traveller High Folio",
    description: "Books for Family travels with additional spends more than 30% of the Booking value",
    customer: "Customer Count - 5.4 Mil",
    type: "warning",
    link: "#details5",
    NextBestProduct: "Travel and Tourism",
    NextBestChannel: "Email",
    SecondBestProduct: "Suites",
    SecondBestChannel: "Facebook",
  },
  {
    Title: "True Hospitality for every journey",
    Priority: "06",
    dynamic: "Group Traveller Early Booker",
    description: "Make Group Bookings at least a month prior to the Reservation date",
    customer: "Customer Count - 3.8 Mil",
    type: "warning",
    link: "#details6",
    NextBestProduct: "Accommodation",
    NextBestChannel: "Facebook",
    SecondBestProduct: "Restro-bars",
    SecondBestChannel: "YouTube",
  },
];

const specialDataStatic =
{
  Title: "Celebrate the Free Spirit",
  Priority: "1",
  dynamic: "Frequent Travellers Early Booker",
  description: "Books once every three months booking at least a month prior to the Reservation date",
  customer: "1.1",
  type: "success",
  link: "#details1",
  NextBestProduct: "Travel and Tourism",
  NextBestChannel: "Email",
  SecondBestProduct: "Resorts",
  SecondBestChannel: "Facebook",
}



interface NewCampaignData {
  Title: string;
  Priority: string;
  dynamic: string;
  description: string;
  customer: string;
  type: string;
  link: string;
  NextBestProduct: string;
  NextBestChannel: string;
  SecondBestProduct: string;
  SecondBestChannel: string;
}

const RecommendationCardComponent: React.FC<RecommendationCardComponentProps> = ({ campaignStage, locationList }) => {
  const [filteredRecommendations, setFilteredRecommendations] = useState<NewCampaignData[]>([]);
  const [recommendationsData, setRecommendationsData] = useState<NewCampaignData[]>([]);
  const [loading, setLoading] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null); // To track which card's tooltip is visible
  const [tooltipTimeout, setTooltipTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (campaignData && campaignData.length > 0) {
      const transformedData = transformCampaignData(campaignData, 1);
      setRecommendationsData(transformedData);
      setFilteredRecommendations(transformedData);
    } else {
      console.warn('campaignData is empty or undefined');
    }
  }, [campaignData]);

  useEffect(() => {
    if (campaignStage && locationList.length > 0) {
      setLoading(true);
      const timer = setTimeout(() => {
        const filteredData = campaignData.filter((campaign) => {
          const isMatchingStage = campaignStage ? campaign.campaignStage === campaignStage : true;
          const isMatchingLocation = locationList.length === 0 || locationList.some(location => campaign.location?.includes(location.label));
          return isMatchingStage && isMatchingLocation;
        });
  
        const isCanadaAndUSOnly = locationList.length === 2 &&
          locationList.some(location => location.label === 'Canada') &&
          locationList.some(location => location.label === 'United States');
  
        let startIndex = (campaignStage === 'Conversion' && isCanadaAndUSOnly) ? 2 : 1;
        let transformedData = transformCampaignData(filteredData, startIndex);
  
        if (campaignStage === 'Conversion' && isCanadaAndUSOnly) {
          if (!transformedData.includes(specialDataStatic)) {
            transformedData = [specialDataStatic, ...transformedData];
          }
        } else {
          transformedData = transformedData.filter(data => data !== specialDataStatic);
        }
  
        setFilteredRecommendations(transformedData);
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    } else {
      setFilteredRecommendations(recommendationsData);
    }
    console.log("recommendationsData", recommendationsData);
  }, [campaignStage, locationList, recommendationsData]);
  

  const handleCreateCampaign = (card: any) => {
    const payload = {
      campaignName: card.Title,
      description: "",
      plannedStartDate: null,
      plannedEndDate: null,
      status: 'In Development',
      products: [card.NextBestProduct, card.SecondBestProduct],
      language: [],
      location: locationList?.map(x => x.label),
      campaignStage,
      channel: [card.NextBestChannel, card.SecondBestChannel],
      productList: [],
      languageList: [],
      locationList,
      channelList: [],
      targetAudience: card.dynamic,
      isCreated: true
    };
    navigate('/create-campaign', { state: { formData: payload } });
  };

  const getRandomItem = (array: string[]): string => {
    if (!array || array.length === 0) {
      return "No data available";
    }
    return array[Math.floor(Math.random() * array.length)];
  };

  const getDifferentRandomItem = (array: string[], exclude: string): string => {
    const filteredArray = array.filter(item => item !== exclude);
    return filteredArray.length > 0 ? getRandomItem(filteredArray) : "No data available";
  };

  const transformCampaignData = (campaignData: CampData[], startIndex: number ): NewCampaignData[] => {
    return campaignData.map((campaign, index) => {
      const Title = campaign.campaignName || "";
      const description = campaign.description || "";
  
      const products = campaign.products || [];
      const channels = campaign.channel || [];
  
      const NextBestProduct = getRandomItem(products);
      const SecondBestProduct = getDifferentRandomItem(products, NextBestProduct);
  
      const NextBestChannel = getRandomItem(channels);
      const SecondBestChannel = getDifferentRandomItem(channels, NextBestChannel);
  
      return {
        Title: Title,
        Priority: (startIndex + index).toString(), // Convert number to string
        dynamic: getRandomItem([
          'Frequent Travellers Early Booker',
          'Business Luxury Traveller',
          'Infrequent Traveller Points User',
          'Family Traveller High Folio',
          'Business Traveller Loyal Segment'
        ]),
        description: description,
        customer: getRandomItem(["1.7", "2.1", "1.3", "2.2", "1.6", "1.9", "2.2", "1.1", "1.8"]),
        type: "",
        link: "",
        NextBestProduct: NextBestProduct,
        NextBestChannel: NextBestChannel,
        SecondBestProduct: SecondBestProduct,
        SecondBestChannel: SecondBestChannel
      };
    });
  };
  
  


  const handleMouseEnter = (index: number) => {
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
    }
    setTooltipTimeout(setTimeout(() => {
      setTooltipIndex(index);
    }, 200)); // Delay of 200ms
  };

  const handleMouseLeave = () => {
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
    }
    setTooltipIndex(null);
  };
  return (
    <Box style={{ textAlign: 'left', marginTop: '20px' }}>
      <Text size='3' weight={'bold'} >Recommendations</Text>
      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'left', marginTop: '20px' }}>
        {loading ? (
          <Button disabled loading>
            Loading...
          </Button>
        ) : (
          filteredRecommendations.map((card, index) => {
            const icon = card.type === 'success' ? SuccessIcon : WarningIcon;
            return (
              <Box
                key={index}
                style={{
                  borderRadius: '8px',
                  padding: '20px',
                  width: '32%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  background: 'rgb(255 255 255)',
                  position: 'relative',
                  boxShadow: 'rgb(0 0 0 / 0%) 2px 2px 10px 4px'
                }}
              >
                <Box style={{ minHeight: '260px' }}>
                  <Box>
                    <Flex>
                      <img src={icon} width="24" height="24" alt="Icon" style={{ flexShrink: 0 }} />
                      <Heading ml='10px' size='3'>{card.Title}</Heading>
                    </Flex>
                    <Flex direction="column" style={{ flex: '1', marginTop: '10px' }}>
                      <Flex direction="row" style={{ marginTop: '10px' }}>
                      <Flex direction="column" style={{ flex: '1', gap: '8px', position: 'relative' }}>
  <div
    style={{ display: 'inline-block', position: 'relative' }}
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={handleMouseLeave}
  >
    <p
      style={{
        margin: 0,
        fontSize: '12px',
        backgroundColor: '#e8f5e9',
        padding: '5px',
        borderRadius: '4px',
        color: 'black'
      }}
    >
      {card.dynamic}
    </p>

    {tooltipIndex === index && (
      <Box
        style={{
          background: 'gray',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          position: 'absolute',
          top: '25px', // Adjusted to stay within the container
          left: '0',
          zIndex: 1000,
          whiteSpace: 'wrap',
          width:'300px'
        }}
      >
        {card.description}
      </Box>
    )}
  </div>

  <p
    style={{
      margin: 0,
      fontSize: '12px',
      backgroundColor: '#ffebee',
      padding: '8px',
      borderRadius: '4px',
      color: 'black'
    }}
  >
    <strong>Priority</strong> {card.Priority}
  </p>
</Flex>
                        <Flex direction="column" style={{ flex: '1', alignItems: 'flex-end', gap: '8px' }}>
                          <p style={{ margin: 2, fontSize: '12px' }}>Customer Count : {card.customer} M</p>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box style={{ marginTop: '15px' }}>
                    <Flex direction="column" gap="8px">
                      <Flex direction="row" style={{ justifyContent: 'space-between', marginBottom: '10px' }}>
                        <Flex direction="column" style={{ flex: '1', gap: '4px' }}>
                          <Text size='1'>
                            <strong>Next Best Product:</strong> <br />
                            {card.NextBestProduct}
                          </Text>
                        </Flex>
                        <Flex direction="column" style={{ flex: '1', alignItems: 'flex-end', gap: '4px' }}>
                          <Text size='1' align='right'>
                            <strong>Next Best Channel:</strong> <br />
                            {card.NextBestChannel}
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex direction="row" style={{ justifyContent: 'space-between' }}>
                        <Flex direction="column" style={{ flex: '1', gap: '4px' }}>
                          <Text size='1'>
                            <strong>Second Best Product:</strong> <br />
                            {card.SecondBestProduct}
                          </Text>
                        </Flex>
                        <Flex direction="column" style={{ flex: '1', alignItems: 'flex-end', gap: '4px' }}>
                          <Text size='1' align='right'>
                            <strong>Second Best Channel:</strong> <br />
                            {card.SecondBestChannel}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Box>
                </Box>
                <Button onClick={() => handleCreateCampaign(card)} variant='solid' style={{ border: '2px solid white', padding: '20px', borderRadius: '10px' }}>
                  Create Campaign
                </Button>
              </Box>
            );
          })
        )}
      </Box>
    </Box>
  );
};

export default RecommendationCardComponent;