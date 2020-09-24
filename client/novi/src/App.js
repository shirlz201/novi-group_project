import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";
import Interest from "./components/AddInterest.js";

function App() {
    return (
        <div>
            <Interest />
        </div>
    );
}

export default App;
