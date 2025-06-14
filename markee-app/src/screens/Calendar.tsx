import React from 'react';
import { Flex, Heading, Card } from '@radix-ui/themes';

import PropertiesSVG from '../icons/properties-fill.svg';
import CalendarTimeLine from '../components/CalendarTimeLine';
import { IconButton } from '@radix-ui/themes';

interface Props {
  name: string;
}

const Calendar: React.FC = () => {
  return (
    <Flex direction="column" gap="4">
      <Flex gap="2" align="center" width="100%">
        <IconButton className='IconButton' variant="outline" style={{ border: 0, boxShadow: 'none' }}>
          <img src={PropertiesSVG} width='22' height='22' alt="Properties" />
        </IconButton>
        <Heading as="h3" className='pagehead'>Marketing Calendar</Heading>
      </Flex>
      <Flex gap="2" wrap="wrap" direction="column">
        <Card variant="surface" className='card-content w-100'>
          <CalendarTimeLine />
        </Card>
      </Flex>
    </Flex>
  );
};

export default Calendar;
