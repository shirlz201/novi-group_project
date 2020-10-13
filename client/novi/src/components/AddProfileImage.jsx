import React, {useState,useEffect}from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image"

function AddProfileImage(props) {

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
                justifyContent: "center"
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
            <div
                style={{

                    className: "mx-auto my-4 d-block",
                    width: "300px",
                    height: "300px",
                    border: "1px dashed black"
                }}
                onClick={() => imageUploader.current.click()}
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
            <Button variant="info">
            + Add Photo
        </Button>
            <br />

            <br />
            <br />
        </div>










        // <div>
        //     {/* <p>hello</p> */}
        //      <Image 
        //      className ="mx-auto my-4 d-block"
        //      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
        //      width ="150px" roundedCircle/>
        // </div>
    )
}

AddProfileImage.propTypes = {

}

export default AddProfileImage

