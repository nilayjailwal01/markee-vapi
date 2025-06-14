import { useEffect, useState } from "react"
import {
    CaretDownIcon, CaretUpIcon,
    Cross1Icon,
    Pencil1Icon, PlusIcon, QuestionMarkCircledIcon,
} from "@radix-ui/react-icons"
import { Button, Flex, Text, Tabs, Section, TextArea } from "@radix-ui/themes"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
    ActionButton, AlertDialog, Cell, Checkbox, CheckboxGroup, Column, Content, DatePicker, Dialog, DialogContainer,
    DialogTrigger, Header, Heading, Item, Link, Picker, Radio, RadioGroup, Row, Slider,
    TableBody, TableHeader, TableView, TextField
} from "@adobe/react-spectrum"
import { DateValue } from "@react-types/datepicker";
import campaignData, { CampData } from "../utilities/campaignData"
import { MultiSelect } from "react-multi-select-component"
import campaignOptions from '../../components/utilities/campaignOptions'
import BoldText from "../ui/BoldText"
import { ABTestColumns, RenderTable } from "../utilities/tableUtilities"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getRandomElement } from "../utilities/helpers"
import LineChartComponent from "../ui/BarChartForecasted"
import { LineChartProps, constructLineChartData } from "../../screens/CampaignDetail/CampaignDetailAnalytics"
import ProgressBar from "../utilities/ProgressBar"

const data = [
    { date: '2024-09-01', value: 10 },
    { date: '2024-09-02', value: 15 },
    { date: '2024-09-03', value: 8 },
    { date: '2024-09-04', value: 12 },
    { date: '2024-09-05', value: 20 },
    { date: '2024-09-06', value: 18 },
    { date: '2024-09-07', value: 25 },
];

const DateRangeGraph: React.FC = () => {
    return (
        <ResponsiveContainer width="80%" height={300}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#6e63d6" />
            </LineChart>
        </ResponsiveContainer>
    );
};

interface TestData {
    uid: number;
    testName: string;
    primaryKPI: string;
    secondaryKPI: string;
    confidence: number;
    importance: number;
    status: 'In Development' | 'Live' | 'Completed' | 'Pending Launch';
}

const statuses: Array<'In Development' | 'Live' | 'Completed' | 'Pending Launch'> = [
    'Live',
    'Completed',
    'Pending Launch',
];

const KPIs = ['CTR', 'Conversion Rate'];
const secondaryKPIs = ["OR", "CTR"]
const testNames = ['Engagement', 'Management', 'Points Activity', 'Beach Property', "Hotels"];

const genRandomName = () => {
    return `Test ${Math.floor(Math.random() * 100) + 1} ${getRandomElement(testNames)}`
}

const generateRandomData = (num: number): TestData[] => {
    const data: TestData[] = [];

    for (let i = 0; i < num; i++) {
        const uid = i;
        const testName = genRandomName();
        const primaryKPI = getRandomElement(KPIs);
        const secondaryKPI = getRandomElement(secondaryKPIs);
        const confidence = Math.floor(Math.random() * 5) + 1;
        const importance = Math.floor(Math.random() * 5) + 1;
        const status = getRandomElement(statuses);

        data.push({
            uid,
            testName,
            primaryKPI,
            secondaryKPI,
            confidence,
            importance,
            status
        });
    }

    return data;
};

export default function ABTesting() {
    const [newDialogOpen, setNewDialogOpen] = useState(false)
    const [detailedDialogOpen, setDetailedDialogOpen] = useState(false)
    const [currentTab, setCurrentTab] = useState("Overview")

    const [campaignOpen, setCampaignOpen] = useState(false)
    const [selectedCampaign, setSelectedCampaign] = useState<CampData>()
    const [selectedConfidence, setSelectedConfidence] = useState("")
    const [selectedImportance, setSelectedImportance] = useState("")

    const [testData, setTestData] = useState<TestData[]>(generateRandomData(100));
    const [selectedData, setSelectedData] = useState<TestData | null>(null)

    const [selectedTestCampaign, setSelectedTestCampaign] = useState<CampData>()
    const [textSearch, setTextSearch] = useState("")

    const [selectedMetric, setSelectedMetric] = useState("OR")

    const [lineChartData, setLineChartData] = useState<LineChartProps[]>([])
    const [testName, setTestName] = useState("")

    const onClickTestData = (selected: TestData) => {
        setSelectedTestCampaign(getRandomElement(campaignData.filter(e => e.status?.includes(selected.status))))
        setSelectedData(selected)
        setDetailedDialogOpen(true)
    }

    const getDuration = (plannedStartDate: string, plannedEndDate: string): number => {
        const startDate = new Date(plannedStartDate);
        const endDate = new Date(plannedEndDate);

        // Calculate the difference in milliseconds and convert to days
        const durationInMilliseconds = endDate.getTime() - startDate.getTime();
        const durationInDays = durationInMilliseconds / (1000 * 60 * 60 * 24);

        return durationInDays;
    };

    useEffect(() => {
        if (selectedTestCampaign) {
            setLineChartData(constructLineChartData(selectedTestCampaign))
        }
    }, [selectedTestCampaign])

    return (
        <>
            <Flex direction={"column"} style={{ padding: "20px" }} gap={"10px"}>
                <Flex direction={"row"} align={"center"} style={{ justifyContent: "space-between" }}>
                    <TextField value={textSearch} onChange={setTextSearch} placeholder="Search test name" minWidth={"300px"} />
                    <Button variant='solid' onClick={() => setNewDialogOpen(true)}>
                        <div style={{ borderRadius: "999px", alignItems: "center", justifyContent: "center", height: "15px", width: "15px" }}>
                            <PlusIcon color='white' />
                        </div>
                        Create New Test
                    </Button>
                </Flex>
                <Tabs.Root defaultValue="Live">
                    <Tabs.List style={{ gap: "10px" }}>
                        {statuses.map(e => (
                            <Tabs.Trigger value={e}>
                                {`${e}(${testData.filter(t => t.status === e).length})`}
                            </Tabs.Trigger>
                        ))}
                    </Tabs.List>
                    {statuses.map(e => (
                        <Tabs.Content value={e}>
                            <RenderTable
                                data={testData.filter(t => t.status === e && (textSearch ? t.testName.toLowerCase().includes(textSearch.toLowerCase()) : true))}
                                columns={ABTestColumns}
                                pageSize={10}
                                width={"100%"}
                                showPagination={true}
                                rowAction={(data: any) => onClickTestData(data)}
                            />
                        </Tabs.Content>
                    ))}
                </Tabs.Root>

            </Flex>
            <DialogContainer onDismiss={() => { setNewDialogOpen(false); setDetailedDialogOpen(false) }} type={"fullscreen"} isDismissable>
                {detailedDialogOpen && (
                    <Dialog isDismissable>
                        <Heading>
                            Results
                        </Heading>
                        <Header UNSAFE_style={{ gap: "20px", alignContent: "center" }}>
                            <ProgressBar status={selectedTestCampaign?.status || ""} />
{selectedTestCampaign?.status == 'Pending Launch' && (

                            <DialogTrigger>

                                <ActionButton isQuiet UNSAFE_style={{
                                    backgroundColor: "#3e63dd",
                                    color: "white", fontWeight: "600", cursor: "pointer", alignSelf: "flex-start"
                                }}>
                                    Launch Now 
                                </ActionButton>

                                <AlertDialog
                                    title="Confirmation"
                                    variant="information"
                                    primaryActionLabel="Close"
                                    onPrimaryAction={() => {
                                        setDetailedDialogOpen(false)
                                    }}
                                >
                                    Test Launched Successfully
                                </AlertDialog>
                            </DialogTrigger>
)}

                            <ActionButton isQuiet onPress={() => setDetailedDialogOpen(false)}>
                                <Cross1Icon />
                            </ActionButton>
                        </Header>
                        <Content marginTop={"10px"}>
                            <Flex direction={"column"} gap={"10px"}>
                                <TableView>
                                    <TableHeader>
                                        <Column>Name</Column>
                                        <Column>Primary KPI</Column>
                                        <Column>Secondary KPI</Column>
                                        <Column>Confidence</Column>
                                        <Column>Importance</Column>
                                        <Column>Variations</Column>
                                        <Column>Duration(Days)</Column>
                                        <Column>Start Date</Column>
                                        <Column>End Date</Column>
                                    </TableHeader>
                                    <TableBody>
                                        <Row>
                                            <Cell>{selectedData?.testName}</Cell>
                                            <Cell>{selectedData?.primaryKPI}</Cell>
                                            <Cell>{selectedData?.secondaryKPI}</Cell>
                                            <Cell>{selectedData?.confidence}</Cell>
                                            <Cell>{selectedData?.importance}</Cell>
                                            <Cell>2</Cell>
                                            <Cell>{getDuration(selectedTestCampaign?.plannedStartDate, selectedTestCampaign?.plannedEndDate)}</Cell>
                                            <Cell>{selectedTestCampaign?.plannedStartDate}</Cell>
                                            <Cell>{selectedTestCampaign?.plannedEndDate}</Cell>
                                        </Row>
                                    </TableBody>
                                </TableView>

                                <TableView>
                                    <TableHeader>
                                        <Column>Variations</Column>
                                        <Column>Expected Conversion Rate</Column>
                                        <Column>Improvement</Column>
                                        <Column>Probability to beat Baseline</Column>
                                    </TableHeader>
                                    <TableBody>
                                        <Row>
                                            <Cell>Variation 1</Cell>
                                            <Cell>0.51%</Cell>
                                            <Cell>Baseline</Cell>
                                            <Cell>Baseline</Cell>
                                        </Row>
                                        <Row>
                                            <Cell>Variation 2</Cell>
                                            <Cell>0.30%</Cell>
                                            <Cell><span style={{ color: "red" }}>- 41.34%</span></Cell>
                                            <Cell>4.16%</Cell>
                                        </Row>
                                        <Row>
                                            <Cell>Total</Cell>
                                            <Cell>0.40%</Cell>
                                            <Cell>-</Cell>
                                            <Cell>-</Cell>
                                        </Row>
                                    </TableBody>
                                </TableView>
                                {["Live", "Completed"].includes(selectedData?.status || "") &&
                                    <Flex direction={"row"} gap={"10px"} align={"center"}>
                                        <RadioGroup value={selectedMetric} onChange={(v) => setSelectedMetric(v)}>
                                            <Radio value="OR">OR</Radio>
                                            <Radio value="CTR">CTR</Radio>
                                        </RadioGroup>
                                        <LineChartComponent data={lineChartData} selectedMetric={selectedMetric} isCompleted={selectedTestCampaign?.status === "Completed"} isForecast = {false} />
                                    </Flex>
                                }
                            </Flex>
                        </Content>
                    </Dialog>
                )}
                {newDialogOpen && (
                    <Dialog>
                        <Heading>{`AB Testing`}</Heading>
                        <Header UNSAFE_style={{ gap: "2rem" }}>
                            <DialogTrigger>
                                <ActionButton isQuiet UNSAFE_style={{ backgroundColor: "#3e63dd", color: "white", fontWeight: "600", cursor: "pointer" }}>
                                    Save
                                </ActionButton>
                                <AlertDialog
                                    variant="information"
                                    title="Confirmation"
                                    primaryActionLabel="Close"
                                    onPrimaryAction={() => {
                                        setNewDialogOpen(false)
                                    }}
                                >
                                    Test Information Saved
                                </AlertDialog>
                            </DialogTrigger>
                            <ActionButton isQuiet onPress={() => setNewDialogOpen(false)}>
                                <Cross1Icon />
                            </ActionButton>
                        </Header>
                        <Content marginTop={"10px"} UNSAFE_style={{ overflow: "hidden" }}>
                            <Flex direction={"column"} gap={"1rem"}>
                                <Flex direction={"row"} align={"center"}>
                                    <TextField value={testName} onChange={setTestName} marginEnd={"5px"} />
                                    <Pencil1Icon />
                                </Flex>
                                <Flex direction={"row"} gap={"10px"}>
                                    {/* <Flex direction={"column"} width={"25%"} gap={"20px"} position={"sticky"} top={"10px"}>
                                        <Tabs.Root defaultValue="conf">
                                            <Tabs.List style={{ gap: "15px" }}>
                                                <Tabs.Trigger value="conf">Configuration</Tabs.Trigger>
                                                <Tabs.Trigger value="review" disabled>Review</Tabs.Trigger>
                                                <Tabs.Trigger value="Reports" disabled>Reports</Tabs.Trigger>
                                            </Tabs.List>
                                            <Tabs.Content value="conf">
                                                <Flex direction={"column"} gap={"5px"} className="p-10" overflow={"hidden"}>
                                                    {["Overview", "Variations", "Metrics"].map((e, idx) => (
                                                        <ActionButton onPress={() => {
                                                            setCurrentTab(e);
                                                            // document.getElementById(e)?.scrollIntoView({
                                                            //     behavior: "smooth",
                                                            //     block: "nearest",
                                                            //     inline: "start" 
                                                            // });
                                                        }} key={idx} isQuiet
                                                            UNSAFE_style={{
                                                                alignItems: "center", justifyContent: "space-between", padding: "0 5px",
                                                                background: currentTab === e ? "#c9daf8" : "none"
                                                            }}>
                                                            {e}
                                                            <InfoCircledIcon />
                                                        </ActionButton>
                                                    ))}
                                                </Flex>
                                            </Tabs.Content>
                                        </Tabs.Root>
                                    </Flex> */}
                                    <Flex direction={"column"} width={"100%"} gap={"2rem"} style={{ height: "60vh", overflowY: "auto", paddingLeft: "10px", paddingBottom: "20px", overflowX: "hidden" }}>
                                        <Flex direction={"column"} gap={"15px"} id="Overview">
                                            <Section style={{ flexDirection: "row", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <Flex direction={"row"} gap={"1rem"} align={"center"}>
                                                    <Text style={{ fontWeight: "600", fontSize: "20px" }}>
                                                        Tag Campaign
                                                    </Text>
                                                    <DropdownMenu.Root open={campaignOpen} onOpenChange={setCampaignOpen}>
                                                        <DropdownMenu.Trigger
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                padding: '10px',
                                                                border: '1px solid #ccc',
                                                                borderRadius: '4px',
                                                                backgroundColor: '#f9f9f9',
                                                                cursor: 'pointer',
                                                                fontWeight: 'bold',
                                                                minWidth: "200px",
                                                                justifyContent: "space-between"
                                                            }}
                                                        >
                                                            {selectedCampaign?.campaignName} {campaignOpen ? <CaretUpIcon /> : <CaretDownIcon />}
                                                        </DropdownMenu.Trigger>
                                                        <DropdownMenu.Content
                                                            style={{
                                                                borderRadius: '4px',
                                                                border: '1px solid #ddd',
                                                                backgroundColor: '#fff',
                                                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                                                marginTop: '5px',
                                                                zIndex: 1000,
                                                                minWidth: '150px'
                                                            }}
                                                        >
                                                            {campaignData.map((item, index) => (
                                                                <DropdownMenu.Item
                                                                    key={index}
                                                                    onSelect={() => { setSelectedCampaign(item); setCampaignOpen(false) }}
                                                                    style={{
                                                                        padding: '10px',
                                                                        cursor: 'pointer',
                                                                        fontSize: '14px'
                                                                    }}
                                                                >
                                                                    {item.campaignName}
                                                                </DropdownMenu.Item>
                                                            ))}
                                                        </DropdownMenu.Content>
                                                    </DropdownMenu.Root>
                                                </Flex>
                                                {selectedCampaign && (
                                                    <ProgressBar status={selectedCampaign.status || ""} />
                                                )}
                                            </Section>
                                            <Flex direction={"row"} wrap={"wrap"} gap={"1rem"}>
                                                <Section width={"49%"}>
                                                    <Text>Describe Hypothesis [Required]</Text>
                                                    <TextArea />
                                                </Section>
                                                <Section width={"49%"}>
                                                    <Text>Business Problem [Optional]</Text>
                                                    <TextArea />
                                                </Section>
                                                <Section width={"49%"}>
                                                    <Text>User Problem [Optional]</Text>
                                                    <TextArea />
                                                </Section>
                                                <Section width={"49%"}>
                                                    <Text>Objective [Optional]</Text>
                                                    <TextArea />
                                                </Section>
                                            </Flex>
                                            <Flex direction="row" gap="10px" align={"center"}>
                                                <Flex align="center" justify={"center"} style={{ height: "70px", width: "40%", border: "1px solid gray" }} >
                                                    <Text style={{ fontWeight: "600", fontSize: "20px" }}> Prioritization Score</Text>
                                                </Flex>
                                                <Flex direction={"column"} width={"60%"} gap={"10px"}>
                                                    <MeasuresInput
                                                        label="Confidence"
                                                        value={selectedConfidence}
                                                        onChange={setSelectedConfidence}
                                                    />
                                                    <MeasuresInput
                                                        label="Importance"
                                                        value={selectedImportance}
                                                        onChange={setSelectedImportance}
                                                    />
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                        <Flex direction={"column"} gap={"15px"} id="Variations">
                                            <Flex direction={"row"} gap={"10px"}>
                                                <Variation title="Variation A" />
                                                <Variation title="Variation B" />
                                            </Flex>
                                        </Flex>
                                        <Flex direction={"column"} gap={"15px"} id="Metrics">
                                            <Flex direction={"column"}>
                                                <Text style={{ fontWeight: 600 }}> Metrics </Text>
                                                <Text>Define and track KPIs to get a sharper view of your conversion success. <Link>Learn More</Link> </Text>
                                            </Flex>
                                            <Flex direction={"column"}>
                                                <Text style={{ fontWeight: 600 }}>{`Primary metrics (required)`}</Text>
                                                <Text>Primary Metric is the key performance indicator that directly influences test outcomes and determines decisions and winners</Text>
                                                {/* <ActionButton width={"100%"} UNSAFE_style={{ border: "solid 1px #2c92bf", gap: "5px", height: "40px" }}>
                                                    <div style={{ background: "#2c92bf", borderRadius: "999px", alignItems: "center", justifyContent: "center", height: "15px", width: "15px" }}>
                                                        <PlusIcon color='white' />
                                                    </div>
                                                    Add Primary Metric
                                                </ActionButton> */}
                                                <Picker>
                                                    <Item key={"OR"}>OR</Item>
                                                    <Item key={"CTR"}>CTR</Item>
                                                </Picker>
                                            </Flex>
                                            <Flex direction={"column"}>
                                                <Text style={{ fontWeight: 600 }}>Secondary metrics </Text>
                                                <Text>Supplementary metrics is tracked alongside primary metric to provide additional insights into the perfomance of a campaign and its potential impact on the business.</Text>
                                                {/* <ActionButton width={"100%"} UNSAFE_style={{ border: "solid 1px #2c92bf", gap: "5px", height: "40px" }}>
                                                    <div style={{ background: "#2c92bf", borderRadius: "999px", alignItems: "center", justifyContent: "center", height: "15px", width: "15px" }}>
                                                        <PlusIcon color='white' />
                                                    </div>
                                                    Add Secondary Metric
                                                </ActionButton> */}
                                                <Picker>
                                                    <Item key={"OR"}>OR</Item>
                                                    <Item key={"CTR"}>CTR</Item>
                                                </Picker>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Content>
                    </Dialog>
                )}
            </DialogContainer >
        </>
    )
}

