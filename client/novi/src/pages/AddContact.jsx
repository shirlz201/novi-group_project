import React from "react"
import Birthday from "../components/Birthday"
import Holiday from "../components/Holiday"
import Container from "react-bootstrap/Container"
import ContactForm from "../components/AddContactCard"

import Interest from "../components/AddInterest";
import TopBar from "../components/TopBar";
import ProfileCard from "../components/ProfileCard";


function AddContact() {
    return (
        <Container>
            <TopBar/>
            <ProfileCard/>
            <Birthday />
            <Holiday />
            <ContactForm />
            <Interest />
        </Container>
        
    )
}

export default AddContact