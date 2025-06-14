import React, { useEffect, useState } from 'react';
import { Flex, Text, RadioGroup, Box } from '@radix-ui/themes';
import campaignData, { CampData, CreativeData } from '../../components/utilities/campaignData';
import { creativeData, creativeDataWeekWise } from '../../components/utilities/creativeData';
import BoldText from '../../components/ui/BoldText';
import { ArrowUpIcon, ArrowDownIcon } from '@radix-ui/react-icons';
import DonutChartAnalytics from '../../components/ui/DonutChartAnalytics';
import CombinedChart from '../../components/ui/CombinedChart';
import { AnalyticsColumns, RenderTable } from '../../components/utilities/tableUtilities';

import EmailSVG from '../../icons/email-pink.svg';
import YoutubeSVG from '../../icons/youtube-red.svg';
import FacebookSVG from '../../icons/facebook-blue.svg';
import SnapchatSVG from '../../icons/snapchat-yellow.svg';
import BelloutlineSVG from '../../icons/bell-outline-orange.svg';
import { formatCurrency, getRandomElement } from '../../components/utilities/helpers';
import LineChartComponent from '../../components/ui/BarChartForecasted';
import { ActionButton, Divider, Radio, Tooltip, TooltipTrigger } from '@adobe/react-spectrum';

interface CampaignDetailAnalyticsProps {
    campaign: CampData | null;
}

export const getColorByChannel = (channel: string): string => {
    const colors: Record<string, string> = {
        'Email': '#ff7b00',
        'Youtube': '#f72f34',
        'Snapchat': '#ffc502',
        'Facebook': '#047adb',
        'App Notification': '#a378ff'
    };
    return colors[channel] || '#cccccc';
};

export const prepareChartDataCreatives = (creatives: CreativeData[]) => {
    return creatives.map(({ CreativeName, Reach = 0, CTR = 0, ConversionRate = 0 }) => ({
        name: CreativeName || 'Unknown',
        Reach: Number(Reach),
        CTR: Number(CTR),
        Conversion_Rate: Number(ConversionRate),
    }));
};

export const prepareChartDataLocations = (creatives: CreativeData[]) => {
    const locationData: Record<string, { Reach: number, CTR: number, ConversionRate: number }> = {};

    creatives.forEach(({ location, Reach = 0, CTR = 0, ConversionRate = 0 }) => {
        if (location) {
            if (!locationData[location]) {
                locationData[location] = { Reach: 0, CTR: 0, ConversionRate: 0 };
            }
            locationData[location].Reach += Number(Reach);
            locationData[location].CTR += Number(CTR);
            locationData[location].ConversionRate += Number(ConversionRate);
        }
    });

    return Object.entries(locationData).map(([location, { Reach, CTR, ConversionRate }]) => ({
        name: location,
        Reach,
        CTR,
        Conversion_Rate: ConversionRate,
    }));
};

export const prepareChartDataChannels = (creatives: CreativeData[]) => {
    const channelData: Record<string, { Reach: number, CTR: number, ConversionRate: number }> = {};

    creatives.forEach(({ channel, Reach = 0, CTR = 0, ConversionRate = 0 }) => {
        if (channel) {
            if (!channelData[channel]) {
                channelData[channel] = { Reach: 0, CTR: 0, ConversionRate: 0 };
            }
            channelData[channel].Reach += Number(Reach);
            channelData[channel].CTR += Number(CTR);
            channelData[channel].ConversionRate += Number(ConversionRate);
        }
    });

    return Object.entries(channelData).map(([channel, { Reach, CTR, ConversionRate }]) => ({
        name: channel,
        Reach,
        CTR,
        Conversion_Rate: ConversionRate,
    }));
};

export const prepareChartDataCampaigns = (campaings: CampData[], channel: String) => {
    const CampaignRecords: Record<number, { Reach: number, CTR: number, ConversionRate: number }> = {}
    campaignData.forEach(({ id, creatives }) => {
        creatives.filter(e_Creative => e_Creative.channel === channel)
            .forEach(({ Reach = 0, CTR = 0, ConversionRate = 0 }) => {
                if (!CampaignRecords[id]) {
                    CampaignRecords[id] = { Reach: 0, CTR: 0, ConversionRate: 0 }
                }
                CampaignRecords[id].Reach += Number(Reach);
                CampaignRecords[id].CTR += Number(CTR);
                CampaignRecords[id].ConversionRate += Number(ConversionRate);
            })
    })

    return Object.entries(CampaignRecords).map(([id, { Reach, CTR, ConversionRate }]) => ({
        name: id,
        Reach,
        CTR,
        Conversion_Rate: ConversionRate,
    }));
}

