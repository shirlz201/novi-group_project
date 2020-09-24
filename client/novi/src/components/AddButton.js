import React from "react";
import Button from "react-bootstrap/Button";

function AddButton({ link }) {
    return (
        <Button variant="success" onClick={() => link()}>
            + Add
        </Button>
    );
}

export default AddButton;
