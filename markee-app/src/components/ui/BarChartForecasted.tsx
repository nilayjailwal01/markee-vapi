import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


interface LnChartProps {
    isCompleted: boolean
    data: {
        name: string,
        // Reach: number,
        // ReachPr?: number
        OR: number,
        ORPr?: number,
        CTR: number,
        CTRPr?: number
        ConvRate: number
        ConvRatePr?: number
    }[],
    selectedMetric: string
    isForecast?:boolean

}

// Helper function to calculate the date range for a given week number and year
const getWeekDateRange = (weekNumber: number, year: number) => {
    const firstDayOfYear = new Date(year, 0, 1); // January 1st
    const daysOffset = (weekNumber - 1) * 7; // Number of days to add for the week's start

    // Calculate the start date of the week
    const weekStartDate = new Date(firstDayOfYear.getTime() + daysOffset * 86400000);
    // Calculate the end date of the week (7 days later)
    const weekEndDate = new Date(weekStartDate.getTime() + 6 * 86400000);

    // Format the start and end dates to "MMM D"
    const startDateStr = `${weekStartDate.toLocaleString('en-US', { month: 'short', day: 'numeric' })}`;
    const endDateStr = `${weekEndDate.toLocaleString('en-US', { month: 'short', day: 'numeric' })}`;
    
    return `${startDateStr} - ${endDateStr} ${year}`;
};


// Function to get the week number of a given date (ISO week date)
const getWeekOfYear = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

// Function to extract week and year from the string format "Week 1 2024"
const parseWeekYear = (weekYearStr: string) => {
    const [_, week, year] = weekYearStr.split(' ');
    return {
        week: parseInt(week, 10), // Extract the week number
        year: parseInt(year, 10)  // Extract the year
    };
};

const LineChartComponent: React.FC<LnChartProps> = ({ isCompleted = false, data, selectedMetric, isForecast=true }) => {

    const currentWeek = getWeekOfYear(new Date()); // Function to get the current week number (1-52)
    const currentYear = new Date().getFullYear(); // Get the current year

    const mergedData = data.map((item) => {
        const { week: itemWeek, year: itemYear } = parseWeekYear(item.name);

        // Compare current week and year with item week and year
        const isPastOrCurrentWeek = (itemYear < currentYear) || (itemYear === currentYear && itemWeek <= currentWeek);
        const isFutureOrCurrentWeek = (itemYear > currentYear) || (itemYear === currentYear && itemWeek >= currentWeek);

        // Create a merged data structure with solid and dotted line fields for weekly data
        return {
            ...item,
            // Reach: isPastOrCurrentWeek ? item.Reach : null,  // Solid line for past and current weeks
            CTR: isPastOrCurrentWeek ? item.CTR : null,
            OR: isPastOrCurrentWeek ? item.OR : null,
            ConvRate: isPastOrCurrentWeek ? item.ConvRate : null,
            // ReachPr: isFutureOrCurrentWeek ? item.Reach : null,       // Dotted line for future weeks
            CTRPr: isFutureOrCurrentWeek ? item.CTR : null,
            ORPr: isFutureOrCurrentWeek ? item.OR : null,
            ConvRatePr: isFutureOrCurrentWeek ? item.ConvRate : null
        };
    });


    return (
        <ResponsiveContainer width="100%" className='chartbg' height={300} style={{ padding: '10px', borderRadius: '10px' }}>


            <LineChart data={mergedData}>
                {/* X Axis */}
                <XAxis dataKey="name" type="category" label={{ value: 'Date', position: 'insideBottomRight', offset: 0 }} />

                {/* Y Axis */}
                <YAxis
                    yAxisId="right"
                    orientation="right"
                    label={{ value: selectedMetric === 'Conversion Rate' ? "ConvRate" : selectedMetric, angle: -90, position: 'insideRight' }}
                />

                <Tooltip />
                <Legend />

                {/* Solid Line for past and current months */}

                <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey={selectedMetric === 'Conversion Rate' ? "ConvRate" : selectedMetric}
                    stroke="#06D001"
                    name={selectedMetric}
                    strokeWidth={3}
                    dot={{ fill: "#5856c2", stroke: "#5856c2", r: 5 }}
                />


                {/* Dotted Line for future months */}
            {isForecast != false  && isCompleted != true && (

                <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey={selectedMetric === 'Conversion Rate' ? "ConvRatePr" : `${selectedMetric}Pr`}
                    stroke="#F3FF90"
                    name={`${selectedMetric} Forecast`}
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ fill: "#5856c2", stroke: "#5856c2", r: 5 }}
                />
            )}

            </LineChart>


        </ResponsiveContainer>
    );
}

export default LineChartComponent;
