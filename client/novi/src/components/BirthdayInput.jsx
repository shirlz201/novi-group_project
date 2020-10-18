import React from 'react'
import DatePicker from 'react-datepicker'
import {Form, Row} from "react-bootstrap"

function BirthdayInput({setBirthday, birthday, children, values, handleChange}) {
    return (
             <Form className ="row">
              <Form.Group controlId="exampleForm.ControlInput1" className = "col-md-6 my-auto">
                  {/* <Row>
                    <Form.Label className="col-5 my-auto">Birthday</Form.Label>
                    <Form.Control 
                      name ="birthday"
                      className ="col-5"
                      type="birthday" 
                      placeholder="MM/DD/YYYY" 
                      values = {values.birthday}
                      onChange = {handleChange}/>

                  </Row> */}
                </Form.Group>
                        {children}
             </Form>
    )
}

export default BirthdayInput
