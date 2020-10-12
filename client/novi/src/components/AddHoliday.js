import React, { useState, useEffect } from "react";

//import component
import InterestCardList from "./InterestCardList.js";
import AddButton from "./AddButton.js";
import AddHolidayModal from "./AddHolidayModal.js";

//import boostrap components
import { Card, Form, Col } from 'react-bootstrap'

//import icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);


const allHolidaysDB = [
    { id: 1, name: "Christmas", icon: "basketball-ball" },
    { id: 2, name: "Thanksgiving", icon: "gamepad" },
    { id: 3, name: "New Year's Day", icon: "plane" },
    { id: 4, name: "New Year's Eve", icon: "fish" },
    { id: 5, name: "Memorial Day", icon: "football-ball" },
    { id: 6, name: "Valentine's Day", icon: "desktop" },
];

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
        setAllHolidays(allHolidaysDB)
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
                    {/* <InterestCardList selectedHolidays={selectedHolidays} /> */}

                    {/* popup */}
                    <AddHolidayModal
                        show={showAddHolidayModal}
                        onHide={() => setShowAddHolidayModal(false)}
                        allHolidays={allHolidays}
                        setSelectedHolidays={setSelectedHolidays}
                        // handleChange={handleChange}
                        // values={values}
                    />
                </div>
            </Form>
        </Card>
    );
}

export default Interest;
