import { useState, useEffect } from 'react';
import { Button, Divider, Flex, View, Grid, TextArea, DatePicker, ComboBox, Item, Text, Dialog, DialogContainer, Content, Header, Heading, ActionButton } from '@adobe/react-spectrum';
import { MultiSelect, Option as MultiSelectOption } from 'react-multi-select-component';
import campaignOptions from '../components/utilities/campaignOptions';
import { parseDate, DateValue } from '@internationalized/date';
import { convertToValues } from './CampaignBaseForm';
import BoldText from './ui/BoldText';

import CloseSvg from '../icons/close.svg'
import { CampData } from './utilities/campaignData';

interface Option {
    value: string | number;
    label: string;
}

interface CampaignBaseFormProps {
    plannedStartDate?: any;
    plannedEndDate?: any;
    campaigns: CampData[]
    campaignId?: any
    isOpen: boolean
    onClose: any
    onChange: (field: string, value: any) => void;
    onSubmit: any
}

const CampaignModalForm: React.FC<CampaignBaseFormProps> = ({
    plannedStartDate,
    plannedEndDate,
    campaigns,
    campaignId,
    onChange,
    onSubmit,
    isOpen,    // pass this prop to control modal open/close
    onClose    // pass this prop to close modal
}) => {
    const [localPlannedStartDate, setLocalPlannedStartDate] = useState<DateValue | null>(plannedStartDate ? parseDate(plannedStartDate) : null);
    const [localPlannedEndDate, setLocalPlannedEndDate] = useState<DateValue | null>(plannedEndDate ? parseDate(plannedEndDate) : null);
    const [localeCampaingnId, setLocalCampaignId] = useState<string | null>(campaignId)

    useEffect(() => {
        if (plannedStartDate) {
            setLocalPlannedStartDate(parseDate(plannedStartDate));
        } else {
            setLocalPlannedStartDate(null);
        }

        if (plannedEndDate) {
            setLocalPlannedEndDate(parseDate(plannedEndDate));
        } else {
            setLocalPlannedEndDate(null);
        }
    }, [plannedStartDate, plannedEndDate]);

    useEffect(() => {
        setLocalCampaignId(campaignId)
    }, [campaignId])

    return (
        <DialogContainer onDismiss={() => onClose()}>
            {isOpen && (
                <Dialog>
                    <Heading>
                        <Flex direction={"row"} UNSAFE_style={{ justifyContent: "space-between" }}>
                            <BoldText>Update Campaign</BoldText>
                            <ActionButton isQuiet onPress={() => onClose()}>
                                <img src={CloseSvg} alt="close" width={"15"} height={"15"} />
                            </ActionButton>
                        </Flex>
                        <Divider size="S" />
                    </Heading>
                    <Content>
                        <View
                            UNSAFE_style={{
                                maxHeight: '80vh',
                                overflowY: 'auto',
                                padding: '1rem',
                                borderRadius: '8px',
                                backgroundColor: 'white',
                                width: "100%"
                            }}
                        >
                            <Grid
                                areas={['col1', 'col2', 'col3', 'col4']}
                                columns={['1fr']}
                                gap="size-100"
                            >
                                <View margin="size-100">
                                    <ComboBox
                                        label="Campaign Name"
                                        isRequired
                                        width="100%"
                                        placeholder="Select.."
                                        defaultItems={campaigns.filter(each => each.status === 'In Development')}
                                        selectedKey={localeCampaingnId}
                                        onSelectionChange={(item) => onChange('campaignId', item)}
                                    >
                                        {item => <Item key={item.id}>{item.campaignName}</Item>}
                                    </ComboBox>
                                </View>
                                <View margin="size-100">
                                    <DatePicker
                                        label="Start Date"
                                        value={localPlannedStartDate}
                                        onChange={date => {
                                            setLocalPlannedStartDate(date);
                                            onChange('plannedStartDate', date ? date.toString() : '');
                                        }}
                                        width="100%"
                                    />
                                </View>
                                <View margin="size-100">
                                    <DatePicker
                                        label="End Date"
                                        value={localPlannedEndDate}
                                        onChange={date => {
                                            setLocalPlannedEndDate(date);
                                            onChange('plannedEndDate', date ? date.toString() : '');
                                        }}
                                        width="100%"
                                    />
                                </View>
                            </Grid>
                            <Flex justifyContent="end" gap="size-200" marginTop="size-200">
                                <Button variant="secondary" onPress={onClose}>Cancel</Button>
                                <Button variant="cta" onPress={() => onSubmit()}>Save</Button>
                            </Flex>
                        </View>
                    </Content>
                </Dialog>
            )}
        </DialogContainer>
    );
};


export default CampaignModalForm