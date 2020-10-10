
import React, {useState} from "react"
import {Dropdown, Card, FormControl} from "react-bootstrap"
import Avatar, { ConfigProvider, createAvatarComponent, TwitterSource } from 'react-avatar';
import "./ProfileToggle.css"


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
   
    </a>
));

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                {/* <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                /> */}
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);


function ProfileToggle(){
// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it

return(
    <Dropdown className ="col">
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" class ="btn btn-info" style = {{color:"white", width:"10%", backgroundColor:"red"}}>
            <Avatar className = "hvr-grow" facebookId="100008343750912"
                            size="50" round={true} name="Mark Otto" />
      </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu} style = {{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}className ="dropdown-menu-right mt-3">
            <Dropdown.Item eventKey="1">Events</Dropdown.Item>
            <Dropdown.Item eventKey="2">Contacts</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="1">Sign Out</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);
}

export default ProfileToggle