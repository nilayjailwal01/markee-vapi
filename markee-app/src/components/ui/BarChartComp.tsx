import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { Heading, Text } from '@radix-ui/themes';

export interface BarConfig {
    dataKey: string;
    fill: string;
    yAxisId?: string;
}

interface BarChartWithLegendProps {
    data: any[];
    barConfigs: BarConfig[];
    chartTitle: string;
    displayNameMapping?: Record<string, string>;
    width?: number
    horLegend? : boolean;
}

const CustomLegend: React.FC<{ barConfigs: BarConfig[], displayNameMapping?: Record<string, string> }> = ({ barConfigs, displayNameMapping }) => {
    const leftConfigs = barConfigs.filter(config => config.yAxisId === 'left');
    const rightConfigs = barConfigs.filter(config => config.yAxisId === 'right');

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0, marginTop: 30 }}>
            {leftConfigs.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                    {leftConfigs.map((config) => (
                        <div key={config.dataKey} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                            <div style={{ width: 10, height: 10, backgroundColor: config.fill, marginRight: 8 }}></div>
                            <div style={{ fontSize: '12px', marginTop: '-4px' }}>
                                {displayNameMapping ? displayNameMapping[config.dataKey] || config.dataKey : config.dataKey}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {rightConfigs.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 'auto', marginRight: 30 }}>
                    {rightConfigs.map((config) => (
                        <div key={config.dataKey} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                            <div style={{ width: 10, height: 10, backgroundColor: config.fill, marginRight: 8 }}></div>
                            <div style={{ fontSize: '12px', marginTop: '-4px' }}>
                                {displayNameMapping ? displayNameMapping[config.dataKey] || config.dataKey : config.dataKey}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const HorizontalLegend: React.FC<{ barConfigs: BarConfig[], displayNameMapping?: Record<string, string> }> = ({ barConfigs, displayNameMapping }) => {
   
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0, marginTop: 10 }}>
            {barConfigs.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' , marginLeft:'50px'}}>
                    {barConfigs.map((config) => (
                        <div key={config.dataKey} style={{ display: 'flex', alignItems: 'center', marginBottom: 8, marginRight:20 }}>
                            <div style={{ width: 10, height: 10, backgroundColor: config.fill, marginRight: 8 }}></div>
                            <div style={{ fontSize: '12px', marginTop: '-4px' }}>
                                {displayNameMapping ? displayNameMapping[config.dataKey] || config.dataKey : config.dataKey}
                            </div>
                        </div>
                    ))}
                </div>
            )}
          
        </div>
    );
};

const CustomTooltip: React.FC<{ payload: any[] | undefined, label: string, displayNameMapping?: Record<string, string> }> = ({ payload, label, displayNameMapping }) => {
    if (!payload || payload.length === 0) return null;

    const data = payload[0]?.payload || {};
    return (
        <div style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <div><strong>{label}</strong></div>
            {Object.keys(data).map((key, index) => {
                if (index === 0) return null;
                return (
                    <div key={key}>
                        <span>{displayNameMapping ? displayNameMapping[key] || key : key}:</span> <strong>{data[key]}</strong>
                    </div>
                );
            })}
        </div>
    );
};

const BarChartWithLegend: React.FC<BarChartWithLegendProps> = ({ data, barConfigs, chartTitle, displayNameMapping, width = 430, horLegend }) => (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
        <div>
            <Text size="3" weight='bold' >{chartTitle}</Text>
            <CustomLegend barConfigs={barConfigs} displayNameMapping={displayNameMapping} />
            <BarChart width={width} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize="12px" angle={-20} tickMargin={10} />
                <YAxis fontSize="10px" yAxisId="left" orientation="left" stroke='#6e63d6' />
                <YAxis fontSize="10px" yAxisId="right" orientation="right" stroke='#36761d' />
                <Tooltip content={({ payload, label }) => <CustomTooltip payload={payload} label={label} displayNameMapping={displayNameMapping} />} />
                <Tooltip />
                <Tooltip />
                {barConfigs.map((config) => (
                    <Bar
                        key={config.dataKey}
                        dataKey={config.dataKey}
                        fill={config.fill}
                        barSize={100}
                        yAxisId={config.yAxisId ?? 'left'}
                    />
                ))}
            </BarChart>
                {horLegend && (
                    <HorizontalLegend barConfigs={barConfigs} displayNameMapping={displayNameMapping}  />

                )}
        </div>
    </div>
);

export default BarChartWithLegend;
