import { Box, Text } from '@radix-ui/themes';
import React from 'react';
import { Cell, Label, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import CustomPieChartLabel from "../ui/PieChartLabel";

const PERFORMANCE_CHART_COLORS = [
    '#6e63d6',
    '#83a6ed',
    '#ff9800',
    '#4caf50',
    '#a4de6c',
    '#d0ed57',
    '#ffc658',
    '#ffa726',
    '#ff7043',
    '#ff4d4f',
];
export interface PieData {
    name: string;
    value: number;
    color?:string;
}
interface PieChartProps {
    chartSize: number;
    chartContainerSize:number;
    data: PieData[];
    isDonut?: boolean;
    centerText?: string;
    showLabels?: boolean;
    showLegend?:boolean;
    displayCount?:boolean;
}
const PieChartComp: React.FC<PieChartProps> = ({ chartSize, chartContainerSize, data, isDonut, centerText , showLabels = true , showLegend= true, displayCount=false }) => {
    const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);
    const renderEmptyPieChart = () => (
        <PieChart width={chartSize + chartContainerSize } height={chartSize + 150}>
        <Pie
            data={[{ name: '', value: 1 }]}
            innerRadius={isDonut ? chartSize / 3.5 : 0}
            outerRadius={chartSize / 2}
            dataKey="value"
            strokeWidth={2}
        />
        </PieChart>
    );
    return (
        <Box p="0px" >
           
            {data.length > 0 ? (
                <PieChart width={chartSize + chartContainerSize } height={chartSize + 150}>
                    <Pie
                        data={data}
                        innerRadius={isDonut ? chartSize / 3.5 : 0}
                        outerRadius={chartSize / 2}
                        dataKey="value"
                        label={showLabels ? (props) => CustomPieChartLabel({ ...props, totalValue , displayCount }) : undefined}
                        isAnimationActive={true}
                        legendType='circle'
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={data[index].color? data[index].color : PERFORMANCE_CHART_COLORS[index % PERFORMANCE_CHART_COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [value, name]} />
                        { showLegend && (

                    <Legend
                        iconSize={8}  
                        wrapperStyle={{
                            fontSize: '10px',padding:'20px 0px '
                        }}
                    />
                )}


                </PieChart>
            ) : (
                renderEmptyPieChart()
            )}
            
        </Box>
    );
};
export default PieChartComp;
