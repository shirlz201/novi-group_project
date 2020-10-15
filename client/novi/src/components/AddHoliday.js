import React, { useState, useEffect } from "react";
import axios from "axios";

//import component
import InterestCardList from "./InterestCardList.js";
import AddButton from "./AddButton.js";
import AddHolidayModal from "./AddHolidayModal.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import boostrap components
import { Card, Form, Col } from 'react-bootstrap'

//import icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);


// const allHolidaysDB = [
//     { id: 1, name: "Christmas", icon: "candy-cane", tags:["popular"] },
//     { id: 2, name: "Thanksgiving", icon: "leaf", tags:["popular"]  },
//     { id: 3, name: "New Year's Day", icon: "glass-cheers", tags:["patriotic"] },
//     { id: 4, name: "New Year's Eve", icon: "glass-cheers", tags:["popular"]  },
//     { id: 5, name: "Memorial Day", icon: "ribbon", tags:["patriotic"] },
//     { id: 6, name: "Valentine's Day", icon: "heart", tags:["popular"]  },
// ];

function Interest({ handleChange, values }) {
    //Modal state
    const [showAddHolidayModal, setShowAddHolidayModal] = useState(false);
    //to pass into AddButton
    const updateShowAddHolidayModal = () => setShowAddHolidayModal(true);

    //interest list state
    const [allHolidays, setAllHolidays] = useState([]);
    const [selectedHolidays, setSelectedHolidays] = useState([])

    //Later, the useEffect will include fetch or similar method in Axios to get data from the backend. Right now 
    //setting allInterests when this component first mounts - empty bracket as the second parameter
    useEffect(() => {
        axios.get("http://localhost:5000/api/holidays")
        .then(res => {
            console.log("TEST HOLIDAY");
           const allHolidaysDB = res.data;
        setAllHolidays(allHolidaysDB);
        console.log(allHolidaysDB)
        })
    }, [])


    return (
        <Card className="my-3 p-4 interest">
            <Form>
                <div className="row mb-3">
                    <Col>
                        <Form.Label> Holiday </Form.Label>
                    </Col>
                    <Col>
                        <AddButton link={updateShowAddHolidayModal} />
                    </Col>
                </div>
                <div className="row">
                    {/* The selected interests displayed on the add contact page */}
                    {selectedHolidays.map((item) => (
                        <div className="col-auto mb-3">
                            <button className="btn btn-info">
                                <FontAwesomeIcon icon={['fas', item.icon]} style={{ marginRight: "8px" }} />
                                {item.name}
                            </button>
                        </div>
                    ))}

                    {/* popup */}
                    <AddHolidayModal
                        show={showAddHolidayModal}
                        onHide={() => setShowAddHolidayModal(false)}
                        allHolidays={allHolidays}
                        setSelectedHolidays={setSelectedHolidays}
                        selectedHolidays = {selectedHolidays}
                        allHolidays = {allHolidays}
                    // handleChange={handleChange}
                    // values={values}
                    />
                </div>
            </Form>
        </Card>
    );
}

export default Interest
