import React, { useState } from "react";

//component
import AddHolidayCard from "./AddHolidayCard.js";
import AddHolidayCardList from "./AddHolidayCardList.js";

//bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

//Search
import Fuse from 'fuse.js';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);





function AddHolidayModal({ handleChange, values, selectedHolidays, setSelectedHolidays, allHolidays, ...props }) {

    const fuse = new Fuse(allHolidays, {
        keys: [
            'name',
        ]
    });
    const [query, updateQuery] = useState('');
    const onSearch = ({ currentTarget }) => {
        updateQuery(currentTarget.value);
    }
    const results = fuse.search('Thanksgiving');
    const characterResults = results.map(character => character.item);
    console.log(characterResults)


    return (

        < Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Holidays
                </Modal.Title>
                <Form.Group className="col-6" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        name="Search"
                        type="text"
                        placeholder="Search"
                        value={query}
                        onChange={onSearch} />
                </Form.Group>
            </Modal.Header>

            <Modal.Body>
                <AddHolidayCardList
                    allHolidays={allHolidays}
                    selectedHolidays={selectedHolidays}
                    setSelectedHolidays={setSelectedHolidays}
                // handleChange = {handleChange}
                // values = {values}
                />

                {/* Optional section with popular holidays */}

                {/*                
                <h5>Popular:</h5>
                <Row>
                    {allHolidays
                        // Show holidays in popular category
                        .filter(item => item.tags.includes("popular"))
                        //Hide holidays that have already been selected
                        .filter(item => !selectedHolidays.some(holiday => item.id === holiday.id))
                        // Show all the popular holiday option still available
                        .map((item) => (
                            <div className="col-auto mb-3">
                                <button className="btn btn-info">
                                    <FontAwesomeIcon icon={['fas', item.icon]} style={{ marginRight: "8px" }} />
                                    {item.name}
                                </button>
                            </div>
                        ))}


                </Row> */}
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default AddHolidayModal;