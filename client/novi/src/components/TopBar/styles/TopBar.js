import styled from 'styled-components'
import { Navbar as BNavbar } from "react-bootstrap"

export const Navbar = styled(BNavbar)` 
    display: flex;
    align-items: center;
    background-image: linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(51,150,255,1) 66%);
    color: white;

    .topbar-brand{
        font-family: 'Lobster', cursive;
        color: white;
        font-size: 2.3rem;
    }
`



