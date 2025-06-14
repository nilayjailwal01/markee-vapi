import { Flex } from '@adobe/react-spectrum';
import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import BoldText from './BoldText';
import { getColorByChannel } from '../../screens/CampaignDetail/CampaignDetailAnalytics';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28EFF', '#FF6666', '#66B2FF'];

interface DonutProps {
  title: string
  data: {
    name: string,
    value: number
  }[]
}

const DonutChartAnalytics: React.FC<DonutProps> = ({ title, data }) => {
  return (
    <Flex direction={"column"} alignItems={"center"} width={"100%"}>
      <BoldText>{title}</BoldText>
      <ResponsiveContainer height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
            fill="#6e63d6"
            dataKey="value"
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColorByChannel(entry.name)} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" iconSize={6} />
        </PieChart>
      </ResponsiveContainer>
    </Flex>
  );
};

export default DonutChartAnalytics;
