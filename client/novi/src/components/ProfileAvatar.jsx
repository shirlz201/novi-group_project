import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import "./ProfileAvatar.css"
import Avatar, { ConfigProvider, createAvatarComponent, TwitterSource } from 'react-avatar';

function ProfileAvatar(props) {
    const [dropdown, setDropdown] = useState("false")

    const toggleDropdown = () =>{
        setDropdown(!dropdown)
    };

    //Make it so that if anywhere outside the dropsown is closed than the dropdown closes
    const node = useRef();

    const handleClickOutside = e => {
        console.log("clicking anywhere");
        if (node.current.contains(e.target)) {
          // inside click
          return;
        }
        // outside click
        setDropdown(false);
      };
    
      useEffect(() => {
        if (dropdown) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [dropdown]);

    return (
        <div ref ={node} >
            <div onClick = {toggleDropdown} >
            <Avatar className = "hvr-grow" facebookId="100008343750912"
                            size="50" round={true} name="Mark Otto"/>
            </div>
            

            { dropdown &&
            <div className = "profile-avatar-dropdown-menu">
                <ul style={{padding:"0px"}}>
                    <li className="profile-avatar-dropdown-link">Events</li>
                    <li className="profile-avatar-dropdown-link">Contacts</li>
                    <li className="profile-avatar-dropdown-link"> Logout </li>
                </ul>
            </div> }

        </div>
    )
}

ProfileAvatar.propTypes = {

}

export default ProfileAvatar

