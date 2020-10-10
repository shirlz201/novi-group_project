import React from "react"
import { Navbar, Nav, Button, Form, FormControl, Card, ListGroup } from "react-bootstrap"
import BellIcon from "react-bell-icon"
// import Avatar, { ConfigProvider } from 'react-avatar';
import Avatar, { ConfigProvider, createAvatarComponent, TwitterSource } from 'react-avatar';
import profileCard from "./ProfileCard";



function TopBar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Form inline className=" w-70 mx-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>

            <Nav.Link href="#notifications">
                <BellIcon>width='40' active={false} animate={false}</BellIcon>
            </Nav.Link>

            <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>

            <ConfigProvider colors={['red', 'green', 'blue']}>
                <Navbar>
                    <a href="#">
                        <Avatar facebookId="100008343750912"
                            size="60" round={true} name="Mark Otto" onClick={profileCard} />
                    </a>

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

        </Navbar >
    )
}
export default TopBar

