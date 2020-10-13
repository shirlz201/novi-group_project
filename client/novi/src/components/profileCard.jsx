import React from "react"
import { Card, ListGroup } from "react-bootstrap"

function ProfileCard() {
    return (
        <div>
            <Card className=" w-10 float-right" style={{ width: '18rem' }}>
                <Card.Title>Hi Mark!</Card.Title>
                {/* <Card.Header>Featured</Card.Header> */}
                <ListGroup variant="flush">
                    <ListGroup.Item>My Contacts</ListGroup.Item>
                    <ListGroup.Item>My Events</ListGroup.Item>
                    <a href="#"><ListGroup.Item>Sign Out</ListGroup.Item></a>
                </ListGroup>
            </Card>
        </div>
    )
}
export default ProfileCard
