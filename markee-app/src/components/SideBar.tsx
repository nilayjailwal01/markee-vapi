import { Box, Button, Flex, Section, Strong } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';
import HomeSVG from '../icons/house.svg';
import CampaignSVG from '../icons/campaign.svg';
import PlusSVG from '../icons/plus.svg';
import CalendarSVG from '../icons/calendar-outline.svg';
import EmailSVG from '../icons/email.svg';
import YoutubeSVG from '../icons/youtube.svg';
import FacebookSVG from '../icons/facebook.svg';
import SnapchatSVG from '../icons/snapchat.svg';
import BelloutlineSVG from '../icons/bell-outline.svg';
import ChartSVG from '../icons/chart.svg';
import AddSVG from '../icons/add-circle.svg';
import Accordion from './ui/Accordion';
import { useLocation, Link } from 'react-router-dom';
import { invert } from 'lodash-es';
import { View } from '@adobe/react-spectrum';

const SideBar: React.FC = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
    useEffect(() => {
        const path = location.pathname;
        if (path.startsWith('/facebook') || path.startsWith('/youtube') || path.startsWith('/snapchat')) {
            setOpenAccordion('social');
        } else if (path.startsWith('/email') || path.startsWith('/app-notifications')) {
            setOpenAccordion('crm');
        } else if (path.startsWith('/create-creative') || path.startsWith('/AI_Analytics')) {
            setOpenAccordion('ai');
        } else {
            setOpenAccordion(null);
        }
    }, [location.pathname]);
    const toggleAccordion = (key: string) => {
        setOpenAccordion(openAccordion === key ? null : key);
    };
    return (
        <Box p="2" mt='10px'>
            <Section py="3" px="1" className={'menu-section ' + `${isActive('/home') || window.location.pathname === '/' ? 'page-active' : ''}`}>
                <Link to="/home" style={{ color: "#fff", textDecoration: 'none' }} className="nav-link">
                    <Flex gap='2' px=".75rem" align="center">
                        <img src={HomeSVG} width='20' height='20' alt="Home" style={{filter:'invert(1)'}} /> <Strong>Home</Strong>
                    </Flex>
                </Link>
            </Section>
            <Section py="3" px="1" className={'menu-section ' + `${isActive('/campaigns') ? 'page-active' : ''}`}>
                <Link to="/campaigns" style={{ color: "#fff", textDecoration: 'none' }} className="nav-link">
                    <Flex gap='2' px=".75rem" align="center">
                        <img src={CampaignSVG} width='20' height='20' alt="Campaigns" /> <Strong>Campaigns</Strong>
                    </Flex>
                </Link>
            </Section>
            <Section py="3" px="1" className={'menu-section ' + `${isActive('/create-campaign') ? 'page-active' : ''}`}>
                <Link to="/create-campaign" style={{ color: "#fff", textDecoration: 'none' }} className="nav-link">
                    <Flex gap='2' px=".75rem" align="center">
                        <img src={PlusSVG} width='20' height='20' alt="Campaigns" style={{ filter: 'invert(1)' }} /> <Strong style={{ textWrap: 'nowrap' }}>Create Campaign</Strong>
                    </Flex>
                </Link>
            </Section>
            <Section py="3" px="1" className={'menu-section ' + `${isActive('/calendar') ? 'page-active' : ''}`}>
                <Link to="/calendar" style={{ color: "#fff", textDecoration: 'none' }} className="nav-link">
                    <Flex gap='2' px=".75rem" align="center">
                        <img src={CalendarSVG} width='20' height='20' alt="Calendar" style={{filter:'invert(1)'}} /> <Strong>Calendar</Strong>
                    </Flex>
                </Link>
            </Section>
            <span className="seperator"></span>
            <Box>
                <Accordion
                    title="Social"
                    isOpen={openAccordion === 'social'}
                    onToggle={() => toggleAccordion('social')}
                    placement='sidebar'
                >
                    <Box>
                        <Section py="3" px="1" className={'menu-section ' + `${window.location.pathname === '/facebook' ? 'page-active' : ''}`}>
                            <Link to="/facebook" style={{ color: "#fff", textDecoration: 'none' }} className="nav-link">
                                <Flex gap='2' px=".75rem" align="center">
                                    <img src={FacebookSVG} width='20' height='20' alt="Facebook" /> <Strong>Facebook</Strong>
                                </Flex>
                            </Link>
                        </Section>
                        <Section py="3" px="1" className={'menu-section ' + `${window.location.pathname === '/youtube' ? 'page-active' : ''}`}>
                            <Link to="/youtube" style={{ color: "#fff", textDecoration: 'none' }} className="nav-link">
                                <Flex gap='2' px=".75rem" align="center">
                                    <img src={YoutubeSVG} width='20' height='20' alt="YouTube" /> <Strong>YouTube</Strong>
                                </Flex>
                            </Link>
                        </Section>
                        <Section py="3" px="1" className={'menu-section ' + `${window.location.pathname === '/snapchat' ? 'page-active' : ''}`}>
                            <Link to="/snapchat" style={{ color: "#fff", textDecoration: 'none' }} className="nav-link">
                                <Flex gap='2' px=".75rem" align="center">
                                    <img src={SnapchatSVG} width='20' height='20' alt="Snapchat" style={{ filter: 'invert(1)' }} /> <Strong>Snapchat</Strong>
                                </Flex>
                            </Link>
                        </Section>
                    </Box>
                </Accordion>
                <View UNSAFE_className='capside'>
                <Accordion
                    title="CRM"
                    isOpen={openAccordion === 'crm'}
                    onToggle={() => toggleAccordion('crm')}
                    placement='sidebar'
                >
                    <Section py="3" px="1" className={'menu-section ' + `${isActive('/email') ? 'page-active' : ''}`}>
                        <Link to="/email" style={{ color: "#fff", textDecoration: 'none' }} className="nav-link">
                            <Flex gap='2' px=".75rem" align="center">
                                <img src={EmailSVG} width='20' height='20' alt="Email" /> <Strong>Email</Strong>
                            </Flex>
                        </Link>
                    </Section>
                    <Section py="3" px="1" className={'menu-section ' + `${isActive('/app-notifications') ? 'page-active' : ''}`}>
                        <Link to="/app-notifications" style={{ color: "#fff", textDecoration: 'none' }} className="nav-link">
                            <Flex gap='2' px=".75rem" align="center">
                                <img src={BelloutlineSVG} width='20' height='20' alt="App Notifications" /> <Strong>App Notifications</Strong>
                            </Flex>
                        </Link>
                    </Section>
                </Accordion>
                </View>
                <View UNSAFE_className='capside'>
                <Accordion
                    title="AI"
                    isOpen={openAccordion === 'ai'}
                    onToggle={() => toggleAccordion('ai')}
                    placement='sidebar'
                >
                    <Section py="3" px="1" className={'menu-section ' + `${isActive('/create-creative') ? 'page-active' : ''}`}>
                        <Link to="/create-creative" style={{ color: "#fff", textDecoration: 'none' }} className="nav-link">
                            <Flex gap='2' px=".75rem" align="center">
                                <img src={AddSVG} width='20' height='20' alt="Create Creative" style={{ filter: 'invert(1)' }} /> <Strong>Create Creative</Strong>
                            </Flex>
                        </Link>
                    </Section>
                    <Section py="3" px="1" className={'menu-section ' + `${isActive('/AI_Analytics') ? 'page-active' : ''}`}>
                        <Link to="/AI_Analytics" style={{ color: "#fff", textDecoration: 'none' }} className="nav-link">
                            <Flex gap='2' px=".75rem" align="center">
                                <img src={ChartSVG} width='20' height='20' alt="AI_Analytics" style={{ filter: 'invert(1)' }} /> <Strong>Analytics</Strong>
                            </Flex>
                        </Link>
                    </Section>
                </Accordion>
                </View>
            </Box>
        </Box>
    );
};
export default SideBar;
