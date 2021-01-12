import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"
import { EventContainer } from "../containers/Event.jsx"
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar"
import "./Home.css"

function Home(props) {
    return (
        <div className = "home">
            <TopBar />
            <Row>
                <Col md={2} sm={12} style={{ width: "10%" }}>
                    <Sidebar />
                </Col>
                <Col md={10}>
                   <Row>
                    {/* Link is used in react router like anchor <a href=""></a> elements */}
                    <Link to="/AddContact"> Add Contact </Link> {' '}
                    <Link to="/AddEvent">Add Event</Link>
                    </Row>
                    <EventContainer />
                </Col>
            </Row>

        </div>
    )
}

Home.propTypes = {
}

export default Home

