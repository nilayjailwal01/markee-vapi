import React from "react";
import { Card, Box, Text } from '@radix-ui/themes';
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip, Cell } from 'recharts';
import renderCustomizedLabel from "../ui/DonutChartLabel";

const data = [
    { channel: "Email", percentage: 38.46, color:'#ff7b00'},
    { channel: "Facebook", percentage: 26.92 , color:'#047adb'},
    { channel: "Youtube", percentage: 15.38 ,color:'#f72f34'},
    { channel: "Snapchat", percentage: 11.54 ,color:'#ffc502' },
    { channel: "App Notification", percentage: 7.69,color:'#a378ff' }
];


const DonutChart: React.FC = () => {
    const totalValue = data.reduce((sum, entry) => sum + entry.percentage, 0);

    return (
        
            <Box style={{textAlign:'center', padding:'10px'}}>
        <Text size='3' weight={'bold'} >Sales Contribution</Text>

                <div style={{ width: '100%', height: '360px' }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                dataKey="percentage"
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                innerRadius={40}
                                fill="#6e63d6"
                                label={(props) => renderCustomizedLabel({ ...props, totalValue })}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip cursor={{ stroke: 'blue', strokeWidth: 2 }} />
                            {/* You can uncomment and adjust the Legend as needed */}
                            {/* <Legend
                                height={26}
                                iconType='circle'
                                layout='vertical'
                                verticalAlign='top'
                                iconSize={10}
                                style={{ marginTop: '20px' }}
                            /> */}
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </Box>
        
    );
}

export default DonutChart;
