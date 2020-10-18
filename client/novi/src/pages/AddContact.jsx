import React, { useState } from "react"
import BirthdayNotification from "../components/BirthdayNotification"
import Holiday from "../components/Holiday"
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"
import ContactForm from "../components/AddContactCard"
import Interest from "../components/AddInterest";
import AddHoliday from "../components/AddHoliday";
import Sidebar from "../components/Sidebar"
import TopBar from "../components/TopBar";
import AddProfileImage from "../components/ImageUpload";
import ImageUploader from 'react-images-upload';
import ProfileCard from "../components/ProfileCard";
import { Formik } from "formik"
import Birthday from "../components/BirthdayInput";

function AddContact() {
    const [birthday, setBirthday] = useState(new Date())
    const [bdayReminder_1, setBdayReminder_1] = useState(false)
    const [bdayReminder_5, setBdayReminder_5] = useState(false)
    const [bdayReminder_7, setBdayReminder_7] = useState(false)
    const [bdayGiftReminder, setBdayGiftReminder] = useState(false)
    const [bdayTextReminder, setBdayTextReminder] = useState(false)

    // const formik = useFormik({
    //     initialValues:{
    //         firstName: "Matias",
    //         lastName: "",
    //         phoneNumber: "",
    //         email:""


    //     }
    // })

    return (

        <>

            {/* <TopBar/>
            <ProfileCard/>
            <BirthdayNotification />
            <Holiday />
            <ContactForm />
            <Interest /> */}

            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    email: "",
                    photo: "",
                    birthday: new Date(),
                    bdayReminder: {
                        oneDay: false,
                        fiveDay: false,
                        sevenDay: false,
                        sendGift: false,
                        sendText: false
                    },
                    holidays: [],
                    interest: []


                }}
                onSubmit={(data, { setSubmitting }) => {
                    // To disable submit button when submitting
                    setSubmitting(true)
                    console.log("Submit: ", data)
                    setSubmitting(false)
                }}>

                {/* We need to provide the values and methods from the Formik context to the form components */}
                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

                    <Container fluid className="mx-0 px-0">
                        {/* {console.log(values)} */}
                        <TopBar />
                        <Row>
                            <Col md={2} sm={12} style={{ width: "10%" }}>
                                <Sidebar />
                            </Col>

                            <Col md={8} className="mx-auto">

                                <Card className="m-4"
                                    style={{
                                        paddingLeft: "8%",
                                        paddingRight: "8%",
                                        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                                        transition: "all 0.3s cubic-bezier(.25,.8,.25,1)"
                                    }}>


                                    <Form onSubmit={handleSubmit}>
                                        <br />
                                        <AddProfileImage values={values}
                                            handleChange={handleChange}
                                        />

                                        <ContactForm values={values} handleChange={handleChange} />

                                        <BirthdayNotification
                                            values={values}
                                            handleChange={handleChange}
                                        />
                                        {console.log(bdayTextReminder)}
                                        {/* <Holiday /> */}
                                        <AddHoliday />

                                        <Interest
                                            values={values}
                                            handleChange={handleChange}
                                        />

                                        {/* Button is disabled when submitting to prevent spam using the formik setSubmitting/isSubmitting
                         helper methods */}
                                        <Button disabled={isSubmitting} variant="primary" type="submit">Submit</Button>
                                    </Form>
                                </Card>

                            </Col>

                        </Row>


                    </Container>

                )}

            </Formik>
        </>
    )
}

export default AddContact;