import { useState } from "react";
import { Text, Flex, Button } from "@radix-ui/themes"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

interface BarChartProps {
    title: string
    defaultSelection: string
    data: any[],
    buttons: string[],
    isYaxisFixed? :boolean,
    yAxisTerm?:any

}
const BarCharWithRadio: React.FC<BarChartProps> = ({ data, defaultSelection, title, buttons, isYaxisFixed , yAxisTerm }) => {
    const [selectedMetric, setSelectedMetric] = useState(defaultSelection)
    return (
        <>
            <Text size="4" weight="bold" color='gray' >{title}</Text>
            <Flex direction={"row"} gap={"2"}  style={{ width: "fit-content", alignSelf: "start", marginLeft: "60px" }}>
                {buttons.map(e => (
                    <Button variant={selectedMetric === e ? "solid" : "soft"} onClick={() => setSelectedMetric(e)}>{e}</Button>
                ))}
            </Flex>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={isYaxisFixed? selectedMetric :"name"} fontSize="10px" angle={-20} tickMargin={10} />
                    <YAxis />
                    <Tooltip />

                    {isYaxisFixed && yAxisTerm ? (
                    <Bar  dataKey={yAxisTerm[0]? yAxisTerm[0] : selectedMetric}  fill={yAxisTerm[0] == 'Reach'?"#6e63d6":"#6aa850"} barSize={40} />
                    ):( <Bar dataKey={selectedMetric} fill="#6e63d6" />)}
                   {yAxisTerm && yAxisTerm.length > 1 && (
                    <Bar  dataKey={yAxisTerm[1]}  fill="#35731d" barSize={40} />
                   )} 

                </BarChart>
            </ResponsiveContainer>
        </>
    )

}

export default BarCharWithRadio