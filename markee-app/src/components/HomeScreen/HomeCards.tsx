import React, { useState } from "react"
import { Box, Flex } from "@radix-ui/themes"
import { Images } from "../utilities/helpers"
interface CardProps {
    color: string
    name: string
    index: number;
    onClick: (index: number) => void;
    isActive: boolean;
    updateActiveTitle: (title: string) => void;
    liveCount: number;
}
const Card: React.FC<CardProps> = ({ color, name, index, onClick, isActive, updateActiveTitle, liveCount }) => {
    const activeBorderColor = isActive ? color : 'transparent';
    return (
        <Flex className="homeCard" style={{ backgroundColor: color }}>
            <a href="javascript:void(0)" onClick={() => { onClick(index); updateActiveTitle(name); }} style={{height:'100%'}}>
                {/* <div style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}>
                    {name}
                </div> */}
                <div style={{ fontWeight: 600, fontSize: "16px", lineHeight: "2rem" }}>
                    {name}
                </div>
                <div style={{ margin: "5px 0px 15px"}}>
                    No of live campaigns: {liveCount}
                </div>
                <div style={{ gap: ".25rem", flexWrap: "wrap", marginLeft: ".75rem" }} className="flex">
                    {Images.slice(0, liveCount).map((img, idx) => (
                        ![0, 5].includes(idx) ?
                            <a href={`campaign/${idx + 1}/campaign`} style={{ flexShrink: 0}}>
                                <div style={{ flexShrink: 0, borderLeft: "2px", borderStyle: "solid", borderColor: color, borderRadius: ".35rem" }}>
                                    <img src={img} alt={`img${idx}`}
                                        style={{
                                            // borderLeft: "2px", borderStyle: "solid", 
                                            // borderColor: color,
                                            borderRadius: ".5rem",
                                            width: "3rem", height: "3rem", objectFit: "cover",
                                        }} key={idx}
                                    />
                                </div>
                            </a> :
                            <a href={`campaign/${idx + 1}/campaign`} style={{ flexShrink: 0 }}>
                                <div style={{ flexShrink: 0 }}>
                                    <img src={img} alt={`img${idx}`}
                                        style={{
                                            // borderLeft: "2px", borderStyle: "solid", 
                                            // borderColor: color,
                                            borderRadius: ".5rem",
                                            width: "3rem", height: "3rem", objectFit: "cover",
                                        }} key={idx}
                                    />
                                </div>
                            </a>
                    ))}
                </div>
            </a>
            {isActive && (
                <div className="active-border" style={{ borderTopColor: activeBorderColor }}></div>
            )}
        </Flex>
    )
}
interface HomeCardsProps {
    updateActiveTitle: (title: string) => void;
}
export const HomeCards: React.FC<HomeCardsProps> = ({ updateActiveTitle }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const colors = [
        {
            color: "#6e63d6",
            title: "Awareness",
            subTitle: "Awareness",
            liveCount: 7
        },
        {
            color: "#02afaf",
            title: "Consideration",
            subTitle: "Consideration",
            liveCount: 6
        },
        {
            color: "#4682ea",
            title: "Conversion",
            subTitle: "Conversion",
            liveCount: 4
        },
        {
            color: "#ed4a6f",
            title: "Engagement",
            subTitle: "Engagement",
            liveCount: 4
        },
        {
            color: "#e6a532",
            title: "Loyalty",
            subTitle: "Loyalty",
            liveCount: 2
        }
    ]
    const handleCardClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
        updateActiveTitle(colors[index].title);
    };
    return (
        <div style={{ position: "relative", overflow: "auto", width: "100%" }}>
            <div style={{ paddingBottom: "1.5rem", overflow: "scroll", gap: "1.2%" }} className="flex">
                {colors.map((color, i) => (
                    <Card
                        key={i}
                        index={i}
                        color={color.color}
                        name={color.title}
                        onClick={handleCardClick}
                        isActive={activeIndex === i}
                        updateActiveTitle={updateActiveTitle}
                        liveCount={color.liveCount}
                    />
                ))}
            </div>
        </div>
    )
}