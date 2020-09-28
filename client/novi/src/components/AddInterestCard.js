import React, { useState, useEffect } from "react";
import {useFormikContext} from "formik"

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
console.log(fas);
function AddInterestCard({ id, name, icon, selectedInterests, selected, interests, setInterests }) {
    //value and helper method from Formik context
    const { values, setFieldValue } = useFormikContext();
    
    const [isSelected, setIsSelected] = useState(false);
   

    const toggleIsSelected = () => {
        setIsSelected(!isSelected)
    }
    
    const removeInterest = (name) =>{
        toggleIsSelected()
        // filter by name
        const newList = values.interest.filter((item) => item !== name);
        //save the interests in the state of the addInterestCardList
        setInterests(newList)
        //save the interests in the formik object
        setFieldValue("interest",newList); 
    }

    const addInterest = (name) =>{
        toggleIsSelected()
         //update the interests in the state of the addInterestCardList
        setInterests(prev => [...prev, name])
        //update the interests in the formik object
        // console.log(interests)
        // setFieldValue("interest", interests)
    }

    useEffect( 
        () => {
            setFieldValue("interest", interests)
        }, [interests]);

   
    // console.log(interests);
    if (isSelected === false) {
        return (
            <button 
            className="btn btn-info my-2" 
            onClick={()=>addInterest(name)}>
                <FontAwesomeIcon icon={["fas", icon]} style={{marginRight: "8px"}} />
                {name}
            </button>
        );
    } else {
        return (
            <button 
            className="btn btn-light my-2" 
            onClick={() => removeInterest(name)}>
                <FontAwesomeIcon icon={["fas", icon]} style={{marginRight: "8px"}}/>
                {name}
            </button>
        );
    }
}

export default AddInterestCard;
