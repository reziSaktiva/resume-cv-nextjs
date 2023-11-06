import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { Typography } from '@mui/material'
import './index.css'

export default function CostumeTimeline({ title, children, icon }) {
    return (
        <Timeline className="timeline p-[0 !importent]">
            {/* item header */}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot className="text-black">{icon}</TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6">{title}</Typography>
                </TimelineContent>
            </TimelineItem>
            {children}
            {/* remainings item */}
            <TimelineItem>
                <CostumeTimelineSeparator />
                <TimelineContent>Code</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

export const CostumeTimelineSeparator = () => {
    return (
        <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
        </TimelineSeparator>
    )
}

