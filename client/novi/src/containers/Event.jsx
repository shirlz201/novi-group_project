import React from 'react';
import Event from '../components/Event';
import { FaCalendarDay } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { ImLocation, ImClock } from 'react-icons/im';
import { IconContext } from "react-icons";
import { isThisSecond } from 'date-fns/esm';

// Event.propTypes = {

// }

const data = [
    {
        title: "Mom's Birthday Celebration with Family and Friends and lots lots more",
        timeLeft: {
            days: 2,
            months: null,
            years: null
        },
        imgURL:"https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        eventDate: "September 1, 2020",
        eventTime: "4:00 pm",
        eventLocation: "31-10 Thomson Ave, Long Island City, NY 11101",
        note: "Buy gift and finish writing birthday card, invite friends and family to come to the birthday party"

    },
    {
        title: "School Reunion Gathering",
        timeLeft: {
            days: 6,
            months: null,
            years: null
        },
        imgURL:"https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        eventDate: "September 5, 2020",
        eventTime: "3:00 pm",
        eventLocation: "31-10 Thomson Ave, Long Island City, NY 11101"
    },
    {
        title: "Christmas Party at Shirley's Place",
        timeLeft: {
            days: 25,
            months: null,
            years: null
        },
        imgURL:"https://images.unsplash.com/photo-1588613254750-cf5d89a29b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80",
        eventDate: "September 1, 2020",
        eventTime: "4:00 pm",
        eventLocation: "31-10 Thomson Ave, Long Island City, NY 11101"
    }
]


export function EventContainer({ title, timeLeft }) {

    const displayChipColor = (days) =>{
        if(days <= 3){
            return "#FF7858"
        }else if (days <= 7){
            return "#FFB641"
        }else if (days <= 30){
            return "#2699FB"
        } 
    }

    return (
        <Event.Container>
            {data.map(item => (
                <Event>
                    <Event.ReminderChip backgroundColor = {displayChipColor(item.timeLeft.days)}> {`${item.timeLeft.days} Days Left!`} </Event.ReminderChip>
                    
                    <Event.ImagePane>
                        <Event.Image src={item.imgURL} />
                    </Event.ImagePane>

                    <Event.InfoPane>
                        <Event.Title>{item.title}</Event.Title>
                        <Event.DetailsWrapper>

                            <Event.DetailItem>
                                <FaCalendarDay className="event-icon" /> {item.eventDate}
                            </Event.DetailItem>

                            <Event.DetailItem style={{ width: "10rem" }}>
                                <ImClock className="event-icon" /> {item.eventTime}
                            </Event.DetailItem>

                        </Event.DetailsWrapper>
                        <Event.DetailsWrapper >
                            <Event.DetailItem style={{ gridColumn: "span 2" }}>
                                <ImLocation className="event-icon" /> {item.eventLocation}
                            </Event.DetailItem>
                        </Event.DetailsWrapper>

                        {/* <Event.NoteButton>See Note</Event.NoteButton> */}
                        
                        {/* Display note if there is one */}
                        {item.note ? 
                        <Event.Note>
                            Notes: Buy gift and finish writing birthday card, invite friends and family to come to the birthday party

                        </Event.Note>: ""}
                    </Event.InfoPane>
                </Event>
            ))}
        </Event.Container>
    )
}






