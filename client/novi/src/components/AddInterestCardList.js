import React from "react";
import AddInterestCard from "./AddInterestCard.js";
import {useState} from "react"

function AddInterestCardList({allInterests, selectedInterests, updateSelectedInterests,}) {
    // let newArray = allInterests.map((interest) => {
    //     selectedInterests.forEach(selectedInterest => {
    //         if (selectedInterest.id == interest.id) {
    //             let object = {
    //                 id: interest.id,
    //                 name: interest.name,
    //                 icon: interest.icon,
    //                 selected: true,
    //             };
    //             return object;
    //         } else {
    //             let object = {
    //                 id: interest.id,
    //                 name: interest.name,
    //                 icon: interest.icon,
    //                 selected: false,
    //             };
    //             return object;
    //         }
    //     })
    // });
    // console.log(newArray)
    
    // this may need to be moved up but used to save with formik
    const [ interests, setInterests] =useState([])


    const isSelect = (id) => { 
        selectedInterests.forEach(selectedInterest => {
            if (selectedInterest.id == id) {
                return true;
            }
            return false;}
        )
    };
    
    // console.log("test" + isSelect(1))
    return (
        <div className="col-12">
            <div className="row">
                {allInterests.map((interest) => (
                    <div className="col-auto">
                        <AddInterestCard
                            key={interest.id}
                            selectedInterests={selectedInterests}
                            selected={isSelect(interest.id)}
                            
                            // to save the interests to the formik object
                            interests = {interests}
                            setInterests = {setInterests}
                            // selected={interest.selected}
                            {...interest}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddInterestCardList;
