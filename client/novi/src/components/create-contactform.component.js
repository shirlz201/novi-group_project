import React, { Component } from 'react';
import axios from 'axios';

export default class CreateContactForm extends Component {

    constructor(props) {

        // always need to call the super when defining the constructor of a subclass
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onChangePhotoUrl = this.onChangePhotoUrl.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.onChangeHoliday = this.onChangeHoliday.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onChangeInterest = this.onChangeInterest.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        // set the initial state of the component by assign to an obj to this.state
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            notes: '',
            photoUrl: '',

            birthday: new Date(),
            holidays: '',
            events: [],
            interests: []
        }
    }
    // The methods below will be used to update the state properties 
    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }
    onChangePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeNotes(e) {
        this.setState({
            notes: e.target.value
        })
    }

    onChangePhotoUrl(e) {
        this.setState({
            photoUrl: e.target.value
        })
    }
    // double check below

    onChangeBirthday(e) {
        this.setState({
            date: date
        })
    }
    onChangeHoliday(e) {
        this.setState({
            holidays: e.target.value
        })
    }
    onChangeEvent(e) {
        this.setState({
            events: e.target.value
        })
    }
    onChangeInterest(e) {
        this.setState({
            interests: e.target.value
        })
    }

    //handling the submit event of the form
    // e.preventDefault() prevents the default HTML form submit behavior from taking place
    onSubmit(e) {
        e.preventDefault();
        const contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            notes: this.state.notes,
            photoUrl: this.state.photoUrl,
            birthday: this.state.birthday,
            holidays: this.state.holidays,
            events: this.state.events,
            interests: this.state.interests

        };
        //logging contact to console
        console.log(contact);
        // once form is submitted - user is taken back to home page
        //helps connect code to our backend
        axios.post('http://localhost:5000/add', contact)
        .then(res => console.log(res.data));


        // after a user is ended - this will keep them on the same pg to submit more
        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Add New Contact</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.lastName}
                            onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.phoneNumber}
                            onChange={this.onChangePhoneNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Notes: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.notes}
                            onChange={this.onChangeNotes}
                        />
                    </div>
                    <div className="form-group">
                        <label>Photo: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.photoUrl}
                            onChange={this.onChangePhotoUrl}
                        />
                    </div>
                    <div className="form-group">
                        <label>Birthday: </label>
                        <div>
                            <DatePicker
                                selected={this.state.birthday}
                                onChange={this.onChangeBirthday}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Holiday: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.holidays}
                            onChange={this.onChangeHoliday}
                        />
                    </div>
                    <div className="form-group">
                        <label>Upcoming Events: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.events}
                            onChange={this.onChangeEvent}
                        />
                    </div>
                    <div className="form-group">
                        <label>Interests: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.interests}
                            onChange={this.onChangeInterest}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Contact Form" className="btn btn-primary" />
                    </div>
                </form>
            </div>

        )
    }



}