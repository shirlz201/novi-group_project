import React, { useState } from "react"
import BirthdayInput from "./BirthdayInput"
import { Row, Col, Card, Button, Collapse, Form } from "react-bootstrap"
import "./BirthdayNotification.css"


function BirthdayNotification({ birthday, setBirthday, bdayReminder_1, setBdayReminder_1,
    bdayReminder_5, setBdayReminder_5, bdayReminder_7, setBdayReminder_7, bdayGiftReminder, setBdayGiftReminder,
    bdayTextReminder, setBdayTextReminder, ...props }) {

    //Bootstrap Collapse Box state
    const [open, setOpen] = useState(false);

    return (
        
        <Card className = "my-2 birthday-notification p-4">
            <BirthdayInput setBirthday={setBirthday} birthday={birthday}>
                <Col md={3} className="my-auto">
                    {/* Collapse Button */}
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >   + Notifications
                        </Button>
                </Col>
            </BirthdayInput>
            <Collapse in={open} >
                <div id="example-collapse-text" >
                    <div className="mx-3 my-3">
                        <Form>
                            <Row className="justify-content-center">
                                <Form.Label className="col-2">Set Reminders:</Form.Label>
                                <Form.Group controlId="formBasicCheckbox" className="col-8 row justify-content-center">
                                    <Form.Check
                                        className="col-2"
                                        type="checkbox"
                                        label="1 day"
                                        value={bdayReminder_1}
                                        onChange={(e) => setBdayReminder_1(e.target.value)} />
                                    <Form.Check
                                        className="col-2"
                                        type="checkbox"
                                        label="5 day"
                                        value={bdayReminder_5}
                                        onChange={(e) => setBdayReminder_5(e.target.value)} />
                                    <Form.Check
                                        className="col-2"
                                        type="checkbox"
                                        label="7 day"
                                        value={bdayReminder_7}
                                        onChange={(e) => setBdayReminder_7(e.target.value)} />
                                    <Form.Check
                                        className="col-2"
                                        type="checkbox"
                                        label="Buy Gift"
                                        value={bdayGiftReminder}
                                        onChange={(e) => setBdayGiftReminder(e.target.value)} />
                                    <Form.Check
                                        className="col-2"
                                        type="checkbox"
                                        label="Send Text"
                                        value={bdayTextReminder}
                                        onChange={setBdayTextReminder} />
                                </Form.Group>
                            </Row>
                        </Form>
                    </div>
                </div>
            </Collapse>
        </Card >

    )
}



export default BirthdayNotification;
