import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";

//lists all the sidebar items and the icons they would be styled in
export const SidebarData =[
    {
        title: New,
        path: "/",
        icon:<IoIcons.IoIosAdd />,
        clssName: "nav-text"
    },
    {
        title: Contacts,
        path: "/",
        icon:<IoIcons.IoIosContacts />,
        clssName: "nav-text"
    },
    {
        title: Events,
        path: "/",
        icon:<GiIcons.GiGlassCelebration />,
        clssName: "nav-text"
    },
    {
        title: Calendar,
        path: "/",
        icon:<FaIcons.FaRegCalendarAlt />,
        clssName: "nav-text"
    },
    {
        title: Reminder,
        path: "/",
        icon:<AiIcons.AiOutlineBell />,
        clssName: "nav-text"
    },
]