import React from "react"
import Birthday from "../components/Birthday"
import Holiday from "../components/Holiday"
import Container from "react-bootstrap/Container"
import ContactForm from "../components/create-contactform.component"

function AddContact() {
    return (
        <Container>
            <Birthday />
            <Holiday />
            <ContactForm />
        </Container>
        
    )
}

export default AddContact