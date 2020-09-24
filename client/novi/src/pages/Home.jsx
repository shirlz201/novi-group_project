import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            {/* Link is used in react router like anchor <a href=""></a> elements */}
            <Link to="/AddContact"> Add Contact </Link>
        </div>
    )
}

Home.propTypes = {
}

export default Home

