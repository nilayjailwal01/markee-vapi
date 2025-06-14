import { Text } from "@adobe/react-spectrum"
import React from "react"

interface BoldTextProps {
    children: string
    style?: {}
}

const BoldText: React.FC<BoldTextProps> = ({ children, style = {} }) => {
    return (
        <Text UNSAFE_style={style}>
            <strong>
                {children}
            </strong>
        </Text>
    )
}

export default BoldText