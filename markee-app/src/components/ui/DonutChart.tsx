import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface DonutChartProps {
  progress: number;
  total: number;
  color?: string;
}

const DonutChart: React.FC<DonutChartProps> = ({ progress, total, color ='#6e63d6' }) => {
  const percentage = (progress / total) * 100;

  // Data for the pie chart
  const data = [
    { name: 'Progress', value: progress },
    { name: 'Remaining', value: total - progress }
  ];

  return (
    <div style={{ position: 'relative', width: '150px', height: '150px', margin: 'auto' }}>
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          innerRadius={40}
          outerRadius={60}
          paddingAngle={2}
          dataKey="value"
          stroke="none"
        >
          <Cell key="progress" fill={color} /> {/* Use the passed color here */}
          <Cell key="remaining" fill="#d3d3d3" /> {/* Gray for remaining */}
        </Pie>
      </PieChart>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '15px',
          fontWeight: 'bold',
          color: '#000',
        }}
      >
        {`${percentage.toFixed(1)}%`}
      </div>
    </div>
  );
};

export default DonutChart;