export const prepareEngagementChartCreative = (creatives: CreativeData[]) => {
    const data: Record<string, {
        OR: number, CTR: number, CLICKS: number, LIKES: number, SHARES: number,
        COMMENTS: number, VIEWS: number, PageRedirect: number, SessionDuration: number, Open: number
    }> = {}
    creatives.forEach(({ CreativeName, OR = 0, CTR = 0, Clicks = 0, Like = 0, Comment = 0,
        Shares = 0, Views = 0, PageRedirect = 0, SessionDuration = 0, Open = 0 }) => {
        if (CreativeName) {
            if (!data[CreativeName]) {
                data[CreativeName] = {
                    OR: 0, CTR: 0, CLICKS: 0, LIKES: 0, SHARES: 0, COMMENTS: 0,
                    VIEWS: 0, PageRedirect: 0, SessionDuration: 0, Open: 0
                }
            }
            data[CreativeName].OR += Number(OR)
            data[CreativeName].CTR += Number(CTR)
            data[CreativeName].CLICKS += Number(Clicks)
            data[CreativeName].LIKES += Number(Like)
            data[CreativeName].COMMENTS += Number(Comment)
            data[CreativeName].SHARES += Number(Shares)
            data[CreativeName].VIEWS += Number(Views)
            data[CreativeName].PageRedirect += Number(PageRedirect)
            data[CreativeName].SessionDuration += Number(SessionDuration)
            data[CreativeName].Open += Number(Open)
        }
    })

    return Object.entries(data).map(([id, { OR, CTR, LIKES, SHARES, COMMENTS, VIEWS, CLICKS, PageRedirect,
        SessionDuration, Open }]) => ({
            name: id,
            CTR,
            OR,
            LIKES,
            SHARES,
            COMMENTS,
            VIEWS,
            CLICKS,
            "Page Redirect": PageRedirect,
            "Session Duration": SessionDuration,
            "Open Rate": Open
        }));
}

export const aggregateLocationData = (creatives: CreativeData[]) => {
    const locationMap: { [key: string]: number } = {};
    creatives.forEach(({ location, MarketSpend = 0 }) => {
        if (locationMap[location])
            locationMap[location] += MarketSpend
        else
            locationMap[location] = MarketSpend
    })

    return Object.keys(locationMap).map((key) => ({
        name: key,
        value: locationMap[key],
    }));
};

export const findTopCreatives = (creatives: CreativeData[]) => {
    let topReach = { name: '', value: 0 };
    let topEngagement = { name: '', value: 0 };
    let topCTR = { name: '', value: 0 };
    let topCPC = { name: '', value: Number.MAX_VALUE };

    creatives.forEach(({ CreativeName, Reach = 0, Engagement = 0, CPC = 0, CTR = 0 }) => {
        const reachNum = Number(Reach);
        const engagementNum = Number(Engagement);
        const cpcNum = Number(CPC);
        const ctrNum = Number(CTR);

        if (reachNum > topReach.value) topReach = { name: CreativeName || '', value: reachNum };
        if (engagementNum > topEngagement.value) topEngagement = { name: CreativeName || '', value: engagementNum };
        if (ctrNum > topCTR.value) topCTR = { name: CreativeName || '', value: ctrNum };
        if (cpcNum < topCPC.value) topCPC = { name: CreativeName || '', value: cpcNum };
    });

    return {
        topReach,
        topEngagement,
        topCTR,
        topCPC,
    };
};


export const barConfigs = [
    { dataKey: 'Reach', fill: '#6e63d6', yAxisId: 'left' },
    { dataKey: 'CTR', fill: '#6aa850', yAxisId: 'right' },
    { dataKey: 'Conversion_Rate', fill: '#36761d', yAxisId: 'right' },
];

export const dataKeyMapping = {
    Reach: 'Reach',
    CTR: 'CTR',
    Conversion_Rate: 'Conversion Rate',
    OR: "OR"
};

const Sources = [
    "Email", "App Notification", "Youtube", "Facebook", "Snapchat"
] as const

