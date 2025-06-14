import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Flex, Grid, Heading, IconButton, Section, Text, TextArea, TextField } from '@radix-ui/themes';
import PropertiesSVG from '../icons/properties-fill.svg';
import ChevronSVG from '../icons/chevron-right.svg';
import DefaultImageSVG from '../icons/default-image2.svg';
import ThreeDots from '../icons/three-dots.svg';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import campaignOptions from '../components/utilities/campaignOptions';
import campaignData, { CampData } from '../components/utilities/campaignData';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  PaginationState,
  getPaginationRowModel
} from '@tanstack/react-table';
import { Link, useNavigate } from 'react-router-dom';
import { MultiSelect } from 'react-multi-select-component';
import { RenderPagination } from '../components/ui/Pagination';
import { ActionButton, DatePicker } from '@adobe/react-spectrum';
import { DateValue } from "@react-types/datepicker";

const statuses = [
  { color: "#64748b", text: "In Development" },
  { color: "#f1416c", text: "Testing & Approval" },
  { color: "#f1416c", text: "Ready for Handoff" },
  { color: "#f59e0b", text: "Ad Set UP" },
  { color: "#4caf50", text: "Live Campaign" },
  { color: "#60a5fa", text: "Pending Launch" },
  { color: "#a378ff", text: "Completed" },
  { color: "#FF0000", text: "Testing & Approval" },
];

export const getStatusStyle = (statusText: string): React.CSSProperties => {
  const status = statuses.find(s => s.text === statusText);
  return status ? { color: status.color, fontWeight: 'bold', background: `${status.color}20` } : {};
};

const columnHelper = createColumnHelper<CampData>();
const columns = [
  columnHelper.accessor('id', { header: () => '', id: 'id', cell: info => info.getValue() }),
  columnHelper.accessor('campaignName', { header: () => <div className='flex gap-10'><span>Campaigns</span></div>, cell: info => info.getValue() }),
  columnHelper.accessor('status', { header: () => <div className='flex gap-10'><span>Status</span> </div> }),
  columnHelper.accessor('campaignStage', { header: () => <div className='flex gap-10'><span>Campaign Stage</span></div> }),
  columnHelper.accessor('language', { header: () => <div className='flex gap-10'><span>Language</span> </div> }),
  columnHelper.accessor('plannedStartDate', { header: () => <div className='flex gap-10'><span>Launch Date</span></div> }),
];

