import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconsLink
} from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="AboutUs">College</FooterLink>
                            <FooterLink to="PastEvents">Organizers</FooterLink>
                            <FooterLink to="AboutUs">Coordinators</FooterLink>
                            <FooterLink to="AboutUs">Developers</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="AboutUs">Instagram</FooterLink>
                            <FooterLink to="PastEvents">Facebook</FooterLink>
                            <FooterLink to="AboutUs">Website</FooterLink>
                            <FooterLink to="AboutUs">LinkedIn</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        {/* <SocialLogo to="/">TEDx MITE</SocialLogo> */}
                        <WebsiteRights>
                            TEDx MITE © {new Date().getFullYear()} All rights
                            reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconsLink
                                href="//www.facebooks.com"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink
                                href="//www.instagram.com"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink
                                href="//www.youtube.com"
                                target="_blank"
                                aria-label="Youtube"
                            >
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink
                                href="//www.linkedin.com"
                                target="_blank"
                                aria-label="Linkedin"
                            >
                                <FaLinkedinIn />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
