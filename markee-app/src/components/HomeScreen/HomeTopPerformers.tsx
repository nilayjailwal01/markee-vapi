import { useEffect, useState } from "react";
import { Box, Card, Tabs, Flex } from "@radix-ui/themes";
import * as Dialog from '@radix-ui/react-dialog';
import { Tabs as STabs, Item, TabList, TabPanels, ActionButton } from "@adobe/react-spectrum";
import { EmailColums, FBColumns, YoutubeColumns, dataGenerateFn, RenderTable } from "../utilities/tableUtilities";

import { ArticlePreview } from "../EmailScreen/ArticlePreview";

import InfoSVG from '../../icons/info.svg';
import CopySVG from "../../icons/copy.svg"
import EditSVG from "../../icons/edit-circle.svg"
import DeleteSVG from "../../icons/delete.svg"
import BookMarkSVG from "../../icons/bookmark.svg"
import TranslateSVG from "../../icons/translate.svg"
import CloseSVG from "../../icons/close.svg"
import ChartSVG from "../../icons/chart.svg"
import DownloadSVG from "../../icons/download.svg"


const EmailTitles = [
    "Discover Unmatched Luxury at Our New Resort – Book Now and Save 20%!",
    "Experience Paradise: Limited Time Offer – Get a Free Night When You Book Three!",
    "Unveil the Perfect Getaway with Exclusive Preview & Early Bird Discounts!",
    "Join Our VIP Club for Exclusive Deals and Resort Upgrades!",
    "Elevate Your Stay: Book Today and Enjoy Complimentary Spa Services!",
    "Be the First to Explore Our Renovated Hotel – Special Rates Inside!",
    "Your Dream Vacation Awaits – Last Minute Deals Available Now!",
    "Unlock the Hidden Gems of Our Boutique Hotel – Membership Perks Inside!",
    "Luxury Redefined: Welcome to Our Prestigious New Hotel – Special Introductory Offers!",
    "Stay Connected: Exclusive Insider Tips and Offers on Your Next Stay!"
];
const FacebookTitles = [
  "Discover Luxury Like Never Before at Our New Resort!",
  "Unveil the Perfect Getaway – Book Now and Save Big!",
  "Exclusive Preview: Explore Our Newly Renovated Hotel!",
  "Your Dream Vacation Awaits – Limited Time Offers Inside!",
  "Join Our VIP Club for Exclusive Deals and Upgrades!",
  "Experience Paradise: Special Rates on Early Bookings!",
  "Unlock Hidden Gems: Discover Our Boutique Hotel!",
  "Last Minute Deal: Enjoy Exclusive Discounts Today!",
  "Luxury Redefined: Welcome to Our Prestigious New Hotel!",
  "Stay Connected: Get Insider Tips and Special Offers!"
];
const YoutubeTitles = [
  "Discover Unmatched Luxury at Our New Resort – Virtual Tour",
  "Top 10 Reasons to Book Your Stay Now – Exclusive Preview",
  "Explore Our Newly Renovated Hotel – Your Perfect Getaway",
  "Dream Vacation Awaits – Book Now and Save Big!",
  "Join Our VIP Club – Exclusive Deals and Resort Upgrades",
  "Paradise Found: Special Rates on Early Bookings",
  "Boutique Hotel Secrets: Discover Hidden Gems",
  "Last Minute Travel Deals – Don't Miss Out!",
  "Luxury Redefined: Welcome to Our Prestigious New Hotel",
  "Insider Tips for Your Next Stay – Exclusive Offers Inside"
];

