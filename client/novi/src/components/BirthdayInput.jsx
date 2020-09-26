import React from 'react'
import DatePicker from 'react-datepicker'
import {Form, Row} from "react-bootstrap"

function BirthdayInput({setBirthday, birthday, children}) {
    return (
             <Form className ="row">
              <Form.Group controlId="exampleForm.ControlInput1" className = "col-md-6 my-auto">
                  <Row>
                    <Form.Label className="col-5 my-auto">Birthday</Form.Label>
                    <Form.Control className ="col-5"type="birthday" placeholder="MM/DD/YYYY" />

                  </Row>
                </Form.Group>
                        {children}
             </Form>
    )
}

export default BirthdayInput
