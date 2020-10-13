import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"
import { MdEventAvailable, MdDateRange } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io'

import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import DateFnsUtils from '@date-io/date-fns';
// import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TopBar from "../components/TopBar"
import Sidebar from "../components/Sidebar"

import AddContact from "./AddContact";

mobiscroll.settings = {
    theme: 'mobiscroll',
    themeVariant: 'light'
};


const contacts = {
    items: [{
        value: 1,
        text: 'Books'
    }, {
        value: 2,
        text: 'Movies, Music & Games'
    }, {
        value: 3,
        text: 'Electronics & Computers'
    }, {
        value: 4,
        text: 'Home, Garden & Tools'
    }, {
        value: 5,
        text: 'Health & Beauty'
    }, {
        value: 6,
        text: 'Toys, Kids & Baby'
    }, {
        value: 7,
        text: 'Clothing & Jewelry'
    }, {
        value: 8,
        text: 'Sports & Outdoors'
    }, {
        value: 9,
        text: 'Automotive & Industrial'
    }],
    names: [{
        value: 0,
        group: 'A',
        text: 'Adaline Shiver'
    }, {
        value: 1,
        group: 'A',
        text: 'Adella Cornell'
    }, {
        value: 2,
        group: 'A',
        text: 'Adolph Scriber'
    },
    {
        value: 78,
        group: 'B',
        text: 'Barbara Mackay'
    }, {
        value: 79,
        group: 'B',
        text: 'Barbera Phu'
    }, {
        value: 80,
        group: 'B',
        text: 'Barbie Kaczorowski'
    }, {
        value: 81,
        group: 'B',
        text: 'Barney Flurry'
    },
        // Showing partial data. Download full source.
    ]
};

function AddEvent() {
    const [startDate, setStartDate] = useState(new Date());
    const [contactList, setContactList] = useState(contacts)
    return (
        <>
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
                        <MDBContainer>


                            <form>
                                <p className="h5 text-center mb-4">Add Event</p>
                                <div className="grey-text">
                                    {/* Event Name */}
                                    < MdEventAvailable style={{ fontSize: "22px", padding: "0px" }} />
                                    <MDBInput label="Event Name" group type="text" />
                                    {/* Event Theme */}
                                    <MDBInput label="Theme" icon="tag" group type="text" />
                                    < MdDateRange style={{ fontSize: "22px", padding: "0px" }} />

                                    {/* <DatePicker
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        timeInputLabel="Time:"
                                        dateFormat="MM/dd/yyyy h:mm aa"
                                        showTimeInput
                                    /> */}

                                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                                    <p />
                                    <div>
                                        < IoMdTime style={{ fontSize: "22px", padding: "0px" }} />

                                        <DatePicker
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"
                                        />
                                    </div>
                                    <hr />

                                    {/* Event Notes */}
                                    <MDBInput type="textarea" rows="2" label="Notes" icon="pencil-alt" />

                                    <p />

                                    {/* Select Contacts  */}
                                    <mobiscroll.Form inputStyle="box" labelStyle="stacked">
                                        <div className="mbsc-grid">
                                            <mobiscroll.FormGroup className="mbsc-row">

                                                <div className="mbsc-form-group-title">Select Contancts</div>
                                                <div className="mbsc-row mbsc-form-grid">

                                                    <div className="mbsc-col-12">
                                                        <label>
                                                            Contacts
                                        <mobiscroll.Select
                                                                display="bubble"
                                                                touchUi={false}
                                                                select="multiple"
                                                                group={true}
                                                                groupLabel="&nbsp;"
                                                                minWidth={[60, 320]}
                                                                value={[]}
                                                                data={contactList.names}
                                                                minWidth={[60, 320]}
                                                            />
                                                        </label>
                                                    </div>
                                                </div>

                                            </mobiscroll.FormGroup>
                                        </div>
                                    </mobiscroll.Form>
                                </div>
                                <div className="text-center">
                                    <MDBBtn className="mx-3" color="primary">
                                        Submit
                                    </MDBBtn>
                                    
                                    <MDBBtn className="mx-5 my-3" color="primary">
                                        Submit
                                    </MDBBtn>
                                    
                                </div>
                                
                            </form>
                        </MDBContainer>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default AddEvent;