import React from 'react';
import { Container, Card, ImagePane, InfoPane, Image, Note, Title, ReminderChip, DetailsWrapper, DetailItem } from './styles/Event';

export default function Event({ children, ...restProps }) {
    return (
        <Card {...restProps}>
            {children}
        </Card>
    )
}

Event.Container = function EventContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Event.InfoPane = function EventInfoPane({ children, ...restProps }) {
    return <InfoPane {...restProps}>{children}</InfoPane>;
}

Event.ImagePane = function EventImagePane({ ...restProps }) {
    return <ImagePane {...restProps} />;
}


Event.Image = function EventImage({ ...restProps }) {
    return <Image {...restProps} />;
}

Event.Title = function EventTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Event.ReminderChip = function EventReminderChip({ children, ...restProps }) {
    return <ReminderChip{...restProps}>{children}</ReminderChip>;
}

Event.DetailsWrapper = function EventDetailsWrapper({ children, ...restProps }) {
    return <DetailsWrapper{...restProps}>{children}</DetailsWrapper>;
}

Event.DetailItem = function EventDetailItem({ children, ...restProps }) {
    return <DetailItem{...restProps}>{children}</DetailItem>;
}

Event.Note = function EventNote({ children, ...restProps }) {
    return <Note{...restProps}>{children}</Note>;
}

// Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
//     return <SubTitle {...restProps}>{children}</SubTitle>;
// }

