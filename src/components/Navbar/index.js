import React from "react";
import { FaBars } from "react-icons/fa";

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">TEDx MITE</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="AboutUs">About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="PastEvents">Past Events</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Speakers">Speakers</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Theme">Theme</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/Register">Register</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