interface tableRowType {
    source: any
    reach: number
    ctr: string | number
    cpc: string
    con_rate: string | number
    cp_conv: string | number
    market_spend: string
}

interface DataTrend {
    current: number
    average: number
    change: number
}
interface InfoData {
    Spend: DataTrend
    CPC: DataTrend
    Conversions: DataTrend
    skip?: string[]
}

interface InfoCardProps {
    channel: string
    data: InfoData
    width: string
    isCompleted: boolean
    skip?: string[] | []
    detailedStage?: string;
}

interface ChannelData {
    [key: string]: InfoData;
}

interface ValueCardProps {
    title: string
    current: number
    change: string
    average: number
    isCompleted: boolean
}

interface PieData {
    name: string;
    value: number;
}

interface CombinedChartProps {
    platform: string
    CPConv: number
    Spend: number
}

export interface LineChartProps {
    name: string
    // Reach: number
    CTR: number
    ConvRate: number
    OR: number
}

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const constructLineChartData = (campaign: CampData): LineChartProps[] => {
    let tempList: LineChartProps[] = [];
    campaign?.creatives.forEach(c => {
        const creativesByWeek = creativeDataWeekWise.find(e => e.CreativeID === c.CreativeID);
        if (creativesByWeek) {
            const startYear = new Date(creativesByWeek?.StartDate).getFullYear();
            const endYear = new Date(creativesByWeek.EndDate).getFullYear();
            creativesByWeek.Creatives.forEach((creative) => {
                const weekIndex = parseInt(creative.Week, 10); // Week number (1-52)
                const year = creative.Week >= 1 && creative.Week <= 52 ? startYear : endYear; // Assign year based on week

                const existingEntry = tempList.find(e => e.name === `Week ${weekIndex} ${year}`);
                if (existingEntry) {
                    // existingEntry.Reach += parseInt(creative.Reach.toFixed(0));
                    existingEntry.CTR += creative.CTR;
                    existingEntry.ConvRate += creative.ConversionRate;
                    existingEntry.OR += creative.OR;
                } else {
                    tempList.push(
                        {
                            name: `Week ${weekIndex} ${year}`,
                            // Reach: parseInt(creative.Reach.toFixed(0)),
                            CTR: creative.CTR,
                            ConvRate: creative.ConversionRate,
                            OR: creative.OR
                        }
                    );
                }
            });
        }
    });
    return tempList;
};



