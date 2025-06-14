import React, { useState } from 'react';
import { Card, Box, RadioGroup, Text } from '@radix-ui/themes';
import { LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Label } from 'recharts';

//json given for line chart
const data = {
  sales_trend: [
    { month: "January", sales: 260000 },
    { month: "February", sales: 270000 },
    { month: "March", sales: 290000 },
    { month: "April", sales: 320000 },
    { month: "May", sales: 280000 },
    { month: "June", sales: 400000 },
    { month: "July", sales: 330000 },
    { month: "August", sales: 400000 },
    { month: "September", sales: 420000 },
    { month: "October", sales: 350000 },
    { month: "November", sales: 400000 },
    { month: "December", sales: 430000 }
  ],
  marketing_driven_sales: [
    { month: "January", sales: 325000 },
    { month: "February", sales: 350000 },
    { month: "March", sales: 370000 },
    { month: "April", sales: 400000 },
    { month: "May", sales: 450000 },
    { month: "June", sales: 500000 },
    { month: "July", sales: 550000 },
    { month: "August", sales: 600000 },
    { month: "September", sales: 650000 },
    { month: "October", sales: 700000 },
    { month: "November", sales: 750000 },
    { month: "December", sales: 800000 }
  ]
};

const SalesLineChart: React.FC = () => {
  const [selectedData, setSelectedData] = useState<'sales_trend' | 'marketing_driven_sales'>("sales_trend");

  // Handle data change based on selected dataset
  const dataToDisplay = data[selectedData];
  const handleRadioChange = (value: any) => {
    setSelectedData(value);
  };

  return (
   
      <Box style={{padding:'10px ',textAlign:'center'}}>
        <Text size='3' weight={'bold'} >Sales Trend</Text>
        <div style={{ textAlign: "center", margin: '20px 0px' }}>
         
          <RadioGroup.Root value={selectedData} onValueChange={handleRadioChange} name="example" orientation="horizontal" style={{ display: "flex", width: "100%", flexDirection: "row", gap: "10px" , marginBottom:'20px', alignContent:'center'}} >
        <RadioGroup.Item value="sales_trend">Sales Trend</RadioGroup.Item>
        <RadioGroup.Item value="marketing_driven_sales">Marketing Driven Sales</RadioGroup.Item>
      </RadioGroup.Root>
      
         
        </div>
        <ResponsiveContainer width="100%" height={300}>
          
          <LineChart
            data={dataToDisplay}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month">
              <Label value="Months" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis>
              <Label value="Sales" angle={-90} position="insideLeft" offset={0} />
            </YAxis>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6e63d6"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
   
  );
}

export default SalesLineChart;
