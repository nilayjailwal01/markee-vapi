import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Home from './screens/Home';
import Campaigns from './screens/Campaigns';
import CampaignDetail from './screens/CampaignDetail/CampaignDetail';
import CampaignCreate from './screens/CampaignCreate';
import Calendar from './screens/Calendar';
import Email from './screens/Email';
import Facebook from './screens/Facebook';
import Youtube from './screens/Youtube';
import SnapChat from './screens/SnapChat';
import AppNotification from './screens/AppNotification';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { Box, Flex, Section } from '@radix-ui/themes';
import CreativeCreate from './screens/CreativeCreate';
import AI_Analytics from './screens/AI_Analytics';
import ChatBox from './screens/ChatBox';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import VapiButton from './components/VapiButton/VapiButton';
import { VapiProvider } from './context/VapiContext';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Provider theme={defaultTheme} height="100%">
      <VapiProvider>
        <div className={`App ${theme}`} style={{ height: '100dvh' }}>
          <Box width="100%">
            <Header toggleTheme={toggleTheme} />
          </Box>
          <Flex style={{ height: '93dvh' }}>
            <Box width="14em" style={{ overflow: 'auto' }} className='sidebar'>
              <SideBar />
            </Box>
            <Box className='bodyy' style={{ overflowY: 'scroll', borderTopLeftRadius: '15px' }}>
              <Section size="1" px="5">
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/campaigns" element={<Campaigns />} />
                  <Route path="/create-campaign" element={<CampaignCreate />} />
                  <Route path="/campaign/:id/:title" element={<CampaignDetail />} />
                  <Route path="/campaign/:uid" element={<CampaignDetail />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/email" element={<Email />} />
                  <Route path="/facebook" element={<Facebook />} />
                  <Route path="/youtube" element={<Youtube />} />
                  <Route path="/snapchat" element={<SnapChat />} />
                  <Route path="/app-notifications" element={<AppNotification />} />
                  <Route path="/create-creative" element={<CreativeCreate />} />
                  <Route path="/AI_Analytics" element={<AI_Analytics />} />
                  <Route path="*" element={<Navigate to="/home" />} /> {/* Redirect to home for all other paths */}
                </Routes>
              </Section>
            </Box>
            <ChatBox />
            <VapiButton />
          </Flex>
        </div>
      </VapiProvider>
    </Provider>
  );
}

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWithRouter;
