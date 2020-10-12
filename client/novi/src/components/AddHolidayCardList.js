import React from "react";
import AddHolidayCard from "./AddHolidayCard.js";
import {useState} from "react"

function AddInterestCardList({allHolidays, selectedHolidays, setSelectedHolidays}) {
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


    // const isSelect = (id) => { 
    //     selectedInterests.forEach(selectedInterest => {
    //         if (selectedInterest.id == id) {
    //             return true;
    //         }
    //         return false;}
    //     )
    // };
    
    // // console.log("test" + isSelect(1))
    return (
        <div className="col-12">
            <div className="row">
                {allHolidays.map((item) => (
                    <div className="col-auto">
                        <AddHolidayCard
                            key={item.id}
                            selectedHolidays={selectedHolidays}
                            //passing in the interest object as a prop
                            holiday = {item}
                            setSelectedHolidays = {setSelectedHolidays}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddInterestCardList;
