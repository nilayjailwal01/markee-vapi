import React, { useEffect, useState } from 'react';
import { Box, Button, Card, DropdownMenu, Flex, Grid, Heading, IconButton, Section, Tabs, Text, } from '@radix-ui/themes';

import PropertiesSVG from '../icons/properties-fill.svg';
import DefaultImageSVG from '../icons/default-image.svg';
import InfoSVG from '../icons/info.svg';
import CopySVG from "../icons/copy.svg"
import EditSVG from "../icons/edit-circle.svg"
import DeleteSVG from "../icons/delete.svg"
import BookMarkSVG from "../icons/bookmark.svg"
import TranslateSVG from "../icons/translate.svg"
import CloseSVG from "../icons/close.svg"
import ChartSVG from "../icons/chart.svg"
import DownloadSVG from "../icons/download.svg"
import ChevronSVG from '../icons/chevron-right.svg';

import { ActionButton, ButtonGroup, Divider,View } from '@adobe/react-spectrum';
import * as Dialog from '@radix-ui/react-dialog';

import { YearViewCalendar } from '../components/ui/year-view-calendar';
import NewsCard from '../components/ui/NewsCard';
import NewsCardPagination, { RenderPagination } from '../components/ui/Pagination';
import Masonry from 'react-masonry-css';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  PaginationState,
  getPaginationRowModel
} from '@tanstack/react-table';
import EmailFilters from '../components/EmailScreen/EmailFilters';
import campaignData, { CampData, CreativeData } from '../components/utilities/campaignData';
import { CreativeCampaign, creativeData } from '../components/utilities/creativeData';
import PieChartComp from '../components/ui/PieChartComp';
import BarChartWithLegend, { BarConfig } from '../components/ui/BarChartComp';
import BarCharWithRadio from '../components/ui/BarChartWithRadio';

import { PieData } from '../components/ui/PieChartComp';
import { Cell, Pie, PieChart } from 'recharts';
import DonutChart from '../components/ui/DonutChart';
import MetricFilters from '../components/EmailScreen/Metrics';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import newCampaignsData,{NewCreativeData} from '../components/utilities/creativesofCampaignData';
import {
  aggregateLocationData, barConfigs, findTopCreatives, prepareChartDataCampaigns,
  prepareChartDataLocations, prepareChartDataCreatives, prepareEngagementChartCreative
} from './CampaignDetail/CampaignDetailAnalytics';
import { ArticlePreview } from '../components/EmailScreen/ArticlePreview';
import DonutWithNeedle from '../components/ui/DonutWithNeedle';
import { Images } from '../components/utilities/helpers';
import { formatCurrency, formatNumber } from '../components/utilities/helpers';


interface Card {
  index: number;
  imageUrl: string;
}

export const cardDataLib: Card[] = Images.map((imageUrl, index) => ({
  index: index + 1,
  imageUrl,
}));

