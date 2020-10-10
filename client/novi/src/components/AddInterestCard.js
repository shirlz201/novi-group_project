import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik"

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
console.log(fas);
function AddInterestCard({ interest, selectedInterests, setSelectedInterests }) {
    //value and helper method from Formik context
    const {values, setFieldValue } = useFormikContext();

    const [isSelected, setIsSelected] = useState(false);


    const toggleIsSelected = () => {
        setIsSelected(!isSelected)
    }

    const removeInterest = (id) => {
        toggleIsSelected()
        // filter by id and keep all selected interests except the one with a matching id
        const newList = selectedInterests.filter((item) => item.id !== id);
        //update the selectedInterests state which is an array of Interest objects
        setSelectedInterests(newList)
    }

    const addInterest = (item) => {
        toggleIsSelected()
        //update the seletedInterests state which is an array of Interest objects
        setSelectedInterests(prev => [...prev, item])
    }

    useEffect(
        () => {
             //update the interests in the formik object whenevet the selectInterests changes
            setFieldValue("interest", selectedInterests)
        }, [selectedInterests]);


    //checks to see if the interest is already in the selectedInterests state
    //returns a boolean true if thr array contains the interest
    const alreadySelected = selectedInterests.some(item => item.id === interest.id)

    if (alreadySelected) {
        return (
            <button
                className="btn btn-light my-2"
                onClick={() => removeInterest(interest.id)}>
                <FontAwesomeIcon icon={["fas", interest.icon]} style={{ marginRight: "8px" }} />
                {interest.name}
            </button>
        );
    } else {
        return (
            <button
                className="btn btn-info my-2"
                onClick={() => addInterest(interest)}>
                <FontAwesomeIcon icon={["fas", interest.icon]} style={{ marginRight: "8px" }} />
                {interest.name}
            </button>
        );
    }
}

export default AddInterestCard;
