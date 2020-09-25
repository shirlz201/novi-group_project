import React, { useState } from "react"
import BirthdayNotification from "../components/BirthdayNotification"
import Holiday from "../components/Holiday"
import { Container, Row, Col } from "react-bootstrap"
import ContactForm from "../components/AddContactCard"
import Interest from "../components/AddInterest";
import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar";
import AddProfileImage from "../components/AddProfileImage";

function AddContact() {
    const [birthday, setBirthday] = useState(new Date())
    const [bdayReminder_1, setBdayReminder_1] = useState(false)
    const [bdayReminder_5, setBdayReminder_5] = useState(false)
    const [bdayReminder_7, setBdayReminder_7] = useState(false)
    const [bdayGiftReminder, setBdayGiftReminder] = useState(false)
    const [bdayTextReminder, setBdayTextReminder] = useState(false)

    return (
        <Container fluid className="mx-0 px-0">
            <TopBar />
            <Row>
                <Col md={2} sm={12} style={{ width: "10%" }}>
                    <Sidebar />
                </Col>

                <Col md={9}>
                    <Row>
                        <Col>
                            <AddProfileImage/>
                        </Col>
                        <Col>
                            <ContactForm />
                        </Col>
                    </Row>

                    {/* {console.log(birthday)} */}
                    <BirthdayNotification
                        birthday={birthday}
                        setBirthday={setBirthday}
                        bdayReminder_1={bdayReminder_1}
                        setBdayReminder_1={setBdayReminder_1}
                        bdayReminder_5={bdayReminder_5}
                        setBdayReminder_5={setBdayReminder_5}
                        bdayReminder_7={bdayReminder_7}
                        setBdayReminder_7={setBdayReminder_7}
                        bdayGiftReminder={bdayGiftReminder}
                        setBdayGiftReminder={setBdayGiftReminder}
                        bdayTextReminder={bdayTextReminder}
                        setBdayTextReminder={setBdayTextReminder}
                    />
                    {console.log(bdayTextReminder)}
                    <Holiday />
                    <Interest />
                </Col>

            </Row>



        </Container>

    )
}

export default AddContact