import React from "react";
import { LabelProps } from "recharts";

interface CustomizedLabelProps extends LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  fill: string;
  payload: { channel: string; percentage: number }; // Adjust payload type
  value: number;
  totalValue: number;
}

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = (props: CustomizedLabelProps) => {
  const {
    cx,
    cy,
    midAngle,
    outerRadius,
    fill,
    payload,
    value,
    totalValue
  } = props;
  
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 10;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  const percentage = (value / totalValue) * 100;
  const formattedPercentage = Math.round(percentage * 10) / 10;
  const displayPercentage = Number.isInteger(formattedPercentage) 
    ? `${formattedPercentage.toFixed(0)}%` 
    : `${formattedPercentage.toFixed(1)}%`;

  return (
    <g>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        style={{ fontWeight: "bold" }}
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill={fill}
        fontSize='14px'
      >
        {displayPercentage} - {payload.channel}
      </text>
    </g>
  );
};

export default renderCustomizedLabel;