export const HomeTopPerformers = () => {
    const [data, setData] = useState<any | null>([]);
    const [subMenu, setSubMenu] = useState<String>('facebook');

    useEffect(() => {
        const [emailData, plotData] = dataGenerateFn(subMenu === 'facebook' ? FacebookTitles : subMenu === 'youtube' ? YoutubeTitles : EmailTitles);
        setData(emailData);
    }, [subMenu]);

    const masterTabs = [
        {
            value: "topPerformer",
            label: "Top Performing Creatives",
            subContent: "Ranked by engagement, excluding those launched 14 days ago and newer"
        },
        {
            value: "newLaunch",
            label: "Newly Launched Creatives",
            subContent: "Recently launched creatives sorted by launch date"
        }
    ];

    const verticalTabs = {
        facebook: 'Facebook',
        youtube: 'Youtube',
        email: 'Email'
    };

    const [open, setOpen] = useState(false)
    const [isSecondaryTrayOpen, setIsSecondaryTrayOpen] = useState(false);
    const [secondaryTrayType, setSecondaryTrayType] = useState("")

    const handleSecondaryTrayOpen = (type: string) => {
        if (secondaryTrayType === type) {
            setSecondaryTrayType("")
            setIsSecondaryTrayOpen(false)
        } else {
            setSecondaryTrayType(type)
            setIsSecondaryTrayOpen(true);
        }
    };

    const performanceClick = () => {
        setOpen(true)
        setIsSecondaryTrayOpen(true)
        setSecondaryTrayType("Performance")
    }

    const onEmailAdAction = () => {
        setOpen(true)
      }

    const onNewLaunchClick = (event: any) => {
        setSubMenu(event);
    }

    return (
        <Card variant="surface" className="card-content w-100 py-2-5">
            <Tabs.Root defaultValue="topPerformer">
                <Tabs.List>
                    {masterTabs.map(({ value, label }) => (
                        <Tabs.Trigger key={value} value={value}>
                            {label}
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>

                <Box pt="3">
                    {masterTabs.map(({ value, label, subContent }) => (
                        <Tabs.Content key={value} value={value}>
                            <Box className="flex f-col">
                                <div className="my-1-5">
                                    <h4 style={{ margin: 0, padding: 0, fontWeight: 600 }}>
                                        {label}
                                    </h4>
                                    <span style={{ color: "rgb(156, 163, 175, 1)" }}>
                                        {subContent}
                                    </span>
                                </div>
                                <STabs orientation="vertical"  onSelectionChange={onNewLaunchClick}>
                                    <TabList>
                                        {Object.entries(verticalTabs).map(([subValue, label]) => (
                                            <Item key={subValue}>
                                                {label}
                                            </Item>
                                        ))}
                                    </TabList>

                                    <TabPanels UNSAFE_style={{ paddingLeft: "100px" }}>
                                        {Object.keys(verticalTabs).map(subValue => (
                                            <Item key={subValue}>
                                                <div style={{ height: "70vh" }}>
                                                    <RenderTable
                                                        data={data}
                                                        pageSize={10}
                                                        showPagination={false}
                                                        columns={subValue === 'email' ? EmailColums : subValue=== "facebook" ? FBColumns : YoutubeColumns}
                                                        rowAction={onEmailAdAction}
                                                        width={subValue === 'email' ? "1200px" : subValue === "facebook" ? "1500px": "1200px"}
                                                    />
                                                </div>
                                            </Item>
                                        ))}
                                    </TabPanels>
                                </STabs>
                            </Box>
                        </Tabs.Content>
                    ))}
                </Box>
            </Tabs.Root>
            <Dialog.Root open={open}>
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Title></Dialog.Title>
                    <Dialog.Content className="DialogContent" style={{ width: isSecondaryTrayOpen ? "1000px" : "500px" }}>
                        <div className='DialogBody'>
                            <div className="secondaryTray" style={isSecondaryTrayOpen ? { display: "block", gridColumn: "span 6 / span 6" } : { display: "none" }}>
                                <div>
                                    <div className='flex f-col gap-1'>
                                        <div style={{ fontWeight: 700, fontSize: "1.25rem", lineHeight: "1.75rem" }}>
                                            {secondaryTrayType}
                                        </div>
                                        <div>
                                            {
                                                secondaryTrayType === "Performance" && (
                                                    <span>Performance Data</span>
                                                )
                                            }
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
                                        <ActionButton UNSAFE_className='actionButton' isQuiet><img src={EditSVG} alt='edit' /></ActionButton>
                                        <ActionButton UNSAFE_className='actionButton' isQuiet><img src={CopySVG} alt='copy' /></ActionButton>
                                        <ActionButton UNSAFE_className='actionButton' isQuiet><img src={DeleteSVG} alt='delete' /></ActionButton>
                                        <ActionButton UNSAFE_className='actionButton' isQuiet><img src={BookMarkSVG} alt='bookmark' /></ActionButton>
                                        <ActionButton UNSAFE_className='actionButton' isQuiet><img src={TranslateSVG} alt='translate' /></ActionButton>
                                    </Flex>
                                    <ActionButton UNSAFE_className='actionButton' isQuiet onPress={() => {
                                        setOpen(false)
                                        setSecondaryTrayType("")
                                        setIsSecondaryTrayOpen(false)
                                    }}><img src={CloseSVG} alt='close' /></ActionButton>
                                </div>
                                <div className="flex f-col px-1-75">
                                    <div style={{ fontWeight: "600", fontSize: "1.25rem", overflowWrap: "break-word", lineHeight: "1.75rem" }}>
                                        Tap. Tap. Tada! campaign - Remove Distractions
                                    </div>
                                </div>
                                <div className='DialogTabs'>
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
                                </div>
                                <div className='DialogPreview'>
                                    <div className="flex jus-center">
                                        <div className="flex f-col w-330 shrink-0" style={{ maxWidth: "100%" }}>
                                            <div className="flex" style={{ border: "solid 1px black", justifyContent: "flex-start" }}>
                                                <ArticlePreview />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Flex>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </Card>
    );
};
