import React from 'react';
import Event from '../components/Event';
import { FaCalendarDay } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { ImLocation, ImClock } from 'react-icons/im';
import { IconContext } from "react-icons";

Event.propTypes = {

}

const data = [
    {
        title: "Mom's Birthday Celebration with Family and Friends and lots lots more",
        timeLeft: "2 days",
        eventDate: "September 1, 2020",
        eventTime: "4:00 pm",
        eventLocation: "31-10 Thomson Ave, Long Island City, NY 11101"

    },
    {
        title: "School Reunion Gathering",
        timeLeft: "2 days",
        eventDate: "September 5, 2020",
        eventTime: "3:00 pm",
        eventLocation: "31-10 Thomson Ave, Long Island City, NY 11101"
    },
    {
        title: "Christmas Party at Shirley's Place",
        timeLeft: "2 days",
        eventDate: "September 1, 2020",
        eventTime: "4:00 pm",
        eventLocation: "31-10 Thomson Ave, Long Island City, NY 11101"
    }
]

export function EventContainer({ title, timeLeft }) {
    return (
        <Event.Container>
            {data.map(item => (


                <Event>

                    <Event.ReminderChip> {`${item.timeLeft} Left!`} </Event.ReminderChip>

                    <Event.ImagePane>
                        <Event.Image src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                    </Event.ImagePane>

                    <Event.InfoPane>
                        <Event.Title>{item.title}</Event.Title>

                        <Event.DetailsWrapper>

                            <Event.DetailItem>
                                <FaCalendarDay className="event-icon" /> {item.eventDate}
                        </Event.DetailItem>

                            <Event.DetailItem style={{ width: "10rem" }}>
                                <ImClock className="event-icon" />{item.eventTime}
                        </Event.DetailItem>

                        </Event.DetailsWrapper>

                        <Event.DetailsWrapper >

                            <Event.DetailItem style={{ gridColumn: "span 2" }}>
                                <ImLocation className="event-icon" /> {item.eventLocation}
                        </Event.DetailItem>

                        </Event.DetailsWrapper>

{/* 
                        <Event.Note>
                            Notes: Buy gift and finish writing birthday card, invite friends and family to come to the birthday party

                    </Event.Note> */}


                    </Event.InfoPane>

                </Event>
            ))}
        </Event.Container>
    )
}






