import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom'
import { SidebarData } from "./SidebarData"
import './Sidebar.css';
import { IconContext } from 'react-icons'

function Sidebar() {
    //setSidebar a function that updates the state and when its false the sidebar is not showing
    const [sidebar, setSidebar] = useState(false)

    //updates the value to whatever the opposite of it is
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        //Lets you customize all icons in here on a top level so you dont have to individually place a color to class to each icon
        //Play aroud with the color and change them to any you llike guys
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    //Import bars icon from fontawesome using react. Instead of having a bunch of icon imports you use the (.) to call the other icons from Font Awesome
                    //Also when clicked it does the oposite of when it was not clicked if that makes sense I am tired lol
                    //Its now 3:06am and I am up struggling lol
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div> 
            // If true when icon is clicked the sidebar the sidebar will show else hide it
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                //It will close menu when any of the items are clicked
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            //Import x looking icon thing from Ant Design Icons from react-icons.github.io
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    //Maps through data from SidebarData.js and lists it
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.clssName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