const CampaignDetailAnalytics: React.FC<CampaignDetailAnalyticsProps> = ({ campaign }) => {
    console.log("campaign det", campaign)
    const [tableData, setTableData] = useState<tableRowType[]>([])
    const [infoCardData, setInfoCardData] = useState<ChannelData>({})
    const [spendPieData, setSpendPieData] = useState<PieData[]>([])
    const [convPieData, setConvPieData] = useState<PieData[]>([])
    const [combinedChartData, setCombinedChartData] = useState<CombinedChartProps[]>([])
    const [lineChartData, setLineChartData] = useState<LineChartProps[]>([])
    const [selectedMetric, setSelecteMetric] = useState("CTR")
    const [detailedStage, setDetailedStage] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);
        if (campaign) {
            constructTableData()
            constructInfoCardData()
            setSpendPieData(constructPieData("MarketSpend"))
            setConvPieData(constructPieData("ConversionRate"))
            setCombinedChartData(constructCombinedData())
            setLineChartData(constructLineChartData(campaign))
            setDetailedStage(campaign?.campaignStage || "");
        }
    }, [campaign]);

    useEffect(()=>{
        constructInfoCardData()
    },[detailedStage])



   const getRounded = (num: any) => {
    const threshold = 0.1;
    if (num < threshold) {
        return 0;
    } else if (num < 1) {
        return num.toFixed(1);
    } else {
        const integerPart = Math.floor(num);
        const decimalPart = num - integerPart;
        return decimalPart < 0.1 ? integerPart : num.toFixed(1);
    }
};

    const constructTableData = () => {
        let data: tableRowType[] = [];
        let source = "Total", treach = 0, tctr = 0, tcpc = 0, tcon_rate = 0, tcp_conv = 0, tmarket_spend = 0;

        Sources.forEach((source) => {
            const creative = campaign?.creatives.find(e => e.channel === source)
            let reach = 0, con_rate = 0, ctr = 0, cp_conv = 0, market_spend = 0, cpc = 0;
            if (creative) {
                if (typeof creative.Reach === "string") {
                    reach = Number(creative.Reach)
                } else {
                    reach = creative.Reach ?  creative.Reach : 0
                }
                const creativesByChannel = creativeData.filter(e => e.CreativeID === creative?.CreativeID).flatMap(e => e.Creatives)
                creativesByChannel.forEach(c => {
                    con_rate += c.ConversionRate
                    ctr += source === 'App Notification' ? c.Open : c.CTR
                    cp_conv += c.CPCOnv
                    market_spend += c.MarketSpend
                    cpc += c.CPC
                    tctr += source === 'App Notification' ? c.Open : c.CTR
                    tcpc += c.CPC
                    tcon_rate += c.ConversionRate
                    tcp_conv += c.CPCOnv
                    tmarket_spend += c.MarketSpend
                })

                treach += reach
            }

           

            data.push({
                source,
                reach,
                ctr: ctr % 1 === 0 ? ctr : ctr.toFixed(1),
                cpc: cpc.toFixed(5),
                con_rate: con_rate % 1 === 0 ? con_rate : con_rate.toFixed(1),
                cp_conv:  cp_conv % 1 === 0 ? cp_conv : cp_conv.toFixed(1),
                market_spend: `${formatCurrency(market_spend)}`
            })
        })

        data.push({
            source, ctr: getRounded(tctr / Sources.length), reach: treach,
            cpc: (tcpc / Sources.length).toFixed(5), con_rate:  (tcon_rate / Sources.length) % 1 === 0 ? (tcon_rate / Sources.length) : (tcon_rate / Sources.length).toFixed(1),
            cp_conv:getRounded(tcp_conv / Sources.length), market_spend: `${formatCurrency(tmarket_spend)}`
        })
        console.log(data,'tabledata')
        setTableData(data)
    }

    const constructInfoCardData = () => {

        // Filter campaigns based on campaign stage (you'll need to pass or fetch `campaignStage` from your context or props)
        console.log("detailedStage g", detailedStage)
        console.log("campaignData", campaignData)

        let infoData: ChannelData = {};

        campaign?.creatives.forEach(({ channel, MarketSpend = 0, CPC = 0, ConversionRate = 0 }) => {
            if (!infoData[channel]) {
                infoData[channel] = {
                    Spend: { current: 0, change: 0, average: 0 },
                    CPC: { current: 0, change: 0, average: 0 },
                    Conversions: { current: 0, change: 0, average: 0 },
                    skip: []
                };
            }
            if (["Email", "App Notification"].includes(channel)) {
                infoData[channel].skip = ["Spend"]
            }

            // Add to each channel's total
            infoData[channel].Spend.current += MarketSpend;
            infoData[channel].CPC.current += CPC;
            infoData[channel].Conversions.current += ConversionRate;

            
        });

        console.log("infodata calculated", infoData)

        const filteredCampaigns = campaignData.filter(campaign => campaign.campaignStage == detailedStage);
        console.log("filteredCampaigns", filteredCampaigns)

        let infoData2: ChannelData = {};

        filteredCampaigns?.forEach((singleCampaign) => {
            singleCampaign?.creatives.forEach(({ channel, MarketSpend = 0, CPC = 0, ConversionRate = 0 }) => {
                // Initialize the channel object if it doesn't already exist
                if (!infoData2[channel]) {
                    infoData2[channel] = {
                        Spend: { current: 0, change: 0, average: 0 },
                        CPC: { current: 0, change: 0, average: 0 },
                        Conversions: { current: 0, change: 0, average: 0 },
                        skip: []
                    };
                }
        
                // Handle the special skip case for certain channels (e.g., "Email" or "App Notification")
                if (["Email", "App Notification"].includes(channel)) {
                    infoData2[channel].skip = ["Spend"];
                }
        
                // Add to each channel's totals
                infoData2[channel].Spend.current += MarketSpend;
                infoData2[channel].CPC.current += CPC;
                infoData2[channel].Conversions.current += ConversionRate;
            });
        });

        Object.keys(infoData).forEach(channel => {
            const data = infoData[channel];
            const data2 = infoData2[channel];

            

            const totalCreatives = filteredCampaigns.reduce((acc, campaign) => {
                return acc + campaign.creatives.filter(creative => creative.channel === channel).length;
            }, 0);
            
            console.log("total creatives ", totalCreatives)
            console.log("data ", data)
            console.log("data 2 ", data2)

            // Avoid division by zero
            if (totalCreatives > 0) {
                data.Spend.average =  data2.Spend.current/totalCreatives;
                data.CPC.average = data2.CPC.current/totalCreatives;
                data.Conversions.average = data2.Conversions.current/totalCreatives;
            }
            
        });

        setInfoCardData(infoData);
    };


    const constructPieData = (key: keyof CreativeData): PieData[] => {
        let tempList: PieData[] = [];

        campaign?.creatives.forEach((creative) => {
            const channel = creative.channel;
            let value = creative[key]

            if (typeof value === "string") {
                value = Number(value);
            }

            const existingEntry = tempList.find(e => e.name === channel);
            if (existingEntry) {
                existingEntry.value += value ? value : 0
            } else {
                tempList.push({ name: channel, value: value ? value : 0 });
            }
        });

        return tempList;
    };

    const constructCombinedData = (): CombinedChartProps[] => {
        let tempList: CombinedChartProps[] = [];

        campaign?.creatives.forEach((c) => {
            const creative = creativeData.find(e => e.CreativeID === c.CreativeID)
            const channel = c?.channel;
            let spend = c.MarketSpend
            let cpcConv = creative?.Creatives.filter(e => e.Channel === channel).map(e => e.CPCOnv).reduce((a, b) => a + b, 0)

            if (typeof spend === "string") {
                spend = Number(spend);
            }
            if (typeof cpcConv === "string") {
                cpcConv = Number(cpcConv);
            }

            const existingEntry = tempList.find(e => e.platform === channel);
            if (existingEntry) {
                existingEntry.Spend += spend ? spend : 0
                existingEntry.CPConv += cpcConv ? cpcConv : 0
            } else {
                tempList.push({ platform: channel, Spend: spend ? spend : 0, CPConv: cpcConv ? cpcConv : 0 });
            }
        });

        return tempList;
    }

    return (
        <Flex direction={"column"} gap={"20px"} style={{ marginTop: "10px" }}>
            <Flex direction={"row"} gap={"2"} style={{ justifyContent: "space-evenly" }}>
                {Object.entries(infoCardData).map(([channel, data]) => {
                    return (
                        <InfoCard
                            channel={channel}
                            data={data}
                            width={`${100 / Object.keys(infoCardData).length}%`}
                            isCompleted={campaign?.status === 'Completed'}
                            skip={data.skip}
                            detailedStage={detailedStage}
                        />
                    )
                })}
            </Flex>
            <Flex direction={"row"} gap={"2"} style={{ justifyContent: "space-evenly", margin: '50px 0px 20px' }} >
                <Flex width={"55%"}>
                    <DonutChartAnalytics title="Market Spend" data={spendPieData} />
                    <DonutChartAnalytics title="Conversation Rate" data={convPieData} />
                </Flex>
                <Flex width={"45%"}>
                    <CombinedChart data={combinedChartData} title='CPConv vs Spend' />
                </Flex>
            </Flex>
            <Divider orientation='horizontal' height={1} UNSAFE_className='dividerline'  />
            <Flex direction={"column"} style={{ margin: '20px 0px' }}>
                <RenderTable
                    columns={AnalyticsColumns}
                    data={tableData}
                    pageSize={10}
                    width={"100%"}
                    showPagination={false}
                />
            </Flex>
            <Divider orientation='horizontal' height={1} UNSAFE_className='dividerline' />
            <Flex direction={"row"} gap={"3"} align={"center"}>
                <RadioGroup.Root value={selectedMetric} onValueChange={(v: any) => setSelecteMetric(v)} name="example" orientation="vertical" >
                    {/* <RadioGroup.Item value="Reach">Reach</RadioGroup.Item> */}
                    <RadioGroup.Item value="CTR">CTR</RadioGroup.Item>
                    <RadioGroup.Item value="Conversion Rate">Conversion Rate</RadioGroup.Item>
                </RadioGroup.Root>

                <Flex width={"85%"}>
                   

                    <LineChartComponent isCompleted={campaign?.status === 'Completed'} data={lineChartData} selectedMetric={selectedMetric} />
                </Flex>
            </Flex>
        </Flex>
    );


};

