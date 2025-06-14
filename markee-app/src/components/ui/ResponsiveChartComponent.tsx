import React, { useEffect, useState } from 'react';
import { Box } from '@radix-ui/themes';
import { LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import {  Text } from '@radix-ui/themes';

// Define the shape of the response curve data
interface ResponseCurveData {
  [channel: string]: { spend: number; sales: number }[];
}

// Example dataset
const responseCurveData: ResponseCurveData = {
  "YouTube": [
    { "spend": 10000, "sales": 50000 },
    { "spend": 20000, "sales": 120000 },
    { "spend": 30000, "sales": 180000 },
    { "spend": 40000, "sales": 220000 },
    { "spend": 50000, "sales": 250000 },
    { "spend": 60000, "sales": 270000 },
    { "spend": 70000, "sales": 280000 },
    { "spend": 80000, "sales": 290000 },
    { "spend": 90000, "sales": 295000 },
    { "spend": 100000, "sales": 300000 }
  ],
  "Email": [
    { "spend": 5000, "sales": 30000 },
    { "spend": 10000, "sales": 60000 },
    { "spend": 15000, "sales": 90000 },
    { "spend": 20000, "sales": 120000 },
    { "spend": 25000, "sales": 140000 },
    { "spend": 30000, "sales": 150000 },
    { "spend": 35000, "sales": 155000 },
    { "spend": 40000, "sales": 157000 },
    { "spend": 45000, "sales": 158000 },
    { "spend": 50000, "sales": 159000 }
  ],
  "Snapchat": [
    { "spend": 8000, "sales": 40000 },
    { "spend": 16000, "sales": 90000 },
    { "spend": 24000, "sales": 140000 },
    { "spend": 32000, "sales": 190000 },
    { "spend": 40000, "sales": 220000 },
    { "spend": 48000, "sales": 240000 },
    { "spend": 56000, "sales": 250000 },
    { "spend": 64000, "sales": 255000 },
    { "spend": 72000, "sales": 258000 },
    { "spend": 80000, "sales": 260000 }
  ],
  "Facebook": [
    { "spend": 5000, "sales": 30000 },
    { "spend": 10000, "sales": 60000 },
    { "spend": 15000, "sales": 90000 },
    { "spend": 20000, "sales": 120000 },
    { "spend": 25000, "sales": 140000 },
    { "spend": 30000, "sales": 150000 },
    { "spend": 35000, "sales": 155000 },
    { "spend": 40000, "sales": 157000 },
    { "spend": 45000, "sales": 158000 },
    { "spend": 50000, "sales": 159000 }
  ],
  "App Notification": [
    { "spend": 10000, "sales": 50000 },
    { "spend": 20000, "sales": 120000 },
    { "spend": 30000, "sales": 180000 },
    { "spend": 40000, "sales": 220000 },
    { "spend": 50000, "sales": 250000 },
    { "spend": 60000, "sales": 270000 },
    { "spend": 70000, "sales": 280000 },
    { "spend": 80000, "sales": 290000 },
    { "spend": 90000, "sales": 295000 },
    { "spend": 100000, "sales": 300000 }
  ],
};

// Define colors for each channel
const colorMapping: { [channel: string]: string } = {
  'YouTube': '#f72f34',
  'Email': '#ff7b00',
  'Snapchat': '#ffc502',
  'Facebook': '#047adb',
  'App Notification': '#a378ff'
};

// Define the shape of chart data
type chartDataModel = {
  channel: string;
  color: string;
  data: {
    spend: number;
    sales: number;
  }[];
};

// Process the response curve data
const processData = (data: ResponseCurveData): chartDataModel[] => {
  return Object.keys(data).map(channel => ({
    channel,
    color: colorMapping[channel] || 'Gray',
    data: data[channel]
  }));
};

const ResponsiveLineChart: React.FC = () => {
  const [data, setData] = useState<chartDataModel[]>([]);
  const [selectedChannel, setSelectedChannel] = useState<string>('YouTube');

  useEffect(() => {
    const processedData = processData(responseCurveData);
    setData(processedData);
  }, []);

  return (
    <Box style={{ display: 'flex' }}>
      <Box style={{ width: '200px', padding: '10px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop:'30px' }}>
          {data.map(channel => (
            <button
              key={channel.channel}
              onClick={() => setSelectedChannel(channel.channel)}
              style={{
                margin: '0 0 5px 0',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: selectedChannel === channel.channel ?  `${channel.color}` : '#e0e0e0',
                color: selectedChannel === channel.channel ? '#fff' : '#000',
                cursor: 'pointer',
                borderLeft: `10px solid ${channel.color}`
              }}
            >
              {channel.channel}
            </button>
          ))}
        </div>
      </Box>
      <Box style={{textAlign:'center', padding:'10px',width:'100%'}}>
        <Text size='3' weight={'bold'} >Response Curves</Text>

        <ResponsiveContainer width='100%' height={400}>
          <LineChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="spend" label={{ value: 'Spend', position: 'insideBottomRight', offset: 0 }} />
            <YAxis label={{ value: 'Sales', angle: -90, position: 'insideLeft', offset: 0 }} />
            <Tooltip />
            <Legend />
            {data.map(channel => (
              selectedChannel === channel.channel && (
                <Line
                  key={channel.channel}
                  name={channel.channel}
                  data={channel.data}
                  type="monotone"
                  dataKey="sales"
                  stroke={channel.color}
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
              )
            ))}
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ResponsiveLineChart;
