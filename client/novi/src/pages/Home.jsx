import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import {EventContainer} from "../containers/Event.jsx"

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            {/* Link is used in react router like anchor <a href=""></a> elements */}
            <Link to="/AddContact"> Add Contact </Link> <br/>
            <Link to="/AddEvent">Add Event</Link>
            <EventContainer/>
        </div>
    )
}

Home.propTypes = {
}

export default Home

