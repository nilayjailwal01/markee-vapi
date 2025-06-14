import React from 'react';
import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import {CreativeData}  from '../../components/utilities/campaignData';
import DefaultImageSVG from '../../icons/default-image2.svg';


interface CampaignCreativesProps {
    creatives: CreativeData[];
  }

const CampaignCreatives: React.FC<CampaignCreativesProps> = ({ creatives }) => {

    const groupByChannel = (creatives: CreativeData[]) => {
        return creatives.reduce((acc: Record<string, CreativeData[]>, creative) => {
          (acc[creative.channel] = acc[creative.channel] || []).push(creative);
          return acc;
        }, {});
      };
    
  
    const groupedCreatives = groupByChannel(creatives);
  
    return (
      <Grid columns="2" gap="2" width="auto" mb='30px'>
        {Object.entries(groupedCreatives).map(([channel, items]) => (
          <Box key={channel} mb='20px'>
            <Heading mb="3" size="2">
              <Link to='#'>{`${channel} (${items.length})`}</Link>
            </Heading>
            <Flex>
              {items.map((creative) => (
                <Box key={creative.uid} style={{ marginLeft: '-5px' }}>
                  <img 
                    src={creative.CreativeGraphic || DefaultImageSVG } 
                    alt="Creative" 
                    style={{
                      objectFit: 'cover', 
                      background: '#f5f8fa', 
                      borderRadius: '10px',
                      border: '2px solid white', 
                      width: '56px', 
                      height: '56px', 
                      padding: '0px',
                      transition: 'transform 0.3s' 
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </Box>
              ))}
            </Flex>
          </Box>
        ))}
      </Grid>
    );
  };

  export default CampaignCreatives