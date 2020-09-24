import React from "react"
import Birthday from "../components/Birthday"
import Holiday from "../components/Holiday"
import Container from "react-bootstrap/Container"

function AddContact() {
    return (
        <Container>
            <Birthday />
            <Holiday />
        </Container>
        
    )
}

export default AddContact