import { Flex } from '@adobe/react-spectrum';
import React from 'react';
import {
    Bar, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
    ComposedChart, Cell,
} from 'recharts';
import BoldText from './BoldText';
import { getColorByChannel } from '../../screens/CampaignDetail/CampaignDetailAnalytics';

interface CombinedChartProps {
    title: string;
    data: {
        platform: string;
        Spend: number;
        CPConv: number;
    }[];
}

const formatYAxisTick = (value: number, index: number) => {
    if (value >= 1000) {
        return `${(value / 1000).toFixed(0)}k`;
    }
    return value.toString(); 
};

const CombinedChart: React.FC<CombinedChartProps> = ({ title, data }) => {
    return (
        <Flex direction={"column"} alignItems={"center"} width={"100%"}>
            <BoldText>{title}</BoldText>
            <ResponsiveContainer height={250}>
                <ComposedChart data={data}>
                    <XAxis dataKey={"platform"} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" iconSize={6} />
                    <Bar
                        radius={[10, 10, 0, 0]}
                        dataKey="CPConv"
                        barSize={35}
                        yAxisId="left"
                        legendType="rect"
                        name="CPConv"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getColorByChannel(entry.platform)} />
                        ))}
                    </Bar>
                    <Line
                        dot={false}
                        strokeWidth={2}
                        strokeLinecap="round"
                        type="monotone"
                        dataKey="Spend"
                        stroke="#3B7AD9"
                        yAxisId="right"
                        legendType="rect"
                        name="Spend"
                    />
                    <YAxis
                        tickLine={false}
                        yAxisId="left"
                        axisLine={{ stroke: "#f5f5f5" }}
                        domain={[5, "dataMax + 5"]}
                        tickCount={5}
                        tick={{ fontSize: 12 }}
                        tickFormatter={formatYAxisTick}
                    />
                    <YAxis
                        tickLine={false}
                        yAxisId="right"
                        orientation="right"
                        stroke="#3B7AD9"
                        axisLine={{ stroke: "#f5f5f5" }}
                        domain={[5, "dataMax + 5"]}
                        tickCount={5}
                        tick={{ fontSize: 12 }}
                        tickFormatter={formatYAxisTick}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </Flex>
    );
};

export default CombinedChart;
