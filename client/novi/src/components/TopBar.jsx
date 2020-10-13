import React from "react"
import { Navbar, Nav, Button, Form, FormControl, Card, ListGroup, Dropdown, DropdownButton } from "react-bootstrap"
import BellIcon from "react-bell-icon"
// import Avatar, { ConfigProvider } from 'react-avatar';
import Avatar, { ConfigProvider, createAvatarComponent, TwitterSource } from 'react-avatar';
import ProfileToggle from "./ProfileToggle"
import ProfileCard from "./ProfileCard"




function TopBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
           
            <Form inline className=" w-70 mx-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>

            <Nav.Link href="#notifications">
                <span class="fa-stack" style={{ fontSize: "1.5em"}}>
                 <i class="fas fa-circle fa-stack-2x" style={{ color: "rgb(0,0,0,0.2)"}}></i>
                 <i class="fas fa-bell fa-stack-1x fa-inverse"></i>
                </span>
            </Nav.Link>
            <Nav.Item>

            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            </Nav.Item>

   
            <ConfigProvider colors={['red', 'green', 'blue']}>
                <Navbar>
                    {/* <a href="#">
                        <Avatar facebookId="100008343750912"
                            size="60" round={true} name="Mark Otto" onClick={ProfileCard} />
                    </a> */}

                    {/* <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Title>Hi Mark!</Card.Title>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>My Contacts</ListGroup.Item>
                            <ListGroup.Item>My Events</ListGroup.Item>
                            <a href="#"><ListGroup.Item>Sign Out</ListGroup.Item></a>
                        </ListGroup>
                    </Card> */}


                </Navbar>
            </ConfigProvider>
            <Nav.Item>

            <ProfileToggle/>
            </Nav.Item>

            {/* <ConfigProvider colors={['red', 'green', 'blue']}>
        
            </ConfigProvider> */} 

        </Navbar >
    )
}
export default TopBar

