import React from "react"
import { Navbar, Nav, Button, Form, FormControl, Card, ListGroup, Dropdown, DropdownButton } from "react-bootstrap"
import BellIcon from "react-bell-icon"
// import Avatar, { ConfigProvider } from 'react-avatar';
import Avatar, { ConfigProvider, createAvatarComponent, TwitterSource } from 'react-avatar';
import ProfileToggle from "./ProfileToggle"



function TopBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
           
            <Form inline className=" w-70 mx-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>

            <Nav.Link href="#notifications">
                <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                 <i class="fas fa-bell fa-stack-1x fa-inverse"></i>
                </span>
            </Nav.Link>
            <Nav.Item>

            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            </Nav.Item>

   
            <Nav.Item>

            <ProfileToggle/>
            </Nav.Item>

            {/* <ConfigProvider colors={['red', 'green', 'blue']}>
        
            </ConfigProvider> */} 

        </Navbar >
    )
}
export default TopBar

