import React from 'react';
import { ActionButton, Button, Flex, } from '@adobe/react-spectrum';
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from "../../assets/twitter.png";
import USSVG from "../../icons/us.svg";
import graphSVG from "../../icons/graph-bar.svg";
import bookmarkSVG from "../../icons/bookmark.svg";
import {  Text, } from '@radix-ui/themes';

interface Props {
    index: number;
    openTray: () => void;
    imageUrl: string; // New prop for unique image URL
    campaignName: string;
    description:string;
    status:string
}

const NewsCard: React.FC<Props> = ({ index, openTray, imageUrl,campaignName,description,status }) => (
    <div className="flex w-100 f-column" style={{ marginBottom: "2rem" }}>
        <Flex flexShrink={0} maxWidth="100%" UNSAFE_className='f-col w-100'>
            <div style={{ position: "relative", background:'white', borderRadius:'10PX',padding:'10PX',textAlign:'left' }}>
                <Flex UNSAFE_className='f-col'>
                    <Flex UNSAFE_className='f-col gap-1' UNSAFE_style={{ padding: "20px 20px 0px" }}>
                        {/* <strong style={{ color: "gray", fontSize: "12px", letterSpacing: "1px" }}>
                            {`Product - ${index}`}
                        </strong> */}
                        <p style={{ fontSize: "16px", fontWeight:'500' }}>
                           {campaignName}
                        </p>
                        <p style={{ fontSize: "14px"}}>
                            {description}
                        </p>
                        <Button variant="accent" width={'100px'}  onPress={openTray}>
                                Expand
                            </Button>
                        {/* Use the unique image URL from props */}
                        <img src={imageUrl} alt='img' />
                    </Flex>
                    {/* <Flex UNSAFE_style={{ backgroundColor: "#F4F4F4", padding: "20px" }} UNSAFE_className='f-col gap-1-5'>
                        <img src={logo} alt='logo' style={{ maxWidth: "25px" }} />
                        <div className="flex f-row gap-1">
                            <img src={facebook} alt="facebook" style={{ maxWidth: "7px" }} />
                            <img src={instagram} alt="instagram" style={{ maxWidth: "10px" }} />
                            <img src={twitter} alt="twitter" style={{ maxWidth: "9px" }} />
                        </div>
                        
                    </Flex> */}
                </Flex>
                <Flex UNSAFE_style={{ gap: '1rem', paddingTop: ".5rem", flexDirection: "column" }}>
              
              <Flex justifyContent="space-between" UNSAFE_className='f-row items-center'>
                  <div style={{ gap: ".5rem" }} className='flex items-center'>
                      <img src={logo} alt="logo" style={{ width: "20px", aspectRatio: 1, borderRadius: "15%" }} />
                      {/* <img src={USSVG} alt='us' style={{ width: "20px", aspectRatio: 1, borderRadius: "15%" }} /> */}
                      <div className='emailStatusBadge'>{status}</div>
                  </div>
                  <div className='cardIcons'>
                      <ActionButton isQuiet onPress={openTray}>
                          <img src={graphSVG} alt='graph' className='img-16' />
                      </ActionButton>
                      <ActionButton isQuiet>
                          <img src={bookmarkSVG} alt='bookmark' className='img-16' />
                      </ActionButton>
                  </div>
              </Flex>
          </Flex>
            </div>
        
        </Flex>
    </div>
);

export default NewsCard;
