import React, { useState } from "react";

//import component
import InterestCardList from "./InterestCardList.js";
import AddButton from "./AddButton.js";
import AddInterestModal from "./AddInterestModal.js";

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

function Interest() {
    //Modal state
    const [showAddInterestModal, setShowAddInterestModal] = useState(false);
    //to poss into AddButton
    const updateShowAddInterestModal = () => setShowAddInterestModal(true);

    //interest list state
    const [selectedInterests, setSelectedInterests] = useState(
        selectedInterestsDB
    );
    const updateSelectedInterests = (selectedInterests) => {
        setSelectedInterests(selectedInterests);
    };

    return (
        <div className="container">
            <div className="row">
                <h1>Interest</h1>

                <AddButton link={updateShowAddInterestModal} />
            </div>
            <div className="row">
                <InterestCardList selectedInterests={selectedInterests} />

                <AddInterestModal
                    show={showAddInterestModal}
                    onHide={() => setShowAddInterestModal(false)}
                    allInterests={allInterestsDB}
                    selectedInterests={selectedInterests}
                    updateSelectedInterests={updateSelectedInterests}
                />
            </div>
        </div>
    );
}

export default Interest;
