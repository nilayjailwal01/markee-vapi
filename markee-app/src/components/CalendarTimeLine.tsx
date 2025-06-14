import React, { useEffect } from 'react';
import { ActionButton, Content, Flex, Header, Tooltip, TooltipTrigger } from '@adobe/react-spectrum';
import campaignData, { CampData } from './utilities/campaignData';
import { View, Grid, Text } from '@adobe/react-spectrum';
import EmailSVG from '../icons/mail-black.svg';
import YoutubeSVG from '../icons/youtube-black.svg';
import FacebookSVG from '../icons/facebook-black.svg';
import SnapchatSVG from '../icons/snapchat.svg';
import TiktokSVG from '../icons/tiktok-thin.svg';
import AppNotificationSVG from '../icons/bell-outline-black.svg';
import { getStatusStyle } from '../screens/Campaigns';
import { useLocation, useNavigate } from 'react-router-dom';
import { PressEvent } from '@react-types/shared';
import CampaignModalForm from './CampaignModelForm';



const getMonthName = (monthIndex: number) => {
  return new Date(0, monthIndex).toLocaleString('default', { month: 'short' });
};

const getMonthDifference = (startDate: Date, endDate: Date) => {
  return (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
};

const getMonthIndex = (date: Date) => {
  return date.getMonth();
};

const currentYear = new Date().getFullYear();

type CHANNELSTYPE = {
  facebook: string,
  email: string,
  snapchat: string,
  youtube: string,
  tiktok: string,
  appnotification: string
}

const CHANNELS: CHANNELSTYPE = {
  facebook: FacebookSVG,
  email: EmailSVG,
  snapchat: SnapchatSVG,
  youtube: YoutubeSVG,
  tiktok: TiktokSVG,
  appnotification: AppNotificationSVG
}

interface MultiDropdownOption {
  value: any;
  label: string;
}

interface CampaignFormData {
  plannedStartDate: any;
  plannedEndDate: any;
  campaignId: any;
}


const CalendarTimeLine: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = React.useState(false)
  const [campaignDataCombined, setCampaignData] = React.useState<CampData[]>([])

  const [formData, setFormData] = React.useState<CampaignFormData>({
    plannedStartDate: null,
    plannedEndDate: null,
    campaignId: null,
  });


  const navigateCampaignDetail = (campaign: any) => {
    navigate(`/campaign/${campaign.id}/${campaign.campaignName.replace(/\s+/g, '-')}`, {
      state: { from: location.pathname },
    });
  };

  const normalizeChannelKey = (key: string): keyof CHANNELSTYPE => {
    return key.replace(/\s+/g, '').toLowerCase() as keyof CHANNELSTYPE;
  };

  interface EventCardProps {
    index: string
    startMonth: number
    spanMonths: number
    campaign?: CampData
  }

  const handlePress = (e: PressEvent, month: number) => {
    const htmlContent = `
    <div style="padding: 8px; border-radius: 8px; background: #62defd; align-items:center; width:100%; height:100%; display:flex; justify-content:center;">
      <div style="display: flex; flex-direction: row; gap: 1rem; color: white;">
        <div style="display: flex; flex-direction: column; justify-content: center; gap: 4px;">
          <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; font-size: 1.2rem; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;">
            (No Title)
          </div>
        </div>
      </div>
    </div>
    `

    e.target.innerHTML = htmlContent
    formData.plannedStartDate = `2024-${String(month).padStart(2, '0')}-01`
    setIsOpen(true)
  };

  const EventCard: React.FC<EventCardProps> = ({ index, startMonth, spanMonths, campaign }) => {
    if (campaign) {
      return (
        <TooltipTrigger>
          <ActionButton
            key={index}
            gridColumnStart={`${startMonth + 1}`}
            gridColumnEnd={`${startMonth + spanMonths + 1}`}
            UNSAFE_style={{ backgroundColor: "#e4e6ef", justifyContent: "flex-start ", cursor: "pointer" }}
            height={65}
            isQuiet
            onPress={() => navigateCampaignDetail(campaign)}
          >
            <View
              key={index}
              padding="size-100"
              borderRadius="medium"
            >
              <Flex direction="row" gap="1rem" UNSAFE_style={{ color: "black" }}>
                <Flex flexShrink={0} position="relative" width="fit-content">
                  <div style={{
                    border: "solid 3px white", width: "15px", height: "15px", background: getStatusStyle(campaign.status || '').color,
                    top: "-8px", right: "-8px", borderRadius: "999px", position: "absolute"
                  }}></div>
                  <div style={{ flexShrink: 0 }}>
                    <img src={campaign.creatives?.[0]?.CreativeGraphic} alt="default pic" style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: ".5rem" }} />
                  </div>
                </Flex>
                <Flex direction="column" justifyContent="center" gap=".25rem">
                  <Text UNSAFE_style={{
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontWeight: 600, fontSize: ".75rem",
                    WebkitBoxOrient: "vertical", WebkitLineClamp: 1, textAlign:"left"
                  }}>
                    {campaign.campaignName}
                  </Text>
                  <Flex direction="row" gap=".25rem">
                    {campaign.channel.map((each: string) => {
                      const normalizedKey = normalizeChannelKey(each);
                      const ChannelIcon = CHANNELS[normalizedKey];
                      return ChannelIcon ? (
                        <img src={ChannelIcon} alt={each} style={{ height: "15px", width: "15px" }} key={each} />
                      ) : null;
                    })}
                  </Flex>
                </Flex>
              </Flex>
            </View>
          </ActionButton>
          <Tooltip placement='right' width="400px">
            <Content>
              <Flex direction="column" gap=".25rem" UNSAFE_style={{ padding: "15px", width: "400px" }}>
                <Text UNSAFE_style={{ fontSize: "1rem", fontWeight: 600 }}>{campaign.campaignName}</Text>
                <Text><strong>Duration: </strong> {campaign.plannedStartDate} - {campaign.plannedEndDate}</Text>
                <Text><strong>KPI: </strong>{campaign.kpi}</Text>
                <Text><strong>Products: </strong>{campaign.products?.join(", ")}</Text>
                <Text><strong>Channels: </strong>{campaign.channel?.join(", ")}</Text>
                <Text><strong>Geography: </strong>{campaign.location?.join(", ")}</Text>
              </Flex>
            </Content>
          </Tooltip>
        </TooltipTrigger>
      );
    } else {
      return (
        <ActionButton
          key={index}
          gridColumnStart={`${startMonth + 1}`}
          gridColumnEnd={`${startMonth + spanMonths + 1}`}
          UNSAFE_style={{ cursor: "pointer" }}
          height={65}
          isQuiet
          onPress={(e) => handlePress(e, startMonth + 1)}
        >
        </ActionButton>
      )
    }
  }

  let startIndex = 0;

  const handleDataChange = (field: string, value: any) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  useEffect(() => {
    let cacheData = localStorage.getItem("savedCampaign")
    if (cacheData) {
      setCampaignData([...campaignData, ...JSON.parse(cacheData)])
    } else {
      setCampaignData(campaignData)
    }
  }, [])

  const onSubmit = () => {
    let cacheData = localStorage.getItem("savedCampaign")
    if (cacheData) {
      cacheData = JSON.parse(cacheData)
      if (Array.isArray(cacheData)) {
        if (cacheData.find((e: CampData) => e.id === formData.campaignId)) {
          let updatedData = cacheData.map((e: CampData) => {
            if (e.id === formData.campaignId) {
              return {
                ...e,
                plannedStartDate: formData.plannedStartDate,
                plannedEndDate: formData.plannedEndDate
              }
            } else {
              return e
            }
          })
          localStorage.setItem("savedCampaign", JSON.stringify(updatedData))
          setCampaignData([...campaignData, ...updatedData])
        }
      }
    }

    console.log(formData)

    if (campaignData.find(e => e.id === formData.campaignId)) {
      let updated = campaignData.map((e) => {
        if (e.id === formData.campaignId) {
          return {
            ...e,
            plannedStartDate: formData.plannedStartDate,
            plannedEndDate: formData.plannedEndDate
          }
        } else {
          return e
        }
      })
      let cacheData = localStorage.getItem("savedCampaign")
      if (cacheData) {
        setCampaignData([...updated, ...JSON.parse(cacheData)])
      } else {
        setCampaignData(updated)
      }
    }
    setIsOpen(false)
  }


  return (
    <>
      <Flex direction="column" gap="1rem">
      <Flex direction="row" gap="1rem" UNSAFE_style={{paddingBottom: '13px',borderBottom: '1px solid #f7f3f9'}}>
          {["In Development", "Testing & Approval", "Pending Launch", "Live Campaign", "Completed"].map((e, idx) => {
            return (
              <Flex direction={"row"} key={idx} alignItems={"center"} justifyContent={"center"} gap={"5px"}>
                <div style={{ width: "10px", height: "10px", borderRadius: "999px", backgroundColor: getStatusStyle(e).color }}></div>
              <Text UNSAFE_style={{fontSize:'12px'}}>{e}</Text>
              </Flex>
            )
          })}
        </Flex>
      <Text UNSAFE_style={{ fontSize: "18PX", fontWeight: 600 }}>2024</Text>
        <Grid
          columns={Array.from({ length: 12 }, (_, i) => `1fr`).join(' ')}
          autoRows="auto"
          gap="size-100"
        >
          {Array.from({ length: 12 }).map((_, monthIndex) => (
            <View key={monthIndex} position="sticky" UNSAFE_style={{ textAlign: 'center' }}>
            <Text UNSAFE_style={{ fontWeight: 'bold',fontSize:'14px' }}>{getMonthName(monthIndex)}</Text>
            </View>
          ))}
          {campaignDataCombined.map((campaign, index) => {
            const startDate = new Date(campaign.plannedStartDate);
            const endDate = new Date(campaign.plannedEndDate);
            const startMonth = getMonthIndex(startDate);
            const spanMonths = getMonthDifference(startDate, endDate);

            let rowEvents = []
            if (startIndex === startMonth) {
              startIndex = startMonth + spanMonths
            } else if (startIndex > startMonth) {
              for (let i = startIndex; i < 12; i++) {
                rowEvents.push(<EventCard index={`empty-${index + i}`} startMonth={i} spanMonths={1} />)
              }
              for (let i = 0; i < startMonth; i++) {
                rowEvents.push(<EventCard index={`empty-${index + i}`} startMonth={i} spanMonths={1} />)
              }
            }
            else {
              for (let i = startIndex; i < startMonth; i++) {
                rowEvents.push(
                  <EventCard index={`empty-${index + i}`} startMonth={i} spanMonths={1} />
                )
              }
            }
            rowEvents.push(
              <EventCard index={`event-${index}`} startMonth={startMonth} spanMonths={spanMonths} campaign={campaign} />
            )
            startIndex = startMonth + spanMonths
            if (startIndex >= 12) {
              startIndex = 0
            }
            return rowEvents

          })}
        </Grid>
      </Flex>
      <CampaignModalForm
        plannedStartDate={formData.plannedStartDate}
        plannedEndDate={formData.plannedEndDate}
        campaignId={formData.campaignId}
        campaigns={campaignDataCombined}
        onChange={handleDataChange}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default CalendarTimeLine;
