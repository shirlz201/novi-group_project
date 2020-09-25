import React, {useState} from "react"
import BirthdayNotification from "../components/BirthdayNotification"
import Holiday from "../components/Holiday"
import Container from "react-bootstrap/Container"
import ContactForm from "../components/create-contactform.component"
import Interest from "../components/AddInterest";


function AddContact() {
    const [birthday, setBirthday] = useState(new Date())
    const [bdayReminder_1, setBdayReminder_1] = useState(false)
    const [bdayReminder_5, setBdayReminder_5] = useState(false)
    const [bdayReminder_7, setBdayReminder_7] = useState(false)
    const [bdayGiftReminder, setBdayGiftReminder] = useState(false)
    const [bdayTextReminder, setBdayTextReminder] = useState(false)
    

    return (
        <Container>
            <ContactForm />
            {/* {console.log(birthday)} */}
            <BirthdayNotification 
                birthday = {birthday} 
                setBirthday = {setBirthday}
                bdayReminder_1 = {bdayReminder_1} 
                setBdayReminder_1 ={setBdayReminder_1}
                bdayReminder_5 = {bdayReminder_1} 
                setBdayReminder_5 ={setBdayReminder_1}
                bdayReminder_7 = {bdayReminder_1} 
                setBdayReminder_7 ={setBdayReminder_1}
                bdayGiftReminder = {bdayGiftReminder} 
                setBdayGiftReminder ={setBdayGiftReminder}
                bdayTextReminder = {bdayTextReminder} 
                setBdayTextReminder ={setBdayTextReminder}
                />
                {console.log(bdayTextReminder)}
            <Holiday />
            <Interest />
        </Container>
        
    )
}

export default AddContact