import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik"
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image"
import { roundToNearestMinutes } from "date-fns";


function AddProfileCardTest(photo, selectedPhoto, setSelectedPhoto) {
    //value and helper method from Formik context
    const {values, setFieldValue } = useFormikContext();

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);


    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }


    };


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid gray"

            }}
        >
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                    display: "none"
                }}
            />
            <br />

            <div
                style={{

                    className: "mx-auto my-4 d-block",
                    width: "250px",
                    height: "250px",
                    border: "1px dashed black"
                }}
            >
                <img
                    ref={uploadedImage}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "acsolute"
                    }}
                />
            </div>
            <br />
            <Button
                variant="info"
                onClick={() => imageUploader.current.click()}>
                + Add Photo
    </Button>
            <br />

            <br />
            <br />
        </div>

    )
}

AddProfileCard.propTypes = {

}

export default AddProfileCardTest