const ValueCard: React.FC<ValueCardProps> = ({ title, current, change, average, isCompleted = false }) => {
    change = `${getRandomElement(["+", "-"])}${`${(Math.random() * 20).toFixed(1)}%`}`

    const getRounded = (num: any) => {
        const threshold = 0.1;
        if (num < threshold) {
            return 0;
        } else if (num < 1) {
            return num.toFixed(1);
        } else {
            const integerPart = Math.floor(num);
            const decimalPart = num - integerPart;
            return decimalPart < 0.1 ? integerPart : num.toFixed(1);
        }
    };
    return (
        <Flex direction={"column"} align={"center"}>
         
 <Flex direction={"column"} align={"center"}>
            <Text style={{ fontSize: "12px" }}>{title}</Text>
            
            <BoldText style={{ fontSize: "14px" }}>{title !== "Conversions" ? `${formatCurrency(getRounded(current))}` : `${getRounded(current)}`}</BoldText>
 
            {!isCompleted && (
                <>
                    {change.includes("-") ? (
                        <Text style={{ color: "red", display: "flex", flexDirection: "row", alignItems: 'center', gap: "2px" , fontSize:'12px' }}>
                            <ArrowDownIcon /> {change}
                        </Text>
                    ) :
                        change.includes("+") ? (
                            <Text style={{ color: "green", display: "flex", flexDirection: "row", alignItems: 'center', gap: "2px", fontSize:'12px' }}>
                                <ArrowUpIcon /> {change}
                            </Text>
                        ) : (
                            <Text>{change}</Text>
                        )
                    }
                </>
            )}
            </Flex>
           
        </Flex>
    )
}

