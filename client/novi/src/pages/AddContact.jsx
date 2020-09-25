import React from "react"
import Birthday from "../components/Birthday"
import Holiday from "../components/Holiday"
import Container from "react-bootstrap/Container"
import ContactForm from "../components/create-contactform.component"
import Interest from "../components/AddInterest";
import TopBar from "../components/TopBar";

function AddContact() {
    return (
        <Container>
            <TopBar />
            <Birthday />
            <Holiday />
            <ContactForm />
            <Interest />
        </Container>
        
    )
}

export default AddContact