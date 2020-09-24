import React, { useState } from "react";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
console.log(fas);
function AddInterestCard({ id, name, icon, selectedInterests, selected }) {
    const [isSelected, setIsSelected] = useState(false);
    const toggleIsSelected = () => setIsSelected(!isSelected);
    console.log(selected);
    if (isSelected === false) {
        return (
            <button className="btn btn-info" onClick={toggleIsSelected}>
                <FontAwesomeIcon icon={["fas", icon]} />
                {name}
            </button>
        );
    } else {
        return (
            <button className="btn btn-light" onClick={toggleIsSelected}>
                <FontAwesomeIcon icon={["fas", icon]} />
                {name}
            </button>
        );
    }
}

export default AddInterestCard;
