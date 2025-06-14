import React from 'react';
import { Box, Button, Flex, Heading } from '@radix-ui/themes';
import { ChevronDownIcon, ChevronRightIcon } from '@radix-ui/react-icons';
interface Props {
    index: Number,
    openTray: () => void
}

type AccordionProps = {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
    placement?: string;
    showIcon?: boolean
};

const Accordion = ({ title, children, isOpen, onToggle, placement, showIcon = true }: AccordionProps) => {
    return (
        <Box>
            <Button variant='soft' onClick={onToggle} style={{
                width: '100%', textAlign: 'left', backgroundColor: 'transparent',
                border: 'none', margin: '6px 0px'
            }}
            className= {placement === 'sidebar' ? 'whiteText' : 'blackText'}>
                <Flex style={{ flex: '1', display: 'flex' }}>
                    {/* <Heading size={placement === 'sidebar' ? '3' : '3'} mr='10px'  > {title}</Heading> */}
                    <Heading size='3' mr='10px'  > {title}</Heading>
                    {showIcon && (
                        <>
                            {isOpen ?
                                <ChevronDownIcon fontWeight='bold' width="20" height="28" /> :
                                <ChevronRightIcon fontWeight='bold' width="20" height="28" />
                            }
                        </>
                    )}
                </Flex>
            </Button>
            {isOpen && (
                <Box pl='24px' mt='8px' mb='20px' style={{ textAlign: 'left' }}>
                    {children}
                </Box>
            )}
        </Box>
    );
};

export default Accordion;