interface MeasuresInputProps {
    label: string
    value: any
    onChange: any
}

const MeasuresInput: React.FC<MeasuresInputProps> = ({ label, value, onChange, }) => {
    return (
        <Flex direction={"column"} gap={"5px"}>
            <Flex direction={"row"} align={"center"} gap={"5px"}>
                <Text>{label}</Text>
                <QuestionMarkCircledIcon />
            </Flex>
            <Flex direction={"row"} style={{ border: "1px solid black", height: "30px" }} width={"70%"}>
                {["1", "2", "3", "4", "5"].map(e => (
                    <Button onClick={() => onChange(e)}
                        style={{ cursor: "pointer", width: "calc(100%/5)", background: value === e ? "#3892e0" : "none" }}
                    >
                        {e}
                    </Button>
                ))}
            </Flex>
        </Flex>
    )
}

interface VariationProps {
    title: string
}

const Variation: React.FC<VariationProps> = ({ title }) => {
    const [selectedChannels, setSelectedChannels] = useState([])
    const [selectedGeographies, setSelectedGeographies] = useState([])

    const [selectedRecency, setSelectedRecency] = useState(0)
    const [selectedFrequency, setSelectedFrequency] = useState(0)
    const [selectedMonetary, setSelectedMonetary] = useState(0)
    const [selectedChurn, setSelectedChurn] = useState(0)
    const [selectedStartDate, setSelectedStartDate] = useState<DateValue | null>(null)
    const [selectedEndDate, setSelectedEndDate] = useState<DateValue | null>(null)

    const [gender, setGender] = useState("")
    const [ageGroup, setAgeGroup] = useState("")
    const [clv, setCLV] = useState("")

    const [creative, setCreative] = useState<string | null>(null)

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCreative(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Flex direction={"column"} className="w-50 p-10" style={{ border: "solid 1px black" }} gap={"5px"}>
            <Text style={{ fontWeight: 600, fontSize: "15px" }}>{title}</Text>
            <TextField placeholder="Describe" width={"100%"} />
            <Flex direction={"row"} className={"w-100"}>
                <Flex direction={"column"} className="w-33">
                    <BoldText>Traffic Split</BoldText>
                    <TextField UNSAFE_className="w-90" />
                </Flex>
                <Flex direction={"column"} className="w-33">
                    <BoldText>Geographies</BoldText>
                    <MultiSelect
                        className="w-90 z-1k"
                        labelledBy="Geographies"
                        value={selectedGeographies}
                        onChange={setSelectedGeographies}
                        options={campaignOptions.Geography.options}
                    />
                </Flex>
                <Flex direction={"column"} className="w-33">
                    <BoldText>Channel</BoldText>
                    <MultiSelect
                        className="w-100 z-1k"
                        labelledBy="Channel"
                        value={selectedChannels}
                        onChange={setSelectedChannels}
                        options={campaignOptions.Channel.options} />
                </Flex>
            </Flex>
            <Flex direction={"column"}>
                <BoldText>CLV</BoldText>
                <CheckboxGroup orientation="horizontal" value={[clv]} onChange={(v) => setCLV(v[1])}>
                    <Checkbox value="high">High Value</Checkbox>
                    <Checkbox value="medium">Medium Value</Checkbox>
                    <Checkbox value="low">Low Value</Checkbox>
                </CheckboxGroup>
            </Flex>
            <Flex direction={"column"}>
                <BoldText>Targeting Details</BoldText>
                <Flex direction={"row"} wrap={"wrap"} gap={"10px"} style={{ marginTop: "5px" }}>
                    <Slider
                        width={"47%"}
                        label={<BoldText>Recency</BoldText>}
                        value={selectedRecency}
                        onChange={setSelectedRecency}
                        trackGradient={["green", "yellow", "red"]}
                    />
                    <Slider
                        width={"47%"}
                        label={<BoldText>Frequency</BoldText>}
                        value={selectedFrequency}
                        onChange={setSelectedFrequency}
                        trackGradient={["green", "yellow", "red"]}
                    />
                    <Slider
                        width={"47%"}
                        label={<BoldText>Monetary</BoldText>}
                        value={selectedMonetary}
                        onChange={setSelectedMonetary}
                        trackGradient={["green", "yellow", "red"]}
                    />
                    <Slider
                        width={"100%"}
                        label={<BoldText>Churn Rate %</BoldText>}
                        value={selectedChurn}
                        onChange={setSelectedChurn}
                    />
                </Flex>
            </Flex>
            <Flex direction={"column"}>
                <BoldText>Age</BoldText>
                <CheckboxGroup orientation="horizontal" flexShrink={0} value={[ageGroup]} onChange={(v) => setAgeGroup(v[1])}>
                    <Checkbox value="<18">{`< 18`}</Checkbox>
                    <Checkbox value="18-25">{`18 - 25`}</Checkbox>
                    <Checkbox value="26-35">{`26 - 35`}</Checkbox>
                    <Checkbox value="36-45">{`36 - 45`}</Checkbox>
                    <Checkbox value="46-55">{`46 - 55`}</Checkbox>
                    <Checkbox value=">55">{`> 55`}</Checkbox>
                </CheckboxGroup>
            </Flex>
            <Flex direction={"column"}>
                <BoldText>Income</BoldText>
                <TextField placeholder="Income" inputMode="numeric" />
            </Flex>
            <Flex direction={"column"}>
                <BoldText>Gender</BoldText>
                <CheckboxGroup orientation="horizontal" value={[gender]} onChange={(v) => setGender(v[1])}>
                    <Checkbox value="male">Male</Checkbox>
                    <Checkbox value="female">Female</Checkbox>
                    <Checkbox value="others">Others</Checkbox>
                    <Checkbox value="unknown">Unknown</Checkbox>
                </CheckboxGroup>
            </Flex>
            <Flex direction={"row"} align={"center"} style={{ justifyContent: "space-evenly" }}>
                <Flex direction={"column"} gap={"10px"}>
                    <input id={`${title}-creativefile`} type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
                    {creative && (
                        <img src={creative} alt="Selected" style={{ maxWidth: '150px', maxHeight: "150px" }} />
                    )}
                    <ActionButton UNSAFE_style={{ padding: "10px", gap: "5px" }} onPress={() => document.getElementById(`${title}-creativefile`)?.click()}>
                        <div style={{ background: "#077907", borderRadius: "999px", alignItems: "center", justifyContent: "center", height: "15px", width: "15px" }}>
                            <PlusIcon color='white' />
                        </div>
                        Upload Creative
                    </ActionButton>
                </Flex>
                <Flex direction={"column"}>
                    <DatePicker label="Start Date" value={selectedStartDate} onChange={setSelectedStartDate} />
                    <DatePicker label="End Date" value={selectedEndDate} onChange={setSelectedEndDate} />
                </Flex>
            </Flex>
        </Flex>
    )
}