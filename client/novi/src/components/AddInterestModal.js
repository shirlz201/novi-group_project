import React , {useState} from "react";

//component
import AddInterestCard from "./AddInterestCard.js";
import AddInterestCardList from "./AddInterestCardList.js";

//bootstrap
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AddInterestModal(props) {
    const [newInterestList, setNewInterestList] = useState([]);
    const updateNewInterestList = () => {
        setNewInterestList();
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Interests
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AddInterestCardList
                    allInterests={props.allInterests}
                    selectedInterests={props.selectedInterests}
                    updateNewInterestList={updateNewInterestList}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddInterestModal;
