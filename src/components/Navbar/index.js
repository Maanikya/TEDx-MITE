import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

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

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <img
                            src={require("../../images/Logo.jpg")}
                            width={"250px"}
                            height={"80px"}
                        />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="AboutUs"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                // activeClass="active"
                            >
                                About Us
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="PastEvents"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-60}
                                // activeClass="active"
                            >
                                Past Events
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="Speakers"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                // activeClass="active"
                            >
                                Speakers
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="Theme"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                // activeClass="active"
                            >
                                Theme
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="Contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                // activeClass="active"
                            >
                                Contact
                            </NavLinks>
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
