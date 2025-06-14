import React from 'react';
import { Box, Card, Heading } from '@radix-ui/themes';


const insightsData = [
  { title: "Insight 1", content: ["Facebook spend during seasonal period increased Christmas sales by 2X"] },
  { title: "Insight 2", content: ["Incremental sales increased by 13% in this quarter"] },
  { title: "Insight 3", content: ["Average Cost per Click on Youtube decreased by 23% in the last quarter"] },
  { title: "Insight 4", content: ["Youtube has the Optimal Spend to Sales in this quarter"] },
];

const InsightsComponent: React.FC = () => {
  return (
    <Card
      style={{
        padding: '20px',
        width: '100%',
        overflowY: 'auto', // Scrollable content
        backgroundColor: '#E0F7FA', // Light blue color
        borderRadius: '8px', // Rounded corners
        marginBottom:'20px'
      }}
    >
      <Heading as="h4" style={{
        marginBottom: '15px',
        color: '#003366', // Dark blue color for heading
        fontSize: '16px', // Adjust font size
        fontWeight: '600', // Semi-bold
      }}>
        Insights
      </Heading>
      <ul style={{
        paddingLeft: '0px', // Indent the list
        color: '#004D40', // Darker text color for better readability
        fontSize: '12px', // Adjust font size
        margin: 0, // Remove default margin
      }}>
        {insightsData.flatMap(item => item.content.map((point, idx) => (
          <li key={idx} style={{ marginBottom: '5px' }}>
            {point}
          </li>
        )))}
      </ul>
    </Card>
  );
};

export default InsightsComponent;
