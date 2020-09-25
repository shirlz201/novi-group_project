import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
import AddContact from "./pages/AddContact"
import Container from 'react-bootstrap/Container';
import Navbar from "./components/TopBar";
import CreateUser from "./components/create-user.component";
import Sidebar from './components/Sidebar';
import CreateContactForm from "./components/AddContactCard";


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
                <Switch>
                    {/* "exact" is needed in this route, otherwise it would match all paths starting with "/" */}
                    {/* Route paths go here */}
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/addContact">
                        <AddContact />
                    </Route>
                    <Route path="/">
                        <Home /> 
                    </Route>
                    {/* <Route path="/user" component={CreateUser} /> */}
                </Switch>
        </Router>
    );
}



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
                // </div> */
                
            // </Router>
        // );

    }

    export default App;
