import React, { useState } from "react"
import BirthdayInput from "./BirthdayInput"
import { Row, Col, Card, Button, Collapse, Form } from "react-bootstrap"
import "./BirthdayNotification.css"


function BirthdayNotification({ handleChange, values}) {

    //Bootstrap Collapse Box state
    const [open, setOpen] = useState(false);

    return (
        
        <Card className = "my-2 birthday-notification p-4">
            <BirthdayInput values={values} handleChange={handleChange} >
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
            {/* <Collapse in={open} >
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
                                        name="bdayReminder.oneDay"
                                        value={values.bdayReminder.oneDay}
                                        onChange={handleChange} />
                                    <Form.Check
                                        className="col-2"
                                        type="checkbox"
                                        label="5 day"
                                        name="bdayReminder.fiveDay"
                                        value={values.bdayReminder.fiveDay}
                                        onChange={handleChange} />
                                    <Form.Check
                                        className="col-2"
                                        type="checkbox"
                                        label="7 day"
                                        name="bdayReminder.sevenDay"
                                        value={values.bdayReminder.sevenDay}
                                        onChange={handleChange} />
                                    <Form.Check
                                        className="col-2"
                                        type="checkbox"
                                        label="Buy Gift"
                                        name="bdayReminder.sendGift"
                                        value={values.bdayReminder.sendGift}
                                        onChange={handleChange} />
                                    <Form.Check
                                        className="col-2"
                                        type="checkbox"
                                        label="Send Text"
                                        name="bdayReminder.sendText"
                                        value={values.bdayReminder.sendText}
                                        onChange={handleChange} />
                                </Form.Group>
                            </Row>
                        </Form>
                    </div>
                </div>
            </Collapse> */}
        </Card >

    )
}



export default BirthdayNotification;
