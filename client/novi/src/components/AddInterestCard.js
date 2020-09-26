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
            <button className="btn btn-info my-2" onClick={toggleIsSelected}>
                <FontAwesomeIcon icon={["fas", icon]} style={{marginRight: "8px"}} />
                {name}
            </button>
        );
    } else {
        return (
            <button className="btn btn-light my-2" onClick={toggleIsSelected}>
                <FontAwesomeIcon icon={["fas", icon]} style={{marginRight: "8px"}}/>
                {name}
            </button>
        );
    }
}

export default AddInterestCard;
