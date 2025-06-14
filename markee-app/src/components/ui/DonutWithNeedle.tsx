import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;
const max = 10000;
const actual = 7000;
const data = [
  { name: 'Sales', value: actual, color: '#4caf50' }, // Green for actual sales
  { name: 'Remaining', value: max - actual, color: '#cccccc' }, // Grey for remaining
];

interface NeedleProps {
  value: number;
  data: { name: string; value: number; color: string }[];
  cx: number;
  cy: number;
  iR: number;
  oR: number;
  color: string;
}

const needle = ({ value, data, cx, cy, iR, oR, color }: NeedleProps) => {
  let total = data.reduce((sum, v) => sum + v.value, 0);
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="needle-circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path key="needle-path" d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="none" fill={color} />,
  ];
};

interface DonutWithNeedleProps {
  width: number;
  height: number;
  max: number;
  actual: number;
}

export class DonutWithNeedle extends PureComponent<DonutWithNeedleProps> {
  render() {
    const { width, height, max, actual } = this.props;
    
    const data = [
      { name: 'Sales', value: actual, color: '#4caf50' }, // Green for actual sales
      { name: 'Remaining', value: max - actual, color: '#cccccc' }, // Grey for remaining
    ];

    const cx = width / 2; // Center x
    const cy = height / 2 - 20; // Center y, adjusted for labels
    const iR = Math.min(width, height) * 0.25; // Inner radius
    const oR = Math.min(width, height) * 0.4; // Outer radius

    return (
      <PieChart width={width} height={height} style={{ margin: 'auto' }}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#4caf50"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle({ value: actual, data, cx, cy, iR, oR, color: '#d0d000' })}
        
        <text x={cx - 60} y={oR + 35} textAnchor="middle" fill="#000">0</text>
        <text x={cx + 70} y={oR + 35} textAnchor="middle" fill="#000">{ Math.floor(max/1000)}k</text>
        
        <text x={cx} y={oR + 35} textAnchor="middle" fill="#000" fontSize={13}>
          Total Sales 
        </text>
        <text x={cx} y={oR + 55} textAnchor="middle" fill="#000" fontSize={13}>
          {Math.floor(actual/1000)}k
        </text>
      </PieChart>
    );
  }
}


export default DonutWithNeedle;