const Campaign: React.FC = () => {
  const [data, _setData] = useState<CampData[]>(() => [...campaignData]);
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 });
  const [selectedType, setSelectedType] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState<DateValue | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<DateValue | null>(null);
  const [open, setOpen] = useState(false);
  const [localData, _setLocalData] = useState<CampData[]>(() => []);
  const [searchTerm, setSearchTerm] = useState('');
  const initialFilters = {
    status: [],
    type: [],
    products: [],
    languages: [],
    location: [],
    channel: [],
    startDate: null,
    endDate: null,
    searchTerm: '',
  };
  const [filters, setFilters] = useState(initialFilters);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: { pagination },
  });

  const navigate = useNavigate();

  const handleClick = (param: any) => {
    navigate(`/campaign/${param}`, { state: { value: param } });
  };

  useEffect(() => {
    const newCampaignData = localStorage.getItem('savedCampaign');
    if (newCampaignData) {
      try {
        const parsedData = JSON.parse(newCampaignData);
        if (Array.isArray(parsedData)) {
          const reversedData = parsedData.reverse();
          const newData = reversedData.filter((item: CampData) => !data.some(existing => existing.id === item.id));
          if (newData.length > 0) {
            _setLocalData([...newData])
            _setData(prevData => [...newData, ...prevData]);
          }
        } else {
          console.error('Data retrieved from localStorage is not an array:', parsedData);
        }
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
      }
    }
  }, []);


  const totalPages = table.getPageCount();
  const totalcount = data.length;

  const convertDateValueToString = (dateValue: any) => {
    if (!dateValue) return null;

    const { year, month, day } = dateValue;
    return new Date(year, month - 1, day).toISOString().split('T')[0];
  };

  const filterData = (currentFilters:any) => {
    let filteredData = [...localData, ...campaignData];
    console.log('wholedata', filteredData)
    const startDateString = convertDateValueToString(filters.startDate);
    const endDateString = convertDateValueToString(filters.endDate);

    
    if (currentFilters.status.length) {
      filteredData = filteredData.filter(campaign =>
        currentFilters.status.some((status: any) => campaign.status === status.label)
      );
    }

    if (currentFilters.type.length) {
      filteredData = filteredData.filter(campaign =>
        currentFilters.type.some((status: any) => campaign.campaignStage === status.label)
      );
    }
   
    if (currentFilters.products.length) {
      filteredData = filteredData.filter(campaign =>
        currentFilters.products.some((product: any) => campaign.products?.includes(product.label))
      );
    }
    if (currentFilters.languages.length) {
      filteredData = filteredData.filter(campaign =>
        currentFilters.languages.some((language: any) => campaign.language?.includes(language.label))
      );
    }

    if (currentFilters.location.length) {
      filteredData = filteredData.filter(campaign =>
        currentFilters.location.some((location: any) => campaign.location?.includes(location.label))
      );
    }

    if (currentFilters.channel.length) {
      filteredData = filteredData.filter(campaign =>
        currentFilters.channel.some((channel: any) => campaign.channel?.includes(channel.label))
      );
    }
    
  if (currentFilters.startDate && startDateString) {
    filteredData = filteredData.filter(campaign =>
      campaign.plannedStartDate >= startDateString
    );
  }

  // Filter by end date
  if (currentFilters.endDate && endDateString) {
    filteredData = filteredData.filter(campaign =>
    campaign.plannedStartDate <= endDateString
    );
  }

    if (currentFilters.searchTerm) {
      filteredData = filteredData.filter(campaign =>
        campaign.campaignName?.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }
    _setData(filteredData);

  };

  const handleFilterChange = (filterType: string, value: any) => {
    setFilters(prev => {
      const newFilters = { ...prev, [filterType]: value };
      filterData(newFilters); // Re-filter whenever any filter changes
      return newFilters;
    });
  };

  const handleResetFilters = () => {
    setFilters(initialFilters); 
    _setData([...localData, ...campaignData]);
  };
  


  return (
    <Flex direction="column" gap="4">
      <Flex gap="2" align="center" width="100%">
        <IconButton className='IconButton' variant="outline" style={{ border: 0, boxShadow: 'none' }}>
          <img src={PropertiesSVG} width='22' height='22' alt="Properties" />
        </IconButton>
        <Heading as="h3" className='pagehead'>Campaigns</Heading>
      </Flex>
      <Flex gap="2" wrap="wrap" direction="column">
           <Box className='card-content2'>
        <Flex direction="row" gap="0" align="end" justify="start" wrap="wrap">
          <Section className='py-2 mr-15 ta-left'>
          <Text style={{ fontSize: "12px", fontWeight:'500' }}>Search</Text>

            <TextField.Root className='searchCamp' style={{ width: '200px' , marginTop:'4px'}} placeholder="Search Campaigns..." value={filters.searchTerm}
              onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
              >
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>

          </Section>
          <Section className='py-2 mr-15 top-filter' >
            <DatePicker label="Start Date" value={filters.startDate} onChange={(value) => handleFilterChange('startDate', value)} />
          </Section>
          <Section className='py-2 mr-15 top-filter'>
            <DatePicker label="End Date" value={filters.endDate} onChange={(value) => handleFilterChange('endDate', value)} />
          </Section>
          <Section className="py-2 mr-15 ta-left min-w-200">
            <Text style={{ fontSize: "12px" ,fontWeight:'500' }}>Status</Text>
            <MultiSelect
              labelledBy='Status'
              value={filters.status} 
              onChange={(value:any) => handleFilterChange('status', value)}
              options={campaignOptions.Status.options}
            />
          </Section>
          <Section className="py-2 mr-15 ta-left min-w-200">
            <Text style={{ fontSize: "12px", fontWeight:'500'  }}>Campaign Stage</Text>
            <MultiSelect
              labelledBy='Campaign Stage'
              value={filters.type} 
              onChange={(value:any) => handleFilterChange('type', value)}
              options={campaignOptions.Type.options}
            />
          </Section>
          <Section className="py-2 mr-15 ta-left min-w-200">
            <Text style={{ fontSize: "12px", fontWeight:'500'  }}>Products</Text>
            <MultiSelect
              labelledBy='Products'
              value={filters.products} 
              onChange={(value:any) => handleFilterChange('products', value)}
              options={campaignOptions.Products.options}
            />
          </Section>

          <Section className="py-2 mr-15 ta-left min-w-200">
            <Text style={{ fontSize: "12px", fontWeight:'500'  }}>Languages</Text>
            <MultiSelect
              labelledBy='Languages'
              value={filters.languages} 
              onChange={(value:any) => handleFilterChange('languages', value)}

              options={campaignOptions.Languages.options}
            />
          </Section>
          <Section className="py-2 mr-15 ta-left min-w-200">
            <Text style={{ fontSize: "12px", fontWeight:'500'  }}>Geography</Text>
            <MultiSelect
              labelledBy='Geography'
              value={filters.location} 
              onChange={(value:any) => handleFilterChange('location', value)}

              options={campaignOptions.Geography.options}
            />
          </Section>
          <Section className="py-2 mr-15 ta-left min-w-200">
            <Text style={{ fontSize: "12px", fontWeight:'500'  }}>Channel</Text>
            <MultiSelect
              labelledBy='Channel'
              value={filters.channel} 
              onChange={(value:any) => handleFilterChange('channel', value)}
              options={campaignOptions.Channel.options}
            />
          </Section>
          <Section className='py-2 mr-15' style={{ marginTop: "10px" }}>
          <Button variant='solid' onClick={handleResetFilters}>Reset </Button>
           
          </Section>
        </Flex>
</Box>
        <Flex width="100%" mt='10px'>
          <Card variant="surface" className='card-content w-100'>
            <div className="h-2" />
            <div className="flex items-center gap-2">
              <Grid columns="3" gap="3" className='flex w-100 p-10 jus-between'>
                <span className="flex items-center gap-1">
                <span style={{fontSize:'12px',fontWeight:'500'}}>
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
                <span style={{fontSize:'12px',fontWeight:'500'}}>
                    Per Page
                    <select
                      value={table.getState().pagination.pageSize}
                      onChange={e => table.setPageSize(Number(e.target.value))}
                      style={{ width: 50, background:'transparent' }}
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
                                cell.id.includes('campaignName') ?
                                  <Flex align="center" gap="2" onClick={() => setOpen(true)}>
                                    {/* <IconButton className='IconButton' variant='soft' style={{ background: 'transparent' }} >
                                      <img src={ThreeDots} width='16' height='16' alt="Properties" />
                                    </IconButton> */}
                                    <div className='theme-bg'>
                                      <img className={"aspect-square bg-[#f5f8fa] object-contain p-[20%]"} src={row.original.creatives?.[0]?.CreativeGraphic || DefaultImageSVG} alt="no image" style={{ minWidth: '70px', width: "70px", height: "60px", borderRadius: '5px' }} />
                                    </div>
                                    {row.original.isCreated ? (
                                      <Heading onClick={() => handleClick(row.original.id)} size="2" style={{cursor:'pointer'}}>
                                        {flexRender(row.original.campaignName, cell.getContext())}
                                      </Heading>
                                    ) : (
                                      <Link
                                        to={{
                                          pathname: `/campaign/${row.original.id}/${row.original.campaignName?.replace(/\s+/g, '-')}`,
                                        }}
                                      >
                                        <Heading size="2">
                                          {flexRender(row.original.campaignName, cell.getContext())}
                                        </Heading>
                                      </Link>
                                    )}
                                  </Flex>
                                  : cell.id.includes('language') ?

                                    Array.isArray(cell.getValue()) ? (
                                      (cell.getValue() as string[]).map((language, index) => (
                                        <Button key={index} variant='soft' color='gray' size='1' mr='2px' mb='2px'>
                                          {language}
                                        </Button>
                                      ))
                                    ) : null
                                    :
                                    cell.column.id === 'status' ?
                                      <Button style={getStatusStyle(cell.getValue() as string)}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                      </Button>
                                      :
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
  );
};

export default Campaign;
