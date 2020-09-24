import React from "react"
import DatePicker from 'react-date-picker'
import { Row, Col, Card, Button, Form, Accordion, useAccordionToggle } from "react-bootstrap"


function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <Button
            className="float-right"
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}

function Birthday() {
    return (
        <div class="Birthday">
            {/* 
            <Card className="my-3">
                <Form className="mt-3">
                    <Row className="justify-content-center">
                        <Col md={1}>
                            <p className="my-auto"> Birthday </p>
                        </Col>
                        <Col className="my-auto" md={2}>
                            <DatePicker />
                        </Col>
                    </Row>
                </Form> */}
            {/* <Card.Body>
                    <CustomToggle eventKey="2" variant="primary float-right">Edit Notifications</CustomToggle>
                </Card.Body> */}
            <Accordion defaultActiveKey="0">
                <Card>
                    <Row className=" mt-3 justify-content-center">
                        <Col md={1}>
                            <p className="my-auto"> Birthday </p>
                        </Col>
                        <Col className="my-auto" md={2}>
                            <DatePicker />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>

                            <Button className="primary ml-auto" eventKey="2">Edit Notifications!</Button>
                        </Col>

                    </Row>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Row>

                            </Row>

                        </Card.Body>
                    </Accordion.Collapse>
                
                <Button className = "float-right">Test</Button>
                </Card>

            </Accordion>


        </div>
    )
}


export default Birthday;
