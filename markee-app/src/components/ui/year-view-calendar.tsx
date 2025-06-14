import { cn } from '../../lib';
import { CalendarOptions } from '@fullcalendar/core';
import { createDuration } from '@fullcalendar/core/internal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { ReactNode, useEffect, useRef } from 'react';
import './year-view-calendar.css';

export interface YearViewCalendarProps
	extends Pick<
		CalendarOptions,
		'events' | 'initialDate'
	> {
	className?: string;
	// TODO:
	renderEvent: (props: any) => ReactNode;
	showControls?: boolean;
}

export const YearViewCalendar = ({
	className,
	events,
	// resources,
	initialDate,
	renderEvent,
	showControls = true,
	// resourceLabelContent,
}: YearViewCalendarProps) => {
	const ref = useRef<FullCalendar>(null);
	// this is a hack to make nowIndicator position with a day precision
	// TODO: revisit
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		ref.current?.calendar.setOption('slotDuration', createDuration(1, 'month'));
	}, []);
	return (
		<div className={cn('YearViewCalendar', className)}>
			<FullCalendar
				// schedulerLicenseKey={FULLCALENDAR_LICENSE_KEY}
				ref={ref}
				nowIndicator
				plugins={[resourceTimelinePlugin]}
				// plugins={[dayGridPlugin]}
				initialView="timelineCustom"
				headerToolbar={
					showControls
						? undefined
						: {
								right: '',
							}
				}
				views={{
					timelineCustom: {
						type: 'resourceTimelineYear',
						slotDuration: { day: 1 }, // this is a hack to make nowIndicator position with a day precision
					},
				}}
				initialDate={initialDate}
				// resources={resources}
				events={events}
				height="auto"
				eventContent={(props) => renderEvent(props.event.extendedProps)}
				// resourceLabelClassNames="YearViewCalendar__resource-label"
				// resourceAreaHeaderClassNames="YearViewCalendar__resource-header"
				eventClassNames="YearViewCalendar__event"
				// resourceAreaWidth={35}
				// resourceLabelContent={resourceLabelContent}
			/>
		</div>
	);
};

export default YearViewCalendar;
