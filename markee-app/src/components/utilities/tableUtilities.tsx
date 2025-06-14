import React from "react"
import { Button, Flex } from "@radix-ui/themes"
import { Box, Grid, IconButton, DropdownMenu } from "@radix-ui/themes"
import {
    flexRender,
    useReactTable,
    PaginationState,
    getCoreRowModel,
    createColumnHelper,
    getPaginationRowModel,
} from "@tanstack/react-table"
import { Text, ActionButton, Content, DialogTrigger, Dialog as ASDialog } from '@adobe/react-spectrum';

import { RenderPagination } from "../ui/Pagination"
import DefaultImageSVG from '../../icons/default-image2.svg'
import DotsSVG from '../../icons/three-dots.svg'
import InfoSVG from '../../icons/info.svg';
import EditSVG from '../../icons/edit-circle.svg'
import BookmarkSVG from '../../icons/bookmark.svg'
import ChevronSVG from '../../icons/chevron-right.svg';
import { channel } from "diagnostics_channel";
import { formatNumber } from "./helpers";

export function renderSwitch(param: any, action: any) {
    switch (param.column.id) {
        case 'Ads':
            return (
                <Flex align="center" gap="2" onClick={() => action()}>
                    <div style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#f5f8fa' }}>
                        <img className={"aspect-square bg-[#f5f8fa] object-contain p-[20%]"} src={DefaultImageSVG} alt="" style={{ width: "50px", height: "40px" }} />
                    </div>
                    {flexRender(param.column.columnDef.cell, param.getContext())}
                </Flex>
            );
        case 'campaignName':
            return (
                <Flex minWidth="200px" maxWidth="300px" >
                    <a href={`/campaign/${param.row.original.id}/${param.row.original.campaignName.replace(/\s+/g, '-')}`} className="flex" style={{cursor:'pointer'}}>
                        <Flex className="items-center px-2">
                            <div className="shrink-0 thumb-bg" style={{ borderRadius: '6px' }}>
                                <img className="img-65 br-5" alt="thumbnail" src={param.row.original.creatives?.[0]?.CreativeGraphic || DefaultImageSVG} />
                            </div>
                            <Flex className="f-col ml-4 max-w-350">
                                <span className="fs-1-125 fw-600 pr-1-5 break-words line-clamp ta-left">
                                    {flexRender(param.column.columnDef.cell, param.getContext())}
                                </span>
                            </Flex>
                        </Flex>
                    </a>
                </Flex>
            )
        case 'channel':
            return (
                Array.isArray(param.getValue()) ? (
                    (param.getValue() as string[]).map((channel, index) => (
                        <Button key={index} variant='soft' color='gray' size='1' mr='2px' mb='2px'>
                            {channel}
                        </Button>
                    ))
                ) : null
            )
        case 'location':
            return (
                Array.isArray(param.getValue()) ? (
                    (param.getValue() as string[]).map((geography, index) => (
                        <Button key={index} variant='soft' color="gray" size='1' mr='2px' mb='2px'>
                            {geography}
                        </Button>
                    ))
                ) : null
            )
        case 'language':
            return (
                Array.isArray(param.getValue()) ? (
                    (param.getValue() as string[]).map((language, index) => (
                        <Button key={index} variant='soft' color="gray" size='1' mr='2px' mb='2px' >
                            {language}
                        </Button>
                    ))
                ) : null
            )
        // case 'action':
        //     return (
        //         <div className="pl-1-5">
        //             <DropdownMenu.Root>
        //                 <DropdownMenu.Trigger>
        //                     <button className="IconButton">
        //                         <img src={DotsSVG} width={16} height={16} alt="3dots" />
        //                     </button>
        //                 </DropdownMenu.Trigger>
        //                 <DropdownMenu.Content className="p-10" side="right" align="center">
        //                     <Flex className="f-row gap-1">
        //                         <ActionButton isQuiet UNSAFE_className='actionButton' UNSAFE_style={{ height: "auto", width: "auto" }}>
        //                             <img src={EditSVG} alt='edit' />
        //                             <Text>Edit</Text>
        //                         </ActionButton>
        //                         <ActionButton isQuiet UNSAFE_className='actionButton' UNSAFE_style={{ height: "auto", width: "auto" }}>
        //                             <img src={BookmarkSVG} alt='bookmark' />
        //                             <Text>Bookmark</Text>
        //                         </ActionButton>
        //                     </Flex>
        //                 </DropdownMenu.Content>
        //             </DropdownMenu.Root>
        //         </div>
        //     )
        case 'testName':
            return (
                <Flex onClick={() => action(param.row.original)} style={{ cursor: "pointer" }}>
                    {flexRender(param.column.columnDef.cell, param.getContext())}
                </Flex>
            )
        default:
            return (
                <div style={{ padding: '0px 10px' }}>
                    {flexRender(param.column.columnDef.cell, param.getContext())}</div>)
    }
}


