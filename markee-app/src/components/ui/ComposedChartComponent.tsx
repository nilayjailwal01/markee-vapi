import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from 'recharts';

// Define the data type
interface DataItem {
  channel: string;
  spend: number;
  roi: number;
}

// Sample data
const data: DataItem[] = [
  { channel: 'YouTube', spend: 15000, roi: 8.5 },
  { channel: 'TV', spend: 22000, roi: 6.2 },
  { channel: 'Social Media', spend: 12000, roi: 7.0 },
  { channel: 'Print', spend: 8000, roi: 4.5 },
  { channel: 'Paid Search', spend: 17000, roi: 9.1 },
];

const ComposedChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="channel" />
        <YAxis yAxisId="left" orientation="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        
        {/* Bar Chart for Spend */}
        <Bar
          dataKey="spend"
          barSize={20}
          fill="#0088FE"
          yAxisId="left"
        >
          <LabelList dataKey="spend" position="top" />
        </Bar>
        
        {/* Line Chart for ROI */}
        <Line
          type="monotone"
          dataKey="roi"
          stroke="#1a237e"
          strokeWidth={2}
          yAxisId="right"
        />

        <text x={180} y={20} textAnchor="middle" fill="#000" fontSize={16} fontWeight={600}>
          Return on Investment
        </text>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedChartComponent;