interface BarData {
  name: string;
  Views?: number;
  Clicks?: number;
  PageRedirect?:number;
  CTR?: string;
  ConversionRate?: string;
  MarketSpend?:number;
  TotalSales?: number;
}
const SnapChat: React.FC = () => {

  const [creatives, setCreatives] = React.useState<CreativeDataa[]>([])
  const [filteredData, setFilterData] = React.useState<CampData[]>()
  const [selectedMetrics, setSelectedMetrics] = React.useState();
  const [marketSpendByGeography, setmarketSpendByGeography] = useState<PieData[]>([])
  const [barCharByCreatives, setbarCharByCreatives] = useState<{}[]>([])
  const [barCharByLocation, setbarCharByLocation] = useState<{}[]>([])
  const [barCharByCampaigns, setbarCharByCampaigns] = useState<{}[]>([])
  const [barChartCreativeEngagement, setbarChartCreativeEngagement] = useState<{}[]>([])
  const [barData, setBarData] = useState<{}[]>([])
  const [barConfig, setFilteredBarConfigs] = useState<BarConfig[]>([])

  const [topCreative, setTopCreative] = useState("")

  const updateData = (data: CampData[]) => {
    setFilterData(data)
  }

  const selectedData = (data: any) => {
    setSelectedMetrics(data)
  }

  interface AggregatedData {
    Views?: number[];
    Clicks?: number[];
    PageRedirect?: number[];
    CTR?: number[];
    ConversionRate?: number[];
    MarketSpend?: number[];
    TotalSales?: number[];
  }
  
  type AggregatedDataMap = {
    [month: string]: AggregatedData;
  };
  
  const aggregatedData: AggregatedDataMap = {};
  
  useEffect(() => {
    console.log('filteredData', filteredData)
    console.log('selectedMetrics', selectedMetrics)
    prepareBarData(filteredData?.map(x => x.id) || [], selectedMetrics)
    prepareTableData(filteredData)

  }, [filteredData, selectedMetrics])
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 });
  const [open, setOpen] = useState(false)
  const [isSecondaryTrayOpen, setIsSecondaryTrayOpen] = useState(false);
  const [secondaryTrayType, setSecondaryTrayType] = useState("")
  const [selectedCampaign, setSelectedCampaign] =  React.useState<CampData | null>(null);

  const handleSecondaryTrayOpen = (type: string) => {
    if (secondaryTrayType === type) {
      setSecondaryTrayType("")
      setIsSecondaryTrayOpen(false)
    } else {
      setSecondaryTrayType(type)
      setIsSecondaryTrayOpen(true);
    }
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  const performanceClick = (campaign: CampData) => {
    setOpen(true);
    setIsSecondaryTrayOpen(true);
    setSecondaryTrayType("Performance");
    setSelectedCampaign(campaign);
  };

  const cardData = Array.from({ length: 100 }, (_, index) => index);
  const [paginatedData, setPaginatedData] = useState<Number[]>([])
  const barConfigs = [
    { dataKey: 'Views', fill: '#2196F3' },
    { dataKey: 'Clicks', fill: '#0767b3' },
    { dataKey: 'PageRedirect', fill: '#FF6347' },
    { dataKey: 'CTR', fill: '#6e63d6' },
    { dataKey: 'ConversionRate', fill: '#FFD700' },
    { dataKey: 'MarketSpend', fill: '#4caf50' },
    { dataKey: 'TotalSales', fill: '#dfdf44' }
  ];

  const displayNameMapping = {
    Views: 'Views',
    Clicks: 'Clicks',
    PageRedirect: 'Page Redirects',
    CTR: 'Click-Through Rate',
    ConversionRate: ' Conversion Rate',
    MarektSpend: ' Market Spend',
    TotalSales: ' Total Sales'
  };

  type CreativeDataa = {
    campaignName?: number | undefined;
    activeQuarter?: number | undefined;
    DeliveryRate?: number | undefined | any;
    Views?: number | undefined | any;
    Clicks?: number | undefined | any;
    PageRedirect?: number | undefined | any;
    CTR?: string | undefined | any;
    CPC?: string | undefined | any;
    ConversionRate?: string | undefined | any;
    CPCOnv?: string | undefined | any;

    TotalSales?: string | undefined | any;
    MarketSpend?: number | undefined;

  }

  const calculateTotalReachForEmailChannel = (creativeData: CreativeCampaign[]): number => {
    return creativeData
      .filter(creativeData => creativeData.Channel === 'Snapchat')
      .flatMap(creativeData => creativeData.Creatives)
      .reduce((total, creative) => total + (creative.Reach ?? 0), 0);
  };

  const calculateTotalSalesForEmailChannel = (creativeData: CreativeCampaign[]): number => {
    return creativeData
      .filter(creativeData => creativeData.Channel === 'Snapchat')
      .flatMap(creativeData => creativeData.Creatives)
      .reduce((total, creative) => total + (creative.TotalSales ?? 0), 0);
  };
  useEffect(() => {
    console.log('barData', barData)
  }, [barData])
  const calculateEmailOR = (data: CreativeCampaign[]): number => {
    let emailOR = 0;
    let count = 0;

    data.forEach(campaign => {
      campaign.Creatives.forEach(creative => {
        if (creative.OR !== null && creative.Channel == 'Snapchat') {
          emailOR += creative.OR;
          count++
        }
      });
    });

    return count > 0 ? emailOR : 0;
  };
  const calculateEmailCTR = (data: CreativeCampaign[]): number => {
    let emailCTR = 0;
    let count = 0;

    data.forEach(campaign => {
      campaign.Creatives.forEach(creative => {
        if (creative.CTR !== null && creative.Channel == 'Snapchat') {
          emailCTR += creative.CTR;
          count++;
        }
      });
    });

    return count > 0 ? emailCTR / count: 0;

  };
  const calculateMarketSpend = (data: CreativeCampaign[]): number => {
    let marketSpend = 0;
    let count = 0;

    data.forEach(campaign => {
      campaign.Creatives.forEach(creative => {
        if (creative.MarketSpend !== null && creative.Channel == 'Snapchat') {
          marketSpend += creative.MarketSpend;
          count++;
        }
      });
    });

    return count > 0 ? marketSpend : 0;

  };
  const prepareBarData = (campaignIdsToFilter: any[], selectedMetric: any) => {
    const filteredData = creativeData.filter(campaign => campaignIdsToFilter.includes(campaign.CampaignId) && campaign.Channel === "Snapchat");
    const filteredBarConfigs = barConfigs.filter(config => selectedMetric?.includes(config.dataKey));

    setFilteredBarConfigs(filteredBarConfigs)
    console.log('filteredData', filteredData);

    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const monthIndexMap: Record<string, number> = monthNames.reduce((acc, month, index) => {
      acc[month] = index; // map month name to its index
      return acc;
    }, {} as Record<string, number>);

    const aggregatedData: AggregatedDataMap = {};

    filteredData.forEach(campaign => {
      campaign.Creatives.forEach(creative => {
        const monthNumber = creative.Month;
        const month = monthNames[monthNumber - 1];
        if (!aggregatedData[month]) {
          aggregatedData[month] = {};
        }

        if (selectedMetric === "['Views','Clicks']") {
          if (!aggregatedData[month].Views) {
            aggregatedData[month].Views = [];
          }
          if (creative.Views !== null) {
            aggregatedData[month].Views?.push(creative.Views);


          }
          if (!aggregatedData[month].Clicks) {
            aggregatedData[month].Clicks = [];
          }
          if (creative.Clicks !== null) {
            aggregatedData[month].Clicks?.push(creative.Clicks);


          }
        } 
         else if (selectedMetric === "['CTR','ConversionRate']") {
          if (!aggregatedData[month].CTR) {
            aggregatedData[month].CTR = [];
          }
          if (creative.CTR !== null) {
            aggregatedData[month].CTR?.push(creative.CTR);
          }
          if (!aggregatedData[month].ConversionRate) {
            aggregatedData[month].ConversionRate = [];
          }
          if (creative.ConversionRate !== null) {
            aggregatedData[month].ConversionRate?.push(creative.ConversionRate);
          }
        }
        else if (selectedMetric == "['MarketSpend','TotalSales']") {
          if (!aggregatedData[month].MarketSpend) {
            aggregatedData[month].MarketSpend = [];
          }
          if (creative.MarketSpend !== null) {
            aggregatedData[month].MarketSpend?.push(creative.MarketSpend);
          }
          if (!aggregatedData[month].TotalSales) {
            aggregatedData[month].TotalSales = [];
          }
          if (creative.TotalSales !== null) {
            aggregatedData[month].TotalSales?.push(creative.TotalSales);
          }
        }
        
        
      });
    });
    const barData: BarData[] = Object.entries(aggregatedData).map(([name, values]) => {
      const views = values.Views && values.Views.length > 0 ? values.Views.reduce((a, b) => a + b, 0)  : 0;
      const clicks = values.Clicks && values.Clicks.length > 0 ? values.Clicks.reduce((a, b) => a + b, 0)  : 0;
      const pageRedirects = values.PageRedirect && values.PageRedirect.length > 0 ? values.PageRedirect.reduce((a, b) => a + b, 0)  : 0;
      const avgCTR = values.CTR && values.CTR.length > 0 ? values.CTR.reduce((a, b) => a + b, 0) / values.CTR.length : 0;
      const avgConversionRate = values.ConversionRate && values.ConversionRate.length > 0 ? values.ConversionRate.reduce((a, b) => a + b, 0) / values.ConversionRate.length : 0;
      const marketSpend = values.MarketSpend && values.MarketSpend.length > 0 ? values.MarketSpend.reduce((a, b) => a + b, 0)  : 0;
      const totalSales =values.TotalSales && values.TotalSales.length > 0 ? values.TotalSales.reduce((a, b) => a + b, 0)  : 0;
      


      const result: BarData = { name };
      if (selectedMetric.includes('Views')) {
        result.Views = views;
      }
      if (selectedMetric.includes('Clicks')) {
        result.Clicks = clicks;
      }
      if (selectedMetric.includes('PageRedirect')) {
        result.PageRedirect = pageRedirects;
      }
      
      if (selectedMetric.includes('CTR')) {
        result.CTR = avgCTR.toFixed(1);
      }
      if (selectedMetric.includes('ConversionRate')) {
        result.ConversionRate = avgConversionRate.toFixed(1);
      }
      if (selectedMetric.includes('MarketSpend')) {
        result.MarketSpend = marketSpend;
      }
      if (selectedMetric.includes('TotalSales')) {
        result.TotalSales = totalSales;
      }
      return result;
    });

    console.log(barData, 'bardata')
    barData.sort((a, b) => monthIndexMap[a.name] - monthIndexMap[b.name]);
    setBarData(barData);
  };

  const calculateDaysDifference = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInMillis = end.getTime() - start.getTime();
    const differenceInDays = differenceInMillis / (1000 * 60 * 60 * 24);
    return differenceInDays;
  };

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
  const prepareTableData = (campaigns: any) => {
    console.log('campaignData', campaigns)
    const summarizedData = campaigns?.map((campaign: any) => {
      const metrics = campaign.creatives.reduce((totals: any, creative: any) => {
        if (creative.channel === "Snapchat") {
          totals.Views += creative.Views || 0;
          totals.Clicks += creative.Clicks || 0;
          totals.PageRedirect += creative.PageRedirect || 0;
          totals.CTR += creative.CTR || 0;
          totals.CPC += creative.CPC || 0;
          totals.ConversionRate += creative.ConversionRate || 0;
          totals.CPCOnv += creative.CPCOnv || 0;
          totals.MarketSpend += creative.MarketSpend || 0;
          totals.TotalSales += creative.TotalSales || 0;

        }
        return totals;
      }, {
        Views: 0,
        Clicks: 0,
        PageRedirect: 0,
        CTR: 0,
        CPC: 0,
        ConversionRate: 0,
        CPCOnv: 0,
        MarketSpend: 0,
        TotalSales: 0,
      });

      return {
        campaignName: campaign.campaignName,
        activeQuarter: campaign.activeQuarter,
        DeliveryRate: calculateDaysDifference(campaign.plannedStartDate, campaign.plannedEndDate),
        Views:formatNumber(metrics.Views),
        Clicks: formatNumber(Math.floor(metrics.Clicks)),
        PageRedirect:formatNumber(metrics.PageRedirect),
        Comments: formatNumber(metrics.Comments),
        Shares: formatNumber(metrics.Shares),
        CTR:getRounded(metrics.CTR),
        CPC:`$${getRounded(metrics.CPC)}`,
        ConversionRate: getRounded(metrics.ConversionRate),
        CPCOnv:`$${getRounded(metrics.CPCOnv)}`,
        MarketSpend: formatCurrency(metrics.MarketSpend),
        TotalSales:  formatCurrency(metrics.TotalSales),
      };
    });

    console.log('tabledata', summarizedData)
    _setData(summarizedData ? summarizedData : []);
  };
  const totalReach = formatNumber( calculateTotalReachForEmailChannel(creativeData));
  const totalSales = formatCurrency( calculateTotalSalesForEmailChannel(creativeData))

  const emailCTR = calculateEmailCTR(creativeData);
  const emailOR = calculateEmailOR(creativeData);
  const actualMarketSpend = calculateMarketSpend(creativeData)
  const columnHelper = createColumnHelper<CreativeDataa>();
  const [data, _setData] = useState<CreativeDataa[]>(() => []);

  const columns = [
    columnHelper.accessor('campaignName', { header: () => <div className='flex gap-10'><span>Campaign Name </span></div>, cell: info => info.getValue() }),
    columnHelper.accessor('activeQuarter', { header: () => <div className='flex gap-10'><span>Quarter</span> </div> }),
    columnHelper.accessor('DeliveryRate', { header: () => <div className='flex gap-10'><span>Days in Market</span></div> }),
    columnHelper.accessor('Views', { header: () => <div className='flex gap-10'><span>Views</span></div> }),
    columnHelper.accessor('Clicks', { header: () => <div className='flex gap-10'><span>Clicks</span></div> }),
    columnHelper.accessor('PageRedirect', { header: () => <div className='flex gap-10'><span>Page Redirects</span></div> }),
    columnHelper.accessor('CTR', { header: () => <div className='flex gap-10'><span>CTR</span></div> }),
    columnHelper.accessor('CPC', { header: () => <div className='flex gap-10'><span>CPC</span></div> }),
    columnHelper.accessor('ConversionRate', { header: () => <div className='flex gap-10'><span>Conversion Rate</span></div> }),
    columnHelper.accessor('CPCOnv', { header: () => <div className='flex gap-10'><span>CPCOnv</span></div> }),
    columnHelper.accessor('MarketSpend', { header: () => <div className='flex gap-10'><span>Market Spend</span></div> }),
    columnHelper.accessor('TotalSales', { header: () => <div className='flex gap-10'><span>Total Sales</span></div> }),

  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: { pagination },
  });
  const totalPages = table.getPageCount();
  return (
    <Flex gap="4" wrap="wrap">
      <Flex gap="2" align="center" width="100%">
        <IconButton  className='IconButton'  variant="outline" style={{ border: 0, boxShadow: 'none' }}>
          <img src={PropertiesSVG} width='22' height='22' alt="Properties" />
        </IconButton>
        <Heading as="h3" className='pagehead'>Snapchat</Heading>
      </Flex>

      <Flex width="100%">

        <Box style={{ width: "100%", overflow: "auto" }}>
          <Tabs.Root defaultValue="performance">
            <Tabs.List>
              <Tabs.Trigger value="performance">Performance</Tabs.Trigger>
              {/* <Tabs.Trigger value="calendar">Calendar</Tabs.Trigger> */}
              <Tabs.Trigger value="library">Creatives Library</Tabs.Trigger>
            </Tabs.List>

            <Box pt="3">
              <Tabs.Content value="performance">
                <Flex direction="row" >
                  <Flex direction="column" gap={"2"} style={{ width: '100%' }}>

                  <Flex direction="row" gap="3" align="center" mt='10px' wrap="wrap">
                    <Box className='boxy' >
                        <Flex direction="column" gap="2">
                          <Text weight={'bold'} size='2'>Market Spend Planned vs Actual</Text>
                          <Box style={{height:'150px'}} >
                          <DonutWithNeedle width={200} height={220} max={actualMarketSpend + (actualMarketSpend/4)} actual={actualMarketSpend}   />
                          </Box>
                          </Flex>
                          <Flex direction="row" gap="3" align="center" >
                            <Box width={'50%'} style={{ textAlign: 'left' }}>
                              <Text>QoQ</Text><br></br>
                              <Text size='2' weight={'bold'}>+20%</Text>
                            </Box>
                            <Box width={'50%'} style={{ textAlign: 'right' }}>
                              <Text>YoY</Text><br></br>
                              <Text size='2' weight={'bold'}>+35%</Text>
                            </Box>
                          </Flex>
                          </Box>
                      <Box className='boxy' >
                        <Flex direction="column" gap="2">
                          <Text weight={'bold'} size='2'>Total Reach</Text>
                          <Box className='numbertext' >
                            <Text size="4" weight="bold" style={{ color: '#FF9800' }}>{totalReach}</Text>
                          </Box>

                          <Flex direction="row" gap="3" align="center" >
                            <Box width={'50%'} style={{ textAlign: 'left' }}>
                              <Text>QoQ</Text><br></br>
                              <Text size='2' weight={'bold'}>+15%</Text>
                            </Box>
                            <Box width={'50%'} style={{ textAlign: 'right' }}>
                              <Text>YoY</Text><br></br>
                              <Text size='2' weight={'bold'}>+25%</Text>
                            </Box>
                          </Flex>
                        </Flex>
                      </Box>
                      
                      <Box className='boxy'>
                        <Flex direction="column" gap="2">
                          <Text weight={'bold'} size='2'>Click Rate</Text>

                          <Box style={{ textAlign: "center", width: "100%" }}>
                            <DonutChart progress={emailCTR} total={100}  color={'#6e63d6'} />
                          </Box>
                          <Flex direction="row" gap="3" align="center" >
                            <Box width={'50%'} style={{ textAlign: 'left' }}>
                              <Text>QoQ</Text><br></br>
                              <Text size='2' weight={'bold'}>+7%</Text>
                            </Box>
                            <Box width={'50%'} style={{ textAlign: 'right' }}>
                              <Text>YoY</Text><br></br>
                              <Text size='2' weight={'bold'}>+18%</Text>
                            </Box>
                          </Flex>
                        </Flex>
                      </Box>
                      <Box className='boxy'>
                        <Flex direction="column" gap="2">
                          <Text weight={'bold'} size='2'>Total Sales</Text>
                          <Box className='numbertext' >
                            <Text size="4" weight="bold" style={{ color: '#FF9800' }}>{totalSales}</Text>
                          </Box>
                          <Flex direction="row" gap="3" align="center" >
                            <Box width={'50%'} style={{ textAlign: 'left' }}>
                              <Text>QoQ</Text><br></br>
                              <Text size='2' weight={'bold'}>+22%</Text>
                            </Box>
                            <Box width={'50%'} style={{ textAlign: 'right' }}>
                              <Text>YoY</Text><br></br>
                              <Text size='2' weight={'bold'}>+40%</Text>
                            </Box>
                          </Flex>
                        </Flex>
                      </Box>
                    </Flex>
                    <Card variant="surface" className='card-content' mt='10px' >
                      <Flex direction="row" wrap="wrap" gap={"2"}>
                        <EmailFilters campaignData={campaignData} updateData={updateData} />
                      </Flex>
                      <Flex direction="row" gap={"3"} >

                        <Box width='300px' mt='50px'>
                          <Text size='3' weight={'bold'}>Metrics</Text>
                          <Box mt='20px'>
                            <MetricFilters type={"Snapchat"} campaignData={campaignData} updateData={selectedData} />
                          </Box>
                        </Box>
                        <Box style={{ width: '100%' }}>
                          <BarChartWithLegend
                            data={barData}
                            barConfigs={barConfig}
                            chartTitle=""
                            displayNameMapping={displayNameMapping}
                            width={900}
                            horLegend={true}
                          />
                        </Box>
                      </Flex>
                    </Card>

                    <Flex width="100%" mt='10px'>
                      <Card variant="surface" className='card-content w-100'>
                        <div className="h-2" />
                        <div className="flex items-center gap-2">
                          <Grid columns="3" gap="3" className='flex w-100 p-10 jus-between'>
                            <span className="flex items-center gap-1">
                              <strong>
                                <span> Page </span>
                                {table.getState().pagination.pageIndex + 1} of{' '}
                                {table.getPageCount().toLocaleString()}
                                <span>  total results </span>
                              </strong>
                            </span>
                            <Flex align="center" justify='center' gap="3">
                              <IconButton size="1" variant="soft"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                                style={{ background: 'transparent', color: 'black' }}
                              >
                                <img src={ChevronSVG} width='22' height='22' alt="Previous" style={{ transform: 'rotate(180deg)' }} />
                              </IconButton>
                              <RenderPagination
                                totalPageCount={totalPages}
                                setPageIndex={table.setPageIndex}
                                pageIndex={table.getState().pagination.pageIndex}
                              />
                              <IconButton size="1" variant="soft"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                                style={{ background: 'transparent', color: 'black' }}
                              >
                                <img src={ChevronSVG} width='22' height='22' alt="Next" />
                              </IconButton>
                            </Flex>
                            <div style={{ textAlign: 'right' }}>
                              <strong>
                                Per Page
                                <select
                                  value={table.getState().pagination.pageSize}
                                  onChange={e => table.setPageSize(Number(e.target.value))}
                                  style={{ width: 50 }}
                                >
                                  {[10, 20, 30, 40, 50].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                      {pageSize}
                                    </option>
                                  ))}
                                </select>
                              </strong>
                            </div>
                          </Grid>
                        </div>
                        <Box pt="3">
                          <Flex direction="column">
                            <Box width="100%" style={{ overflow: 'scroll' }}>
                              <table style={{ width: '100%' }}>
                                <thead>
                                  {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                      {headerGroup.headers.map((header, i) => (
                                        <th key={header.id} style={
                                          header.id === 'id' ? { display: 'none' } :
                                            header.id === 'campaigns' ? { width: '40px', textAlign: 'left', padding: '10px' } :
                                              { width: '20px', textAlign: 'left', padding: '10px' }
                                        }>
                                          {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                            )}
                                        </th>
                                      ))}
                                    </tr>
                                  ))}
                                </thead>
                                <tbody>
                                  {table.getRowModel().rows.map(row => (
                                    <tr key={row.id} className='active-row'>
                                      {row.getVisibleCells().map((cell, i) => (
                                        <td key={cell.id} style={cell.id.includes('id') ? { display: 'none' } : { padding: '10px' }}>
                                          {
                                            flexRender(cell.column.columnDef.cell, cell.getContext())
                                          }
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </Box>
                          </Flex>
                        </Box>
                      </Card>
                    </Flex>
                  </Flex>
                </Flex>

              </Tabs.Content>

              <Tabs.Content value="calendar">
                {
                  <YearViewCalendar
                    events={[
                      { title: 'Meeting', start: new Date() }
                    ]}
                    renderEvent={() => <div>test</div>}
                    className=''
                  />}
              </Tabs.Content>

              <Tabs.Content value="library">
                <Box width="100%" style={{ margin: '10px 0', minHeight:'400px' }}>
                  <Box style={{ background: "white", borderRadius: "7px", padding: '20px' }}>
                    <Flex direction="row" wrap="wrap" gap={"2"}>
                      <EmailFilters textSearch={true} campaignData={campaignData} updateData={updateData} />
                    </Flex>
                  </Box>
                  <View UNSAFE_style={{marginTop:'30PX'}}>
                    {/* <NewsCardPagination
                      data={cardData}
                      paginatedData={setPaginatedData}
                    /> */}
                     {filteredData?.filter(campaign =>
                      campaign.status === "Completed" &&
                      campaign.creatives.some(creative => creative.channel === "Snapchat")
                    ).length === 0 && (
                        <Box mt='100px'>
                          <Text weight={'medium'}>No campaigns found</Text>
                        </Box>
                      )}

                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className="my-masonry-grid"
                      columnClassName="my-masonry-grid_column"
                    >
                     {filteredData?.filter(campaign => campaign.status === "Completed" && campaign.creatives.some(creative => creative.channel === "Snapchat")).map((campaign,idx)=>{
                        const creativeGraphic = campaign.creatives.find(creative => creative.channel.includes("Snapchat"))?.CreativeGraphic;
                        const imageUrl = creativeGraphic ? creativeGraphic : 'path/to/default/image.jpg'; 
                        return(
                          <NewsCard
                          key={idx}
                          index={idx}
                          openTray={() => performanceClick(campaign)}
                          imageUrl={imageUrl}
                          campaignName={campaign.campaignName || 'Unnamed Campaign'}
                          description={campaign.description || 'No description available'}
                          status={campaign.status || ''}/>
                        )
                      })}
                    </Masonry>
                  </View>
                </Box>
              </Tabs.Content>
            </Box>
          </Tabs.Root>

          <Dialog.Root open={open}>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Title></Dialog.Title>
              <Dialog.Content className="DialogContent" style={{ width: isSecondaryTrayOpen ? "1000px" : "500px", fontFamily:'adobe-clean' }}>
                <div className='DialogBody'>
                  <div className="secondaryTray" style={isSecondaryTrayOpen ? { display: "block", gridColumn: "span 6 / span 6" } : { display: "none" }}>
                    <div>
                      <div className='flex f-col gap-1'>
                        <div style={{ fontWeight: 700, fontSize: "1.25rem", lineHeight: "1.75rem" }}>
                          {secondaryTrayType} data
                        </div>
                        <div>
                        {secondaryTrayType === "Performance" && selectedCampaign ? (
    selectedCampaign.creatives
        .filter(creative => creative.channel === "Snapchat")
        .map((creative) => {
            const matchingCreative = newCampaignsData.find(data => data.creativeID === creative.CreativeID);
            console.log("match",matchingCreative);
            const analysis = matchingCreative?.Analysis[0]; 
            return (
                <div key={creative.uid} style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '10px', marginBottom: '10px',fontFamily:'adobe-clean'}}>
                    
                    <div style={{ marginTop: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ flex: 1, display: 'flex', gap: '10px' }}>
                                <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold' }}>Creative ID:</span> {creative.CreativeID}
                                </div>
                                <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold' }}>Campaign Name:</span> {selectedCampaign.campaignName}
                                </div>
                                <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold' }}>Campaign Stage:</span> {selectedCampaign.campaignStage}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ flex: 1, display: 'flex', gap: '10px' }}>
                                <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold' }}>Launch Date:</span> {selectedCampaign.plannedStartDate}
                                </div>
                                <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold' }}>End Date:</span> {selectedCampaign.plannedEndDate}
                                </div>
                                <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold' }}>Days in Market:</span> {calculateDaysDifference(selectedCampaign.plannedStartDate, selectedCampaign.plannedEndDate)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ flex: 1, display: 'flex', gap: '10px' }}>
                                <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold' }}>Reach:</span> {formatNumber(creative.Reach)}
                                </div>
                                <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold' }}>CTR:</span> {creative.CTR?.toFixed(1)}
                                </div>
                                <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold' }}>Conversion Rate</span> {  creative.ConversionRate?.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <div style={{ flex: 1, display: 'flex', gap: '10px' }}>
                                <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold' }}>CPC:</span> {creative.CPC?.toFixed(2)}
                                </div>
                                <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold' }}>CPC Convo:</span> {creative.CPCOnv}
                                </div>
                                <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold' }}>Market Spend:</span> {formatCurrency(creative.MarketSpend)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px' }}>
                            <div style={{ flex: '1 1 30%', minWidth: '200px', backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '4px' }}>
                                <span style={{ fontWeight: 'bold' }}>Dominant Color:</span> {analysis?.Dominant_Colors.join(', ') || 'N/A'}
                            </div>
                        <div style={{ flex: '1 1 30%', minWidth: '200px', backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '4px' }}>
                            <span style={{ fontWeight: 'bold' }}>Content Description:</span> {analysis?.Content_Description || 'N/A'}
                        </div>
                        <div style={{ flex: '1 1 30%', minWidth: '200px', backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '4px' }}>
                            <span style={{ fontWeight: 'bold' }}>Contextual Analysis:</span> {analysis?.Contextual_Analysis || 'N/A'}
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <div style={{ marginBottom: '5px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                          <div style={{ flex: 1, display: 'flex', gap: '10px' }}>
                              <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                  <span style={{ fontWeight: 'bold' }}>Heading Size:</span> {matchingCreative?.Heading_Size}
                              </div>
                              <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                  <span style={{ fontWeight: 'bold' }}>Heading Font:</span> {matchingCreative?.Heading_Font}
                              </div>
                              <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                  <span style={{ fontWeight: 'bold' }}>Heading Color:</span> {matchingCreative?.Heading_Color}
                              </div>
                            </div>
                          </div>
                    <div style={{ flex: '1 1 100%', minWidth: '200px', backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '4px' }}>
                      <span style={{ fontWeight: 'bold' }}>Heading Text:</span> {matchingCreative?.Heading_Text}
                    </div>
                  </div>
                  </div>
                  <div style={{ marginTop: '10px' }}>
                  <div style={{ marginBottom: '5px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                          <div style={{ flex: 1, display: 'flex', gap: '10px' }}>
                              <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                  <span style={{ fontWeight: 'bold' }}>Sub Heading Size:</span> {matchingCreative?.Sub_Heading_Size}
                              </div>
                              <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                  <span style={{ fontWeight: 'bold' }}>Sub Heading Font:</span> {matchingCreative?.Sub_Heading_Font}
                              </div>
                              <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                  <span style={{ fontWeight: 'bold' }}>Sub Heading Color:</span> {matchingCreative?.Sub_Heading_Color}
                              </div>
                            </div>
                          </div>
                    <div style={{ flex: '1 1 100%', minWidth: '200px', backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '4px' }}>
                      <span style={{ fontWeight: 'bold' }}>Sub Heading Text:</span> {matchingCreative?.Sub_Heading_Text}
                    </div>
                  </div>
                  </div>
                  <div style={{ marginTop: '10px' }}>
                  <div style={{ marginBottom: '5px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                          <div style={{ flex: 1, display: 'flex', gap: '10px' }}>
                              <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                  <span style={{ fontWeight: 'bold' }}>Body Size:</span> {matchingCreative?.Body_Size}
                              </div>
                              <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                  <span style={{ fontWeight: 'bold' }}>Body Font:</span> {matchingCreative?.Body_Font}
                              </div>
                              <div style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '4px' }}>
                                  <span style={{ fontWeight: 'bold' }}>Body Color:</span> {matchingCreative?.Body_Color}
                              </div>
                            </div>
                          </div>
                    <div style={{ flex: '1 1 100%', minWidth: '200px', backgroundColor: '#e0e0e0', padding: '10px', borderRadius: '4px' }}>
                      <span style={{ fontWeight: 'bold' }}>Body Text:</span> {matchingCreative?.Body_Text}
                    </div>
                  </div>
                  </div>
                </div>
            );
        })
) : (
    <span>No data available</span>
)}
                          {
                            secondaryTrayType === "Assets" && (
                              <span>No Assets</span>
                            )
                          }
                          {
                            secondaryTrayType === "More Info" && (
                              <span> More Info</span>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <Flex direction="column" className="primaryTray" style={isSecondaryTrayOpen ? { gridColumn: "span 6 / span 6" } : { gridColumn: "span 12 / span 12" }}>
                    <div className='DialogActions'>
                     <Flex style={{ gap: ".5rem" }}>
                        {/* <ActionButton UNSAFE_className='actionButton' isQuiet><img src={EditSVG} alt='edit' /></ActionButton>
                        <ActionButton UNSAFE_className='actionButton' isQuiet><img src={CopySVG} alt='copy' /></ActionButton>
                        <ActionButton UNSAFE_className='actionButton' isQuiet><img src={DeleteSVG} alt='delete' /></ActionButton>
                        <ActionButton UNSAFE_className='actionButton' isQuiet><img src={BookMarkSVG} alt='bookmark' /></ActionButton>
                        <ActionButton UNSAFE_className='actionButton' isQuiet><img src={TranslateSVG} alt='translate' /></ActionButton> */}
                      </Flex>
                      <ActionButton UNSAFE_className='actionButton' isQuiet onPress={() => {
                        setOpen(false)
                        setSecondaryTrayType("")
                        setIsSecondaryTrayOpen(false)
                      }}><img src={CloseSVG} alt='close' /></ActionButton>
                    </div>
                    <div className="flex f-col px-1-75">
                       {selectedCampaign && (
                            <>
                             <div style={{ fontWeight: "600", fontSize: "1.25rem", overflowWrap: "break-word", lineHeight: "1.75rem" }}>
                               {selectedCampaign.campaignName || 'Unnamed Campaign'}
                             </div>
                            </>
                             )}
                       </div>
                    {/* <div className='DialogTabs'>
                      <ActionButton isQuiet onPress={() => handleSecondaryTrayOpen("Performance")}>
                        <img src={ChartSVG} alt="performance" height={16} width={16} />
                        Performance
                      </ActionButton>
                      <ActionButton isQuiet onPress={() => handleSecondaryTrayOpen("Assets")}>
                        <img src={DownloadSVG} alt="assets" height={16} width={16} />
                        Assets
                      </ActionButton>
                      <ActionButton isQuiet onPress={() => handleSecondaryTrayOpen("More Info")}>
                        <img src={InfoSVG} alt="more" height={16} width={16} />
                        More Info
                      </ActionButton>
                    </div> */}
                    <div className='DialogPreview'>
                      <div className="flex jus-center">
                        <div className="flex f-col w-330 shrink-0" style={{ maxWidth: "100%" }}>
                          <div className="flex" style={{ border: "solid 1px black", justifyContent: "flex-start" }}>
                          
        {/* Campaign image below the logo */}
        {selectedCampaign && (
          <img 
            src={selectedCampaign.creatives.find(creative => creative.channel === "Snapchat")?.CreativeGraphic} 
            alt={selectedCampaign.campaignName} 
            style={{ width: "100%", height: "auto", borderRadius: "8px", marginTop: "40px" }} 
          />
        )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Flex>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SnapChat;
