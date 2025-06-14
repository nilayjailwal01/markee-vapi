import { useEffect, useState } from "react";
import { Box, Flex, Radio, RadioGroup, Text } from "@radix-ui/themes";
import PieChartComp from "../ui/PieChartComp";
import campaignData, { CampData } from '../../components/utilities/campaignData';
import { formatCurrency } from "../utilities/helpers";

interface HomeUpdatesProps {
  campaignStage: string;
  filteredOptions: any;
}

interface PieData {
  name: string;
  value: number;
  color?: string; // Make color optional
}

const channelColors: { [key: string]: string } = {
  "Facebook": "#047adb",
  "Youtube": "#f72f34",
  "Snapchat": "#ffc502",
  "Email": "#ff7b00",
  "App Notifications": "#07eeae"
};

export const HomeUpdates = ({ campaignStage, filteredOptions }: HomeUpdatesProps) => {
  const [selectedRadioValue, setSelectedRadioValue] = useState<string>("1");
  const [campaignData2, _setData] = useState<CampData[]>(() => [...campaignData]);

  useEffect(() => {
    setSelectedRadioValue("1");
  }, [campaignStage]);

  useEffect(() => {
    filterData(filteredOptions);
  }, [filteredOptions]);


  const filterData = (currentFilters: any) => {
    let filteredData = [...campaignData];
    console.log('wholedata', filteredData)


    if (currentFilters?.products?.length) {
      filteredData = filteredData.filter(campaign =>
        currentFilters.products.some((product: any) => campaign.products?.includes(product.label))
      );
    }
    if (currentFilters?.languages?.length) {
      filteredData = filteredData.filter(campaign =>
        currentFilters.languages.some((language: any) => campaign.language?.includes(language.label))
      );
    }

    if (currentFilters?.geography?.length) {
      filteredData = filteredData.filter(campaign =>
        currentFilters.geography.some((location: any) => campaign.location?.includes(location.label))
      );
    }

    _setData(filteredData);

  };

  useEffect(() => {
    preparePieChartData1()
    preparePieChartData2()

  }, [campaignData2]);

  const preparePieChartData1 = (): PieData[] => {
    let filteredData = campaignData2.filter((campaign: any) => campaign.campaignStage === campaignStage);

    // Filter data based on selected radio value
    const fixedCurrentDate = new Date(2024, 7, 20); 

    switch (selectedRadioValue) {
      case "1":
        const yearStart = new Date(fixedCurrentDate.getFullYear(), 0, 1);
        filteredData = filteredData.filter((campaign: any) => new Date(campaign.plannedStartDate) >= yearStart);
        break;
      case "2":
        const startQuarter = new Date(fixedCurrentDate.getFullYear(), fixedCurrentDate.getMonth() - 2, 1);
        filteredData = filteredData.filter((campaign: any) => new Date(campaign.plannedStartDate) >= startQuarter);
        break;
      case "3":
        const currentMonthStart = new Date(fixedCurrentDate.getFullYear(), fixedCurrentDate.getMonth(), 1);
        filteredData = filteredData.filter((campaign: any) => new Date(campaign.plannedStartDate) >= currentMonthStart);
        break;
      default:
        break;
    }

    const spendByChannel: { [key: string]: number } = {};

    filteredData.forEach((campaign: any) => {
      campaign.channel.forEach((ch: any) => {
        if (campaign.totalMarketSpend != null) {
          spendByChannel[ch] = (spendByChannel[ch] || 0) + campaign.totalMarketSpend;
        }
      });
    });

    return Object.keys(spendByChannel).map(channel => ({
      name: channel,
      value: spendByChannel[channel],
      color: channelColors[channel] || '' // Assign color based on the mapping
    }));
  };

  const preparePieChartData2 = (): PieData[] => {
    let filteredData = campaignData2.filter((campaign: any) => campaign.campaignStage === campaignStage);

    // Filter data based on selected radio value
    const fixedCurrentDate = new Date(2024, 7, 20);

    switch (selectedRadioValue) {
      case "1":
        const yearStart = new Date(fixedCurrentDate.getFullYear(), 0, 1);
        filteredData = filteredData.filter((campaign: any) => new Date(campaign.plannedStartDate) >= yearStart);
        break;
      case "2":
        const startQuarter = new Date(fixedCurrentDate.getFullYear(), fixedCurrentDate.getMonth() - 2, 1);
        filteredData = filteredData.filter((campaign: any) => new Date(campaign.plannedStartDate) >= startQuarter);
        break;
      case "3":
        const currentMonthStart = new Date(fixedCurrentDate.getFullYear(), fixedCurrentDate.getMonth(), 1);
        filteredData = filteredData.filter((campaign: any) => new Date(campaign.plannedStartDate) >= currentMonthStart);
        break;
      default:
        break;
    }


    const channelCounts: { [key: string]: number } = {};

    filteredData.forEach((campaign: any) => {
      campaign.channel.forEach((ch: any) => {
        channelCounts[ch] = (channelCounts[ch] || 0) + 1;
      });
    });

    return Object.keys(channelCounts).map(channel => ({
      name: channel,
      value: channelCounts[channel],
      color: channelColors[channel] || '' // Assign color based on the mapping
    }));
  };
  const pieChartData1: PieData[] = preparePieChartData1();
  const pieChartData2: PieData[] = preparePieChartData2();
  console.log(pieChartData2)

  const totalMarketingSpend = pieChartData1.reduce((acc, data) => acc + data.value, 0);
  const totalCampaignsLaunched = pieChartData2.reduce((acc, data) => acc + data.value, 0);

  const handleRadioChange = (value: string) => {
    setSelectedRadioValue(value);
  };

  return (
    <Flex direction="column" position="relative" height="100%" style={{ padding: "20px", borderRadius: ".75rem", alignItems: "flex-start" }}>
      <RadioGroup.Root value={selectedRadioValue} onValueChange={handleRadioChange} name="example" orientation="horizontal" style={{ display: "flex", width: "100%", flexDirection: "row", gap: "10px" }} className="homeradio">
        <RadioGroup.Item value="1">Year to Date</RadioGroup.Item>
        <RadioGroup.Item value="2">Quarter to Date</RadioGroup.Item>
        <RadioGroup.Item value="3">Current Month</RadioGroup.Item>
      </RadioGroup.Root>
      <Flex direction="row" gap="20px" style={{ width: "100%", paddingTop: "30px" }}>
        <Box style={{ flex: "1", textAlign: "left" }}>
          <Text as="div" weight="medium" style={{ paddingBottom: "10px" }}>
            Total Marketing Spend : {formatCurrency(totalMarketingSpend)}
          </Text>
          <Box style={{ textAlign: "center", width: "100%" }}>
            <PieChartComp chartSize={150} chartContainerSize={300} data={pieChartData1} />
          </Box>
        </Box>
        <Box style={{ flex: "1", textAlign: "left" }}>
          <Text as="div" weight="medium" style={{ paddingBottom: "10px" }}>
            Total Campaigns Launched : {totalCampaignsLaunched}
          </Text>
          <Box style={{ textAlign: "center", width: "100%" }}>
            <PieChartComp chartSize={150} chartContainerSize={300} data={pieChartData2} displayCount={true} />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};
