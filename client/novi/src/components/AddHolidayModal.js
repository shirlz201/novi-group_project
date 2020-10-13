import React , {useState} from "react";

//component
import AddHolidayCard from "./AddHolidayCard.js";
import AddHolidayCardList from "./AddHolidayCardList.js";

//bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AddHolidayModal({handleChange, values, setSelectedHolidays, ...props}) {
  
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Holidays
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AddHolidayCardList
                    allHolidays={props.allHolidays}
                    selectedHolidays={props.selectedHolidays}
                    setSelectedHolidays = {props.setSelectedHolidays}
                    // handleChange = {handleChange}
                    // values = {values}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddHolidayModal;