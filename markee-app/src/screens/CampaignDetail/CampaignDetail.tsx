import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Card, Flex, Heading, Text, Tabs, IconButton } from '@radix-ui/themes';
import calendarSVG from '../../icons/calendar.svg';
import DefaultImageSVG from '../../icons/default-image2.svg';
import wavelengthSVG from '../../icons/wavelength.svg';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import campaignData, { CampData } from '../../components/utilities/campaignData';
import { performanceHighlights } from '../../components/utilities/performanceData';
import ProgressBar from '../../components/utilities/ProgressBar';
import { getStatusStyle } from '../Campaigns';
import { formatCurrency, getRandomElement } from '../../components/utilities/helpers';
import ArrowBack from '../../icons/arrow-left.svg';
import CheckCircle from '../../icons/check-circle.svg';
import EditIcon from '../../icons/edit-blue.svg';
import CampaignDetailOverview from './CampaignDetailOverview';
import CampaignDetailAnalytics from './CampaignDetailAnalytics';
import { ActionButton, ButtonGroup, Content, DialogContainer, DialogTrigger, Dialog, Divider, Button as Button2 } from '@adobe/react-spectrum';
import CampaignEdit from './CampaignEdit';
import BoldText from '../../components/ui/BoldText';
import { A, I } from '@fullcalendar/resource/internal-common';



interface Option {
  value: string | number;
  label: string;
}


