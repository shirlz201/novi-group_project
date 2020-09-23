import React from 'react';
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";

function App() {
    return (
            <div className="container">
                {/* <Navbar /> */}
                <br />
                {/* Route paths go here */}
                <Route path="/user" component={CreateUser} />
            </div>
    );
}

export default App;
