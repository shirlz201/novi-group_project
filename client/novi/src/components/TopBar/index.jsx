import React from "react"
import { Nav, Button, Form, FormControl, Card, ListGroup, Dropdown, DropdownButton } from "react-bootstrap"
import BellIcon from "react-bell-icon"
// import Avatar, { ConfigProvider } from 'react-avatar';
import Avatar, { ConfigProvider, createAvatarComponent, TwitterSource } from 'react-avatar';
import ProfileToggle from "../ProfileToggle"
import ProfileAvatar from "../ProfileAvatar"
import ProfileCard from "../ProfileCard"
import { Navbar } from "./styles/TopBar"



function TopBar() {
    return (
        <Navbar>
            <Navbar.Brand className="topbar-brand" href="#home">Novi</Navbar.Brand>

            <Form inline className=" w-70 mx-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>

            <Nav.Link href="#notifications">
                <span class="fa-stack" style={{ fontSize: "1.5em" }}>
                    <i class="fas fa-circle fa-stack-2x" style={{ color: "rgb(0,0,0,0.2)" }}></i>
                    <i class="fas fa-bell fa-stack-1x fa-inverse"></i>
                </span>
            </Nav.Link>
            <Nav.Item>

                <p style={{ margin: 0 }}>
                    Signed in as: <a href="#login">Mark Otto</a>
                </p>
            </Nav.Item>
{/* 
            <Nav.Item>

                <ProfileToggle />

            </Nav.Item> */}

            <Nav.Item>


                <ProfileAvatar />
            </Nav.Item>

            {/* <ConfigProvider colors={['red', 'green', 'blue']}>
        
            </ConfigProvider> */}

        </Navbar >
    )
}
export default TopBar

