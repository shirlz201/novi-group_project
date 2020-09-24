import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import CreateContactForm from "./components/create-contactform.component";
import AddProfilePic from "./components/add-profilepic.component";

function App() {
    //useRef hook is used
    const uploadedImage = React.useRef(null);
    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            /* FR constructor is used to read the content of the file & attached to content 
            to the img attached REF to */
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    }


        return (
            <Router>
                <div className="container">
                    <Navbar />
                    <br />
                    {/* Route paths go here */}
                    <Route path="/contact" component={CreateContactForm} />
                    <Route path="/contact" component={AddProfilePic} />

                </div>

                {/* <div
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
                            height: "60px",
                            width: "60px",
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
                        Click to upload Image
                </div> */}
            </Router>
        );

    }

    export default App;
