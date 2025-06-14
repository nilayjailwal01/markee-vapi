import React from 'react';
import { Avatar, Box, Flex, Heading, Text, Button } from '@radix-ui/themes';
import { ActionButton, Content, Dialog, DialogTrigger } from '@adobe/react-spectrum';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/lv_logo_white.png";
import UserSVG from '../icons/user.svg';
import CampaignSVG from '../icons/campaign.svg';
import logoutIcon from '../icons/logout.svg';

import BellOutlineSVG from '../icons/bell-outline.svg';
import ThemeSVG from '../icons/theme.svg';
import ImageSVG from '../assets/signin-image.svg';

const NotificationItem: React.FC<{ title: string; linkTo: string }> = ({ title, linkTo }) => (
    <Link to={linkTo} style={{ textDecoration: 'none' }}>
        <ActionButton UNSAFE_style={{
            width: '100%',
            justifyContent: 'left',
            border: 'none',
            padding: '30px 10px',
            borderBottom: '1px solid #eee'
        }}>
            <img src={BellOutlineSVG} alt="Notification" style={{
                filter: 'invert(1)',
                height: '20px',
                margin: '20px 20px 20px 0px'
            }} />
            <Text style={{ textAlign: 'left' }}>{title}</Text>
        </ActionButton>
    </Link>
);

// Make logout and profile optional
interface HeaderProps {
  toggleTheme: () => void;
  logout?: () => void;
  profile?: any;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, logout, profile }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        if (logout) {
            logout();
        }
        navigate('/login');
    };
    return (
        <Box height="4em">
            <Flex px="4" justify="between" align="center" height="4em">
                <Box width="auto" />

                <Flex gap="3" align="start" justify="start" style={{ flexGrow: 1 }} mt='5px'>
                    <img width="55px"  className="appLogo" alt="logo" src={logo} />
                    <Heading as="h1" style={{ color: '#FFF', fontSize:'28px', marginTop:'6px', marginLeft:'-10px' }}>MARKEE</Heading>
                </Flex>

                <Box>
                    <Flex gap="3" align="center">
                        <DialogTrigger type="popover">
                            <ActionButton isQuiet UNSAFE_style={{ height: '40px', width: '40px', borderRadius: '50%', overflow: 'hidden', background: 'rgb(230 218 220 / 25%)' }}>
                                <img src={BellOutlineSVG} width="20" height="20" alt="Notifications" />
                            </ActionButton>
                            {(close) => (
                                <Dialog>
                                    <Content>
                                        <NotificationItem title="Social Media Contests: Win a Dream Getaway budget approved" linkTo="/" />
                                        <NotificationItem title="Flash Sale: 48 Hours to Save : Analysis Completed" linkTo="/" />
                                    </Content>
                                </Dialog>
                            )}
                        </DialogTrigger>

                        <DialogTrigger type="popover">
                            <ActionButton isQuiet UNSAFE_style={{ height: '40px', width: '40px', borderRadius: '50%', overflow: 'hidden', background: 'rgb(230 218 220 / 25%)' }}>
                                <Avatar
                                    size="3"
                                    src={ImageSVG}
                                    radius="full"
                                    fallback="T"
                                />
                            </ActionButton>
                            {(close) => (
                                <Dialog>
                                    <Content >
                                        <Flex align="center" gap="2" mb="30px" mt="5px" width="100%">
                                            <Box style={{ borderRadius: '5px', backgroundColor: '#e5e7eb' }}>
                                                <img src={UserSVG} alt="User" style={{ width: "70px", height: "70px" }} />
                                            </Box>
                                            <Box p="0px 30px">
                                                <Heading size="3" weight={'bold'}>{profile?.name || 'Maya'}</Heading>
                                                <Text style={{ color: '#9ca3af' }}>Campaign Manager</Text>
                                            </Box>
                                        </Flex>
                                        {logout && (
                                            <ActionButton UNSAFE_style={{
                                                width: '100%',
                                                justifyContent: 'left',
                                                border: 'none'
                                            }} onPress={handleLogout}>
                                                <img src={logoutIcon}  style={{
                                                    height: '20px',
                                                    margin: '6px 10px 0px 5px'
                                                }} />
                                                Logout
                                            </ActionButton>
                                        )}
                                    </Content>
                                </Dialog>
                            )}
                        </DialogTrigger>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default Header;