interface TableProps {
    data: any,
    columns: any,
    pageSize: any,
    rowAction?: any | null
    showPagination?: Boolean | true
    width?: any | null
}

export const RenderTable: React.FC<TableProps> = ({ data, columns, pageSize, rowAction, showPagination = true, width = "3000px" }) => {
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: pageSize,
    });

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
        }
    });

    const totalPages = table.getPageCount();
    const totalcount = data.length;

    return (
        <>
            {showPagination && (
                <Grid columns="3" gap="3" className='flex w-100 p-10 jus-between'>
                    <span className="flex items-center gap-1" >
                    <span style={{fontSize:'12px', fontWeight:'500'}}>
                            <span> Page </span>
                            {table.getState().pagination.pageIndex + 1} of{' '}
                            {table.getPageCount().toLocaleString()}
                            <span> - {totalcount} total results </span>
                        </span>
                    </span>
                    <Flex align="center" justify='center' gap="3">
                        <IconButton size="1" variant="soft"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                            style={{ background: 'transparent', color: 'black' }}
                        >
                            <img src={ChevronSVG} width='22' height='22' alt="Properties" style={{ transform: 'rotate(180deg)' }} />
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
                            <img src={ChevronSVG} width='22' height='22' alt="Properties" />
                        </IconButton>
                    </Flex>
                    <div style={{ textAlign: 'right' }}>
                    <span style={{fontSize:'12px', fontWeight:'500'}}>
                            Per Page
                            <select
                                value={table.getState().pagination.pageSize}
                                onChange={e => {
                                    table.setPageSize(Number(e.target.value))
                                }}
                                style={{ width: 50 }}
                            >
                                {[10, 20, 30, 40, 50].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        {pageSize}
                                    </option>
                                ))}
                            </select>
                        </span>
                    </div>
                </Grid>
            )}

            <Box width="100%" style={{ overflow: 'scroll', height: "100%" }}>
                <table style={{ width: width }}>
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header, i) => (
                                    <th key={header.id} className={i === 1 ? 'active-col' : ''} style={
                                        header.id === 'uid' ? { display: 'none' } :
                                            header.id === 'emailAds' ? { width: '40px', textAlign: 'left', padding: '10px' } :
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
                                    <td key={cell.id} className={i === 1 ? 'active-col' : ''} style={cell.id.includes('uid') ? { display: 'none' } : { padding: '10px' }}>
                                        {
                                            renderSwitch(cell, rowAction)
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box>
        </>
    )
}


const getRandomDecimalInRange = (min: number, max: number): string => {
    return (Math.random() * (max - min) + min).toFixed(1);
}

const getRandomNumberInRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomRatioInRange = (min: number, max: number): string => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${randomNum}:1`;
}

export function dataGenerateFn(titleData: Array<String>) {
    let emailData = [];

    for (let i = 1; i <= 100; i++) {
        let email = {
            uid: i,
            Ads: titleData[i - 1] ? titleData[i - 1].trim() : "Back to School " + i,
            type: null,
            ctr: getRandomDecimalInRange(1, 4),
            open_rate: getRandomDecimalInRange(15, 25),
            unsub_rate: getRandomDecimalInRange(0.1, 0.5),
            con_rate: getRandomDecimalInRange(1, 5),
            tsr: getRandomNumberInRange(30, 120),
            ads: getRandomNumberInRange(6, 10),
            tsr_fb: getRandomNumberInRange(10, 30),
            eng_rate: getRandomDecimalInRange(1, 5),
            click_to_open: getRandomDecimalInRange(10, 20),
            ras: getRandomRatioInRange(3, 5),
            arl: getRandomDecimalInRange(5, 15),
            cpv: getRandomDecimalInRange(0.10, 0.30),
            cpm: getRandomDecimalInRange(5, 15),
            vtr: getRandomDecimalInRange(15, 40),
        };

        emailData.push(email);
    }

    let plotData = emailData.map((item: any) => {
        let obj: any = {};
        obj['name'] = item['Ads'];
        obj['ctr'] = item['ctr'];

        return obj;
    });

    return [emailData, plotData]
}

interface EmailAdStatusProps {
    flag?: boolean
}

export const EmailAdStatus: React.FC<EmailAdStatusProps> = ({ flag = true }) => {
    const statuses = [
        {
            color: "rgb(24, 28, 50)",
            text: "In Development"
        },
        {
            color: "rgb(241, 65, 108)",
            text: "Ready for Handoff"
        },
        {
            color: "rgb(255, 199, 0)",
            text: "Ad Set UP"
        },
        {
            color: "rgb(80, 205, 137)",
            text: "Live Campaign"
        },
        {
            color: "rgb(0, 158, 247)",
            text: "Pending Analysis"
        },
        {
            color: "rgb(79, 39, 162)",
            text: "Completed"
        },

    ]
    return (
        <div style={{ gap: ".5rem" }} className='flex f-col'>
            <span style={{ fontWeight: 600 }}> Email Ad Status</span>
            <div style={{ paddingLeft: ".5rem" }}>
                {statuses.map(each => (
                    <div style={{ gap: ".25rem" }} className='flex items-center'>
                        <div style={{
                            backgroundColor: each.color, borderStyle: "solid", borderRadius: "9999px",
                            borderWidth: "4px", width: "20px", height: "20px"
                        }}>
                        </div><span>{each.text}</span>
                    </div>
                ))}
            </div>
            {flag && (
                <i style={{ color: "rgb(156 163 175" }}>Data for Emails are sourced from laa_target.mbl_5_2_campaign_detail_view and lv_marketing_analytics.sau_4_1_campaign_detail_view</i>
            )}
        </div>
    )
}

interface PopOverTextType {
    html: string
}

const PopOverText: React.FC<PopOverTextType> = ({ html }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: html }}>
        </div>
    )
}

const PopOverCTR = () => {
    return (
        <PopOverText html={`
    <b>Click Thru Rate</b>is measured as all clicks on the ad including: Clicks to the associated business Page profile or profile picture, Post reactions (such as likes or loves), Comments or shares, Clicks to expand media (such as photos) to full screen, and Clicks to Like a page.
    <i style={{ color: "rgb(156 163 175" }}>There is a variance of up to 5% due to API table load times.</i>
    `} />
    )
}


interface PopOverContentProps {
    component: React.ReactNode;
}

export const PopOverContent: React.FC<PopOverContentProps> = ({ component }) => {
    return (
        <DialogTrigger type='popover'>
            <ActionButton isQuiet UNSAFE_style={{ justifyContent: "center", margin: "-5px" }}>
                <img src={InfoSVG} alt='info' width='12px' height='15px' />
            </ActionButton>
            <ASDialog>
                {/* <Head>Email Ad Status</Head> */}
                <Content>
                    {component}
                </Content>
            </ASDialog>
        </DialogTrigger>
    )
}

type Person = {
    uid: number
    emailAds: any
    Ads: any
    type: any
    ctr: any
    open_rate: any
    con_rate: any
    tsr: any
    unsub_rate: any
    click_to_open: any
    ras: any
    ads: any
    eng_rate: any
    arl: any
    cpv: any
    cpm: any
    vtr: any
    testName: any
    primaryKPI: any
    secondaryKPI: any
    importance: any
    confidence: any
    variation: any
    expected: any
    improvement: any
    probability: any
    source: any
    reach: any
    cpc: any
    cp_conv: any
    market_spend: any
    kpi: any

}

const columnHelper = createColumnHelper<Person>();

const Columns = [
    columnHelper.accessor('uid', {
        header: () => '',
        id: 'uid',
        cell: info => info.getValue(),
    })
]

export const EmailColums = [
    columnHelper.accessor('Ads', {
        header: () => <div className='flex gap-10'><span>Email Ads</span> <PopOverContent component={<EmailAdStatus />} /></div>,
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('ctr', {
        header: () => <div className='flex gap-10'><span>CTR</span> <PopOverContent component={<PopOverCTR />} /></div>,
        cell: info => info.renderValue() + ' %',
    }),
    ...Columns,
    columnHelper.accessor('open_rate', {
        header: () => <div className='flex gap-10'><span>Open Rate</span></div>,
        cell: info => info.renderValue() + ' %',
    }),
    columnHelper.accessor('tsr', {
        header: () => <div className='flex gap-10'><span>Time Spent Reading</span></div>,
        cell: info => info.renderValue() + 's',
    }),
    columnHelper.accessor('unsub_rate', {
        header: () => <div className='flex gap-10'><span>Unsubscribe Rate</span></div>,
        cell: info => info.renderValue() + ' %',
    }),
    columnHelper.accessor('con_rate', {
        header: () => <div className='flex gap-10'><span>Conversion Rate</span></div>,
        cell: info => info.renderValue() + ' %',
    }),
]

export const FBColumns = [
    columnHelper.accessor('Ads', {
        header: () => <div className='flex gap-10'><span>Facebook Ads</span> <PopOverContent component={<EmailAdStatus />} /></div>,
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('ctr', {
        header: () => <div className='flex gap-10'><span>CTR</span> <PopOverContent component={<PopOverCTR />} /></div>,
        cell: info => info.renderValue() + ' %',
    }),
    columnHelper.accessor('tsr', {
        header: () => <div className='flex gap-10'><span>Time Spent Reading</span></div>,
        cell: info => info.renderValue() + 's',
    }),
    columnHelper.accessor('click_to_open', {
        header: () => <div className='flex gap-10'><span>Click-to-Open Rate</span></div>,
        cell: info => info.renderValue() + '%',
    }),
    columnHelper.accessor('con_rate', {
        header: () => <div className='flex gap-10'><span>Conversion Rate</span></div>,
        cell: info => info.renderValue() + ' %',
    }),
    ...Columns,
    columnHelper.accessor('ads', {
        header: () => <div className='flex gap-10'><span>Ad Relevance Score</span></div>,
        cell: info => info.renderValue() + '/10',
    }),
    columnHelper.accessor('eng_rate', {
        header: () => <div className='flex gap-10'><span>Engagement Rate</span></div>,
        cell: info => info.renderValue() + '%',
    }),
    columnHelper.accessor('ras', {
        header: () => <div className='flex gap-10'><span>Return on Ad Spend</span></div>,
        cell: info => info.renderValue(),
    }),
]

export const YoutubeColumns = [
    columnHelper.accessor('Ads', {
        header: () => <div className='flex gap-10'><span>Youtube Ads</span> <PopOverContent component={<EmailAdStatus />} /></div>,
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('ctr', {
        header: () => <div className='flex gap-10'><span>CTR</span> <PopOverContent component={<PopOverCTR />} /></div>,
        cell: info => info.renderValue() + ' %',
    }),
    // columnHelper.accessor('arl', {
    //     header: () => <div className='flex gap-10'><span>Ad Recall Lift</span></div>,
    //     cell: info => info.renderValue() + '%',
    // }),
    columnHelper.accessor('cpv', {
        header: () => <div className='flex gap-10'><span>Cost Per View</span></div>,
        cell: info => info.renderValue() + '$',
    }),
    columnHelper.accessor('cpm', {
        header: () => <div className='flex gap-10'><span>Cost Per Thousand Impressions (CPM)</span></div>,
        cell: info => info.renderValue() + '$',
    }),
    columnHelper.accessor('vtr', {
        header: () => <div className='flex gap-10'><span>View-through Rate (VTR)</span></div>,
        cell: info => info.renderValue() + '%',
    }),
    columnHelper.accessor('con_rate', {
        header: () => <div className='flex gap-10'><span>Conversion Rate</span></div>,
        cell: info => info.renderValue() + ' %',
    }),
    ...Columns,

]

export const ABTestColumns = [
    ...Columns,
    columnHelper.accessor('testName', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Test Name</span></div>,
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('primaryKPI', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Primary KPI</span></div>,
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('secondaryKPI', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Secondary KPI</span></div>,
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('confidence', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Confidence</span></div>,
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('importance', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Importance</span></div>,
        cell: info => info.renderValue(),
    }),
]

export const DetailedTestColumns = [
    ...Columns,
    columnHelper.accessor('variation', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Variation</span></div>,
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('expected', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Expected <br /> Conversion Rate</span></div>,
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('improvement', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Improvement</span></div>,
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('probability', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Probability to beat baseline</span></div>,
        cell: info => info.renderValue(),
    }),
]

export const AnalyticsColumns = [
    ...Columns,
    columnHelper.accessor('source', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Source</span></div>,
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('reach', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Reach</span></div>,
        cell: info => `${formatNumber(info.renderValue())}` ,
    }),
    columnHelper.accessor('ctr', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>CTR</span></div>,
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('cpc', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>CPC</span></div>,
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('con_rate', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Conversion Rate</span></div>,
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('cp_conv', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>CPConv</span></div>,
        cell: info => info.renderValue(),
    }),
    columnHelper.accessor('market_spend', {
        header: () => <div className='flex gap-10' style={{ alignSelf: "flex-start" }}><span>Market Spend</span></div>,
        cell: info => info.renderValue(),
    }),
]