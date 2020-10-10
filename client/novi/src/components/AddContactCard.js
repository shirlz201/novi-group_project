import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Card, Row} from 'react-bootstrap'

function AddContactCard({values, handleChange}) {

    return (
        
            <Form>
                <Row>
                {/* To use the Formik values we need to set the form.control name, value, and onChange props  */}
                <Form.Group className ="col-6" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        name ="firstName"
                        type="firstName" 
                        placeholder="First name"
                        value={values.firstName}
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group className ="col-6"  controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        name="lastName" 
                        type="lastName" 
                        placeholder="Last name"
                        value={values.lastName}
                        onChange={handleChange}/>
                </Form.Group>

                </Row>
               <Row>
               <Form.Group className ="col-6"  controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                        name="phoneNumber"
                        type="phoneNumber" 
                        placeholder="(000)000-0000"
                        value={values.phoneNumber}
                        onChange={handleChange}/>
                </Form.Group>
                <Form.Group className ="col-6" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        name="email"
                        type="email" 
                        placeholder="example@gmail.com" 
                        value={values.email}
                        onChange={handleChange}/>
                </Form.Group>

               </Row>
                
                {/* <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control type="birthday" placeholder="MM/DD/YYYY" />
                </Form.Group> */}

                
                {/*<Form>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Send Text" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="Buy Gift" type={type} id={`inline-${type}`} />

                        </div>
                    ))}
                </Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Interests</Form.Label>
                    <Form.Control as="select">
                        <option>Art</option>
                        <option>Tech</option>
                        <option>Sports</option>
                        <option>Travel</option>
                        <option>Fashion</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Events</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>Wedding @ Chandelier 6PM</option>
                        <option>Birthday Dinner @ Reillys 8PM</option>
                        <option>Sports Party @ Ambers 4PM</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Favorite cake, allergies, hobbies, etc." />
                </Form.Group> */}
                {/* <Button variant="primary" type="submit"> Add Contact
                
  </Button> */}
            </Form>

    
    );

    

}

export default AddContactCard;
