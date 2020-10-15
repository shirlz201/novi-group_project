import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik"

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
console.log(fas);
function AddHolidayCard({ holiday, selectedHolidays, setSelectedHolidays }) {
    //value and helper method from Formik context
    const {values, setFieldValue } = useFormikContext();

    const [isSelected, setIsSelected] = useState(false);


    const toggleIsSelected = () => {
        setIsSelected(!isSelected)
    }

    const removeHoliday= (id) => {
        toggleIsSelected()
        // filter by id and keep all selected interests except the one with a matching id
        const newList = selectedHolidays.filter((item) => item.id !== id);
        //update the selectedInterests state which is an array of Interest objects
        setSelectedHolidays(newList)
    }

    const addHoliday = (item) => {
        toggleIsSelected()
        //update the seletedInterests state which is an array of Interest objects
        setSelectedHolidays(prev => [...prev, item])
    }

    useEffect(
        () => {
             //update the interests in the formik object whenevet the selectInterests changes
            setFieldValue("holidays", selectedHolidays)
        }, [selectedHolidays]);


    //checks to see if the interest is already in the selectedInterests state
    //returns a boolean true if thr array contains the interest
    const alreadySelected = selectedHolidays.some(item => item.id === holiday.id)

    if (alreadySelected) {
        return (
            <button
                className="btn btn-light my-2"
                onClick={() => removeHoliday(holiday.id)}>
                <FontAwesomeIcon icon={["fas", holiday.icon]} style={{ marginRight: "8px" }} />
                {holiday.name}
            </button>
        );
    } else {
        return (
            <button
                className="btn btn-info my-2"
                onClick={() => addHoliday(holiday)}>
                <FontAwesomeIcon icon={["fas", holiday.icon]} style={{ marginRight: "8px" }} />
                {holiday.name}
            </button>
        );
    }
}

export default AddHolidayCard;
