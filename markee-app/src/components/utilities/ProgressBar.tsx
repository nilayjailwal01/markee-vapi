import React from 'react';
import { Text } from '@radix-ui/themes';

interface ProgressBarProps {
    status: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ status }) => {
    const [health, setHealth] = React.useState<number>(0);

    React.useEffect(() => {
        setHealth(
            status === 'In Development' ? 20 :
                status === 'Testing & Approval' ? 40 :
                    status === 'Pending Launch' ? 60 :
                        status === 'Live Campaign' ? 80 :
                            status === 'Completed' ? 100 : 0
        );
    }, [status])

    const getColor = (percentage: number): string => {
        if (percentage === 20) return 'rgb(100, 116, 139)';
        if (percentage === 20) return '#f1416c';
        if (percentage === 60) return 'rgb(96, 165, 250)'
        if (percentage === 80) return 'rgb(34, 197, 94)';
        if (percentage === 100) return 'rgb(114, 57, 234)';
        return 'red';
    };

    const barStyle = {
        width: `${health}%`,
        backgroundColor: getColor(health),
        height: '20px',
        borderRadius: '5px',
        transition: 'width 0.3s ease-in-out',
    };

    return (
        <div className="progress-bar-container" style={{ textWrap: "nowrap" }}>
            <div className="progress-bar-background">
                <div className="progress-bar" style={barStyle}></div>
            </div>
            <Text as="div" size="1" mt='5px' color="gray">Progress - <strong>{health}%</strong>  </Text>
        </div>
    );
};

export default ProgressBar;
