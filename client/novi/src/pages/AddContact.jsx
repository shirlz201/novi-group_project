import React from "react"
import Birthday from "../components/Birthday"
import Holiday from "../components/Holiday"
import Container from "react-bootstrap/Container"
import ContactForm from "../components/create-contactform.component"
import Interest from "../components/AddInterest";
import Sidebar from "../components/Sidebar"

function AddContact() {
    return (
        <Container>
            <Sidebar />
            <Birthday />
            <Holiday />
            <ContactForm />
            <Interest />
        </Container>
        
    )
}

export default AddContact