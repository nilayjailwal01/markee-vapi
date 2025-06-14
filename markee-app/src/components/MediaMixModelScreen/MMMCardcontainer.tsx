import React from 'react';
import { Box, Card, Flex } from '@radix-ui/themes';

// Types of Props
interface MMMCardData {
  title: string;
  content: string;
  change: string; 
}

interface CardContainerProps {
  cards: MMMCardData[];
}

// Inline SVG for icons
const GreenTriangle = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="green">
    <polygon points="0,10 10,10 5,0" />
  </svg>
);

const RedTriangle = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="red">
    <polygon points="0,0 10,0 5,10" />
  </svg>
);

const MMMCardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <Box style={{ display: 'flex',  marginTop: '20px' }}>
      <Flex
        style={{
          display: 'flex',
          gap: '16px',
          flexDirection: 'row',
          flexWrap: 'wrap' // Ensures cards wrap on smaller screens
        }}
      >
        {cards.map((card, index) => {
          const isPositive = card.change.startsWith('+');
          const Icon = isPositive ? GreenTriangle : RedTriangle;
          return (
            <Card
              key={index}
              style={{
                width: '160px',
                height: '150px',
                padding: '0',
                borderRadius: '8px',
                background: '#fff',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              <Box
                style={{
                  padding: '8px',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  fontWeight: 'bold'
                }}
              >
                <h3 style={{ margin: 0, fontSize: '14px' }}>
                  {card.title}
                </h3>
              </Box>
              <Box
                style={{
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center' // Center content horizontally
                }}
              >
                <p style={{ fontSize: '16px', fontWeight: 'bold', color: 'black', margin: 0 }}>
                  {card.content}
                </p>
                <Box style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Icon />
                  <span style={{ fontSize: '12px', color: isPositive ? 'green' : 'red' }}>
                   ( {card.change})
                  </span>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Flex>
    </Box>
  );
};

export default MMMCardContainer;
