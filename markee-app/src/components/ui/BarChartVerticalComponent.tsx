import React from 'react';
import { Card, Box } from '@radix-ui/themes';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';

// Example data with both positive and negative values
const data = [
    { day: 'Email', value: 22 },
    { day: 'Online Mode', value: -24 },
    { day: 'Offline Mode', value: 20 },
    { day: 'Covid', value: -26 },
    { day: 'Price', value: 28 },
    { day: 'Competitors', value: -25 },
];

// Define color for the bars
const barColor = '#0088FE';

const BarChartComponent: React.FC = () => {
    return (
        <Card style={{ padding: '20px', width: '100%', height: '400px', marginTop: '20px', overflow: 'hidden' }}>
            <Box style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h3>Drivers of Sales</h3>
                <div style={{ width: '80%', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <BarChart
                        width={1200}
                        height={1000}
                        data={data}
                        margin={{ top: 20, right: 40, bottom: 60, left: 100 }} // Adjusted margins
                        layout="vertical" // Horizontal bars
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                            type="number" 
                            label={{ value: 'Value', angle: 0, position: 'insideBottomRight', offset: 0 }} 
                            tick={{ fontSize: 40 }} // Increase x-axis label font size
                        />
                        <YAxis 
                            type="category" 
                            dataKey="day" 
                            width={150} 
                            label={{ value: 'Category', angle: -90, position: 'insideLeft', offset: 20 }} 
                            tick={{ fontSize: 40 }} // Increase y-axis label font size
                        />
                        <Tooltip />
                        <Bar dataKey="value" fill={barColor}>
                            {
                                data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={barColor} // Custom color
                                        stroke={barColor} // Border color
                                        strokeWidth={1} // Uniform border width
                                    />
                                ))
                            }
                        </Bar>
                    </BarChart>
                </div>
            </Box>
        </Card>
    );
};

export default BarChartComponent;