const CampaignDetail: React.FC = () => {
  const params = useParams<{ id: string, uid?: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState<CampData | null>(null);
  const [status, setStatus] = useState<string>("");
  const [addInfo, setAddInfo] = useState<any>(null);
  const prevPathRef = useRef<string | null>(null);
  const [relatedCampaigns, setRelatedCampaigns] = useState<CampData[]>([]);
  const [isOpen, setOpen] = React.useState(false);
  const [launchedDialog, setLaunchedDialog] = useState(false);



  const { state } = location;

  const setCampaignData = (camp: CampData) => {
    const status = camp.status || "";
    setCampaign(camp);
    setRelatedCampaigns(campaignData.filter((each: any) => each.id !== camp.id && each.campaignStage === camp.campaignStage));
    setStatus(status);
    if (["Awareness", "Consideration", "Conversion"].includes(camp.campaignStage || ""))
      setAddInfo({ label: "Website Visit", value: 8754 });
    else if (camp.campaignStage === 'Acquisition')
      setAddInfo({ label: getRandomElement(["Registration", "Bookings"]), value: 765 });
    else if (camp.campaignStage === 'Engagement')
      setAddInfo({ label: getRandomElement(["Bookings", "Points Activity"]), value: 454 });
    else if (camp.campaignStage === 'Loyalty')
      setAddInfo({ label: getRandomElement(["Bookings", "Tier Upgrades", "Loyalty Registration"]), value: 987 });

  };
  const fetchCampaignData = () => {
    if (params.id) {
      const campaignId = params.id;
      const foundCampaign = campaignData.filter((campaign: any) => campaign.id == campaignId);
      if (foundCampaign) {
        setCampaignData(foundCampaign[0]);
      } else {
        console.error(`Campaign with ID ${campaignId} not found`);
      }
    } else if (state?.value) {
      const myData = localStorage.getItem('savedCampaign');
      if (myData) {
        try {
          const savedCampaigns: CampData[] = JSON.parse(myData);
          const foundCampaign = savedCampaigns.find(campaign => campaign.id === state.value);
          if (foundCampaign) {
            setCampaignData(foundCampaign);
          } else {
            console.warn(`Campaign with ID ${state.value} not found in saved campaigns`);
          }
        } catch (error) {
          console.error('Error parsing JSON from localStorage:', error);
        }
      } else {
        console.warn('No campaign data found in localStorage');
      }
    }
  };

  useEffect(() => {
    if (state?.from) {
      prevPathRef.current = state.from;
    }
    window.scrollTo(0, 0);

    fetchCampaignData();
  }, [params.id, state?.value]);


  const market = campaign?.totalMarketSpend ||  campaign?.creatives?.reduce((sum, creative) => {
    return  sum + (creative.MarketSpend || 0);
  }, 0);

  const Sales = campaign?.creatives?.reduce((sum, creative) => {
    return sum + (creative.TotalSales || 0);
  }, 0);
  const marketspend = formatCurrency(market);
  const totalsales = formatCurrency(Sales);

  const handleBackClick = () => {
    if (prevPathRef.current) {
      navigate(prevPathRef.current);
    } else {
      navigate('/campaigns');
    }
  };

  const handleCloseDialog = () => {
    setOpen(false);
    fetchCampaignData();

  };

  const handleUpdateCampaign = (formData: any) => {
    console.log('changed camp', formData)
    const savedCampaignsString = localStorage.getItem('savedCampaign');
    const campaigns = savedCampaignsString ? JSON.parse(savedCampaignsString) : [];
    const index = campaigns.findIndex((campaign: any) => campaign.id === formData.id);

    if (index !== -1) {
      campaigns[index] = { ...campaigns[index], ...formData };
      localStorage.setItem('savedCampaign', JSON.stringify(campaigns));
      setCampaign({ ...campaigns[index] });
      setOpen(false);

      console.log('Campaign updated successfully.');
    } else {
      console.error('Campaign with the specified ID not found.');
    }
  };

  const launchCampaign = () => {
    const savedCampaignsString = localStorage.getItem('savedCampaign');
    setLaunchedDialog(true)
    window.location.href = '/campaigns';
    // if (savedCampaignsString) {
    //   const campaigns = JSON.parse(savedCampaignsString);

    //   const index = campaigns.findIndex((campaign: any) => campaign.id == params?.uid);
    //   if (index !== -1) {
    //     campaigns[index].status = 'Live Campaign';

    //     localStorage.setItem('savedCampaign', JSON.stringify(campaigns));

    //     setCampaign({ ...campaigns[index] });
    //     fetchCampaignData();
    //     setLaunchedDialog(true)
    //     setTimeout(() => {
    //       setLaunchedDialog(false)
    //     }, 2000);

    //     console.log('Campaign status updated to Live Campaign');
    //   } else {
    //     console.error('Campaign with the specified ID not found.');
    //   }
    // } else {
   
    // }
  };



  const shouldHideAnalyticsTab = campaign?.status === 'In Development' || campaign?.status === 'Pending Launch' ||campaign?.status === 'Testing & Approval' ;


  return (
    <Box>
      <Card className='card-content'>
        <Flex gap="3" align="start" >
          <Flex width="12%" direction="column" gap="2">
            <IconButton onClick={handleBackClick} variant="outline" style={{ border: 0, boxShadow: 'none', margin: "-3px 0 0 -5px" }}>
              <img src={ArrowBack} width='22' height='22' alt="Back" />
            </IconButton>
            <div className='theme-bg'>
              <img className={"aspect-square bg-[#f5f8fa] object-contain"} src={campaign?.creatives?.[0]?.CreativeGraphic || DefaultImageSVG} alt="Campaign" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
          </Flex>
          <Box width="53%">
            <Heading as="h4" mt='30px' style={{fontSize:'18px'}}>
              {campaign?.campaignName}
              <Button variant='soft' ml={"2"} style={getStatusStyle(status)}>
                {status}
              </Button>

              {(campaign?.status == 'In Development') && (
                <>
                  <ActionButton onPress={() => setOpen(true)} width='70px' marginStart='10px' UNSAFE_style={{ borderColor: '#275ec2', color: '#275ec2' }}>
                    <img src={EditIcon} width='22' height='22' alt="Edit" />
                    <Text ml='5px'>  Edit </Text>
                  </ActionButton>

                  <DialogContainer
                    type="fullscreen"
                    onDismiss={handleCloseDialog}
                  >
                    {isOpen && (
                      <CampaignEdit campaign={campaign} onClose={handleCloseDialog} updateCampaign={handleUpdateCampaign} />
                    )}
                  </DialogContainer>
                </>
              )}
              {launchedDialog && (

                <DialogContainer onDismiss={() => (alert('closed'))}>

                  <Dialog size={'S'}>
                    <Content UNSAFE_style={{ textAlign: 'center' }}>

                      <div style={{ marginBottom: '20px' }}>
                        <Text weight={'bold'} style={{ fontSize: '20px' }} align={'center'}>Campaign has been launched successfully!</Text>

                      </div>
                      <Button2 autoFocus variant="accent" onPress={() => { setLaunchedDialog(false) }}>
                        Close
                      </Button2>
                    </Content>



                  </Dialog>

                </DialogContainer>

              )}
            </Heading>
            <Flex gap='3' mt='10px' mb='10px'>


              {campaign?.plannedStartDate && campaign?.plannedEndDate && (
                <Text as="div" size="2" color="gray">
                  <Flex gap='3'>
                    <img
                      src={calendarSVG}
                      width='16'
                      height='16'
                      alt="Calendar"
                    className='invert'
                    />
                    {campaign.plannedStartDate} to {campaign.plannedEndDate}
                  </Flex>
                </Text>
              )}

              <Text as="div" size="2" color="gray">
                <Flex gap='3'>
                  <img src={wavelengthSVG} width='16' color='black' height='16' alt="Wavelength" />Campaign Stage: {campaign?.campaignStage}
                </Flex>
              </Text>
            </Flex>
            <Flex gap='3' mt='20px'>
              <Box className='dotted-box'>
                <Text size="3" weight='bold'>{marketspend}</Text><br />
                <Text as="div" size="2" color="gray">Market Spent</Text>
              </Box>
              <Box className='dotted-box'>
                <Text size="3" weight='bold'>{totalsales}</Text><br />
                <Text as="div" size="2" color="gray">Total Sales</Text>
              </Box>
              <Box className='dotted-box'>
                <Text size="3" weight='bold'>Objective KPI</Text><br />
                <Text as="div" size="2" color="gray">{campaign?.kpi || 'Booking'}</Text>
              </Box>
              {/* {addInfo && (
                <Box className='dotted-box'>
                  <Text size="5" weight='bold'>
                    {!state?.value ? addInfo.value : 0}
                  </Text>

                  <br />
                  <Text as="div" size="2" color="gray">{addInfo.label}</Text>
                </Box>
              )} */}
            </Flex>

          </Box>
          <Flex style={{ width: "max-content" }}>
            <Flex direction='column' style={{marginTop:'30px'}}>
              {status == 'Pending Launch' && (
                <Box style={{ alignItems: 'center' }} mb='30px'>

                  <DialogTrigger>
                    <ActionButton isQuiet width={'100%'}> <Button size='2' style={{ width: '100%', marginBottom: '10px' }} >Launch Now</Button>
                    </ActionButton>
                    {(close2) => (
                      <Dialog>

                        <Content>
                          <Text align='center'>
                            The campaign is being set to live. Are you sure you want to proceed?
                          </Text>
                        </Content>
                        <ButtonGroup>
                          <Button2 variant="primary" onPress={close2}>Cancel</Button2>
                          <Button2 variant="accent" onPress={launchCampaign}>Confirm</Button2>
                        </ButtonGroup>
                      </Dialog>
                    )}
                  </DialogTrigger>

                  <Box><Text size='2' weight={'bold'}> * Campaign Auto Launch on {campaign?.plannedStartDate}</Text></Box>
                </Box>
              )}
              <Box width={'100%'}> <ProgressBar status={status} /> </Box>
            </Flex>
          </Flex>
          {performanceHighlights && performanceHighlights.find(e => e.campaignid === campaign?.id)?.['performance highlight'] && (
            <>
              <Divider orientation='vertical' marginStart={"5px"} width={1} UNSAFE_className='dividerline' />
              <Flex maxWidth="30%" direction={"column"}>
                <BoldText>PERFORMANCE HIGHLIGHTS</BoldText>
                <p style={{ textAlign: "justify", textOverflow: "ellipsis" }}>
                  {
                    performanceHighlights.find(e => e.campaignid === campaign?.id)?.['performance highlight']
                  }
                </p>
              </Flex>
            </>
          )}
        </Flex>
      </Card>
      <Card className='card-content' mt='20px'>
        <Tabs.Root defaultValue="overview">
          <Tabs.List>
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            {!shouldHideAnalyticsTab && (
              <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
            )}
          </Tabs.List>
          <Tabs.Content value='overview'>
            <CampaignDetailOverview
              campaign={campaign}
              relatedCampaigns={relatedCampaigns}
            />
          </Tabs.Content>
          <Tabs.Content value='analytics'>
            <CampaignDetailAnalytics campaign={campaign} />
          </Tabs.Content>
        </Tabs.Root>
      </Card>
    </Box>
  );
};

export default CampaignDetail;
