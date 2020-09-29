import React, { useState, useEffect } from "react";

//import component
import InterestCardList from "./InterestCardList.js";
import AddButton from "./AddButton.js";
import AddInterestModal from "./AddInterestModal.js";

//import boostrap components
import { Card, Form, Col } from 'react-bootstrap'

//import icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);


const allInterestsDB = [
    { id: 1, name: "Basketball", icon: "basketball-ball" },
    { id: 2, name: "Video Game", icon: "gamepad" },
    { id: 3, name: "Travel", icon: "plane" },
    { id: 4, name: "Fishing", icon: "fish" },
    { id: 5, name: "Football", icon: "football-ball" },
    { id: 6, name: "Computer", icon: "desktop" },
];

const selectedInterestsDB = [
    { id: 1, name: "Basketball", icon: "basketball-ball" },
    { id: 6, name: "Computer", icon: "desktop" },
];

function Interest({ handleChange, values }) {
    //Modal state
    const [showAddInterestModal, setShowAddInterestModal] = useState(false);
    //to pass into AddButton
    const updateShowAddInterestModal = () => setShowAddInterestModal(true);

    //interest list state
    const [allInterests, setAllInterests] = useState([]);
    const [selectedInterests, setSelectedInterests] = useState([])

    //Later, the useEffect will include fetch or similar method in Axios to get data from the backend. Right now 
    //setting allInterests when this component first mounts - empty bracket as the second parameter
    useEffect(() => {
        setAllInterests(allInterestsDB)
    }, [])


    return (
        <Card className="my-3 p-4 interest">
            <Form>
                <div className="row mb-3">
                    <Col>
                        <Form.Label>Interest</Form.Label>
                    </Col>
                    <Col>
                        <AddButton link={updateShowAddInterestModal} />
                    </Col>
                </div>
                <div className="row">
                    {/* The selected interests displayed on the add contact page */}
                    <InterestCardList selectedInterests={selectedInterests} />

                    {/* popup */}
                    <AddInterestModal
                        show={showAddInterestModal}
                        onHide={() => setShowAddInterestModal(false)}
                        allInterests={allInterests}
                        selectedInterests={selectedInterests}
                        setSelectedInterests={setSelectedInterests}
                        // handleChange={handleChange}
                        // values={values}
                    />
                </div>
            </Form>
        </Card>
    );
}

export default Interest;
