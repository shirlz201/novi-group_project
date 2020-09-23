import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
import AddContact from "./pages/AddContact"
import Container from 'react-bootstrap/Container';

// import Navbar from "./components/navbar.component";
import CreateUser from "./components/create-user.component";

function App() {
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
                    {/* <Route path="/user" component={CreateUser} /> */}
                </Switch>
        </Router>
    );
}

export default App;
