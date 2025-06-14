import React, { useEffect, useState } from "react"
import { Flex, Tabs, Box } from "@radix-ui/themes"
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from "@tanstack/react-table"
import { renderSwitch } from "../utilities/tableUtilities";
import { Images, getRandomElement } from "../utilities/helpers";
import campaignData from "../utilities/campaignData";
type Campaign = {
    action: any;
    campaignName: any;
    plannedStartDate: Date;
    channel: any;
    language: any;
    status: any;
    location: any;
};

const columnHelper = createColumnHelper<Campaign>();

const columnHeaders = {
    action: "",
    campaignName: "Campaign",
    language: "Language",
    location: "Geography",
    channel: "Channel",
    plannedStartDate: "Launch Date",
};
const columns = (["action", "campaignName", "language", "location", "channel", "plannedStartDate",] as const).map(column =>
    columnHelper.accessor(column, {
        header: () =>
            column === "action" ? (
                ""
            ) : (
                <div style={{ gap: '10px' }} className="flex" >
                    <span>{columnHeaders[column]}</span>
                </div>
            ),
        id: column,
        cell: info => info.getValue(),
    })
);

interface TableProps {
    status: string,
    campaignStage:string
    
}

const TableData: React.FC<TableProps> = ({ status, campaignStage }) => {
    const [data, setData] = useState<any>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const onCampaignAction = () => {
        console.log("Flex Clicked")
    }

    useEffect(() => {
        const normalizedStatus = status.toLowerCase().replace(/\s+/g, '');
        const normalizedStage = campaignStage.toLowerCase().replace(/\s+/g, '');

        const filteredData = campaignData.filter(campaign => {
            const normalizedCampaignStatus = campaign.status?.toLowerCase().replace(/\s+/g, '');
            const normalizedCampaignStage = campaign.campaignStage?.toLowerCase().replace(/\s+/g, '');
            return  normalizedCampaignStatus === normalizedStatus && normalizedCampaignStage === normalizedStage
        });

        const rows = Array.from(filteredData).map((each, i) => (
            {
                ...each,
                image: getRandomElement(Images)
            }
        ))
        console.log(rows)
        setData(rows);
    }, [status]);

    return (
        <Box height="70vh" overflow="auto" className="w-100 mt-3">
            <table className="w-100">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header, i) => (
                                <th key={header.id} style={{ fontWeight: 400, verticalAlign: "middle", textAlign: 'left' }}>
                                    {status !== "pendingLaunch" ? flexRender(header.column.columnDef.header, header.getContext()) : header.id === "plannedStartDate" ? "Expected Launch Date" : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className='active-row'>
                            {row.getVisibleCells().map((cell, i) => (
                                <td key={cell.id} style={{ padding: '10px 10px 10px 0' }}>
                                    {
                                        renderSwitch(cell, onCampaignAction)
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    )
}

interface HomeCampaignTabsProps {
    campaignStage: string;
}
export const HomeCampaignTabs: React.FC<HomeCampaignTabsProps> = ({ campaignStage }) => {
    const tabs: { [key: string]: string } = {
        liveCampaign: "Live Campaigns",
        pendingLaunch: "Pending Launch",
        inDevelopment: "In Development",
        completed: "Completed Campaigns"
    };
    return (
        <Flex className="f-col h-100 p-2-5 br-75" style={{ position: "relative" }}>
            <Tabs.Root defaultValue="liveCampaign">
                <Tabs.List>
                    {Object.entries(tabs).map(([value, label]) => (
                        <Tabs.Trigger key={value} value={value}>
                            {label}
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>
                <Box pt="0">
                    {Object.keys(tabs).map(label => (
                        <Tabs.Content value={label}>
                            <TableData status={label} campaignStage={campaignStage} />
                        </Tabs.Content>
                    ))}
                </Box>
            </Tabs.Root>
        </Flex>
    )
}