import React from "react"
import { Flex } from "@radix-ui/themes"
import { Text } from "@adobe/react-spectrum"
import logo from '../../assets/logo.png'
import { getRandomElement, Images } from "../utilities/helpers"


export const ArticlePreview = () => {
    return (
        <Flex className="f-col gap-1-5">
            <Flex className="f-row gap-10 p-10" style={{ alignItems: "flex-start", marginTop:"1rem" }}>
                <img src={logo} alt="logo" style={{ height: "20px", width: "auto" }} />
                <Text UNSAFE_style={{ fontSize: "12px" }}>Newsletter</Text>
            </Flex>
            <img className={"aspect-square bg-[#f5f8fa] object-contain p-[20%] w-100"} src={getRandomElement(Images)} alt="newsletter" />
            {/* <Flex className="p-10 f-col">
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </Text>
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </Text>
                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </Text>
            </Flex> */}
        </Flex>
    )
}