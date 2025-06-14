import { Box, Button, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { useEffect, useMemo, useState } from 'react';
import { BookmarkIcon } from '@radix-ui/react-icons';
import Accordion from '../../components/ui/Accordion';
import DefaultImageSVG from '../../icons/default-image2.svg';
import { Link, useLocation, useParams } from 'react-router-dom';
import campaignData, { CampData } from '../../components/utilities/campaignData';
import CampaignCreatives from './CampaignCreative';
interface PieData {
    name: string;
    value: number;
}
interface CampaignDetailOverviewProps {
    campaign: CampData | null;
    relatedCampaigns: CampData[];
}
const CampaignDetailOverview: React.FC<CampaignDetailOverviewProps> = ({ campaign, relatedCampaigns }) => {
    //piechart 
    const { data } = useMemo(() => {
        const data: PieData[] = [
            { name: 'Group A', value: 400 },
            { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 },
            { name: 'Group D', value: 200 }
        ];
        return { data };
    }, []);

    //accordion
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);
    const toggleAccordion = (index: number) => {
        if (openAccordionIndex === index) {
            setOpenAccordionIndex(null);
        } else {
            setOpenAccordionIndex(index);
        }
    };

    const campaignCreatives = campaign?.creatives || []
    const formattedCampaignName = (name:any) => {
        return name.replace(/\s+/g, '-').toLowerCase();
    };
    
    return (
        <Grid style={{ gridTemplateColumns: "repeat(12,minmax(0,1fr))", marginBottom: "1.5rem", gap: "1.5rem", width: "100%", padding: '30px 0px' }}>
            <Box style={{ gridColumn: "span 4/ span 4" }}>
                <Box m='0px' className='bluebox' style={{  borderRadius: '10px', minHeight: '500px' }}>
                    <Box style={{ textAlign: 'center' }}>
                        <Flex direction="column" align="start" >
                            <Box p="20px">

                                <Box>
                                    <Accordion
                                        title="Products"
                                        isOpen={true}
                                        onToggle={() => toggleAccordion(0)}
                                        showIcon={false}
                                    >
                                        <Box style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                                            {Array.isArray(campaign?.products) && campaign?.products.map((product, index) => (
                                                <Button key={index} variant='outline' color="gray">
                                                    <BookmarkIcon /> {product}
                                                </Button>
                                            ))}
                                        </Box>
                                    </Accordion>
                                    <Accordion
                                        title="Languages"
                                        isOpen={true}
                                        onToggle={() => toggleAccordion(1)}
                                        showIcon={false}
                                    >
                                        <Box style={{ display: "flex", gap: ".5rem" }}>
                                            {Array.isArray(campaign?.language) &&  campaign?.language.map((lang, index) => (
                                                <Button key={index} variant='outline' color="gray">
                                                    {lang}
                                                </Button>
                                            ))}
                                        </Box>
                                    </Accordion>
                                    <Accordion
                                        title="Geography"
                                        isOpen={true}
                                        onToggle={() => toggleAccordion(3)}
                                        showIcon={false}
                                    >
                                        <Box style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                                            {Array.isArray(campaign?.location) && campaign?.location.map((loc, index) => (
                                                <Button key={index} variant='outline' color="gray">
                                                    {loc}
                                                </Button>
                                            ))}
                                        </Box>
                                    </Accordion>
                                    <Accordion
                                        title="Channel"
                                        isOpen={true}
                                        onToggle={() => toggleAccordion(2)}
                                        showIcon={false}
                                    >
                                        <Box style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                                            {Array.isArray(campaign?.channel) && campaign?.channel.map((chan, index) => (
                                                <Button key={index} variant='outline' color="gray">
                                                    {chan}
                                                </Button>
                                            ))}

                                        </Box>
                                    </Accordion>
                                </Box>

                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>
            <Box style={{ gridColumn: "span 8 / span 8" }} p="0px 30px" >
                <Box mb='30px' >
                    <Heading mb="3" size="3">  Description   </Heading>
                    <Text>{campaign?.description}  </Text>
                </Box>
                <Box>
                    <Heading mb="3" size="3">  Creatives   </Heading>


                    <CampaignCreatives creatives={campaignCreatives} />


                </Box>
                <Box mb='50px' >
                    <Heading mb="3" size="3">  Related Campaigns   </Heading>
                    <Grid style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} gap="3">
                        {relatedCampaigns.slice(0, 4).map((campaign, index) => (
                            <Flex key={index} direction='row' align='start' gap='2' mb='5px' mt='5px' style={{ padding: '8px' }} className='relatedblock'>
                                <Box style={{ width: '80px', height: '56px', overflow: 'hidden', borderRadius: '5px', backgroundColor: '#f5f8fa', marginTop: '5px' }}>
                                    <img src={campaign.creatives?.[0].CreativeGraphic} alt="Campaign" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                                <Box style={{ width: '100%' }}>
                                    <Heading size="2" style={{ margin: '0' }}>
                                        <Link to={`/campaign/${campaign.id}/${formattedCampaignName(campaign.campaignName)}`}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.textDecoration = 'underline';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.textDecoration = 'none';
                                            }}
                                        >
                                            {campaign.campaignName}
                                        </Link>
                                    </Heading>
                                    <Text
                                        style={{
                                            overflow: 'hidden',
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            textOverflow: 'ellipsis',
                                            marginTop: '4px'
                                        }}
                                    >
                                        {campaign.description}
                                    </Text>
                                </Box>
                            </Flex>
                        ))}
                    </Grid>


                </Box>
            </Box>
        </Grid>
    );
};
export default CampaignDetailOverview;