interface IconCompProps {
    channel: string
}

const IconComp: React.FC<IconCompProps> = ({ channel }) => {
    const icon = channel === "Email" ? EmailSVG :
        channel === "Facebook" ? FacebookSVG :
            channel === "App Notification" ? BelloutlineSVG :
                channel === "Snapchat" ? SnapchatSVG :
                    channel === "Youtube" ? YoutubeSVG : null;

    return icon ? (
        <img className='noninvert' src={icon} width='18' height='18' alt="channel" />
    ) : null;
}

const InfoCard: React.FC<InfoCardProps> = ({ channel, data, width, isCompleted = false, skip = [] ,detailedStage}) => {
    const totalAverages = Object.entries(data).reduce((acc, [title, { average }]) => {
        if (!skip.includes(title) && title !== "skip") {
            const formattedAverage =
                title === "CPC" ? `$${average.toFixed(4)}` : 
                title === "Conversions" ? average.toFixed(2) : // Ensure no $ for Conversions
                formatCurrency(average);
            acc.push(`${title}: ${formattedAverage}`);
        }
        return acc;
    }, [] as string[]);
    

    return (
        <TooltipTrigger>
            <ActionButton isQuiet >
                <div>
                <Flex direction={"column"} className='dotted-box'  gap={"3"} width={'100%'} mt='50px'>
                    <Flex direction={"row"} gap={"5px"} align={"center"}>
                        <IconComp channel={channel} />
                        <BoldText style={{ fontSize: "16px" }}>{channel}</BoldText>
                    </Flex>
                    <Flex direction={"row"} gap={"3"} style={{ justifyContent: "space-evenly" }} align={"center"}>
                        {Object.entries(data).map(([title, { current, change, average }]) => (
                            <>
                                {!skip.includes(title) && title !== "skip" && (
                                    <ValueCard
                                        title={title}
                                        current={current}
                                        change={change}
                                        average={average}
                                        isCompleted={isCompleted}
                                    />
                                )}
                            </>
                        ))}
                    </Flex>
                </Flex>
                </div>
            </ActionButton>
            <Tooltip UNSAFE_style={{ whiteSpace: "normal", wordWrap: "break-word", maxWidth: "250px", textAlign: "center" }}>
                <>
                    <Text style={{ fontSize: "13px", marginBottom:'10px' }}>Perfomance Benchmark for {detailedStage}</Text> <br></br>
                   
                    <Flex direction={'column'} mt='10px' mb='10px' style={{fontWeight:'bold'}}> {totalAverages.map((avg, idx) => (
                        <Text key={idx} style={{ fontSize: "12px" }}>{avg} <br></br></Text>
                    ))}
                    </Flex>
                </>
            </Tooltip>
        </TooltipTrigger>
    );
};
export default CampaignDetailAnalytics;
