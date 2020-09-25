import React from 'react'
import DatePicker from 'react-date-picker'
import {Form} from "react-bootstrap"

function BirthdayInput({setBirthday, birthday}) {
    return (
        <div>
             <Form>
              <div className="form-group row justify-content-center my-2">
                        <label className ="col-2">Birthday: </label>
                        <div className ="col-2">
                            <DatePicker
                              value={birthday}
                              onChange={setBirthday}
                            />
                        </div>
               </div>
               </Form>
        </div>
    )
}

export default BirthdayInput
