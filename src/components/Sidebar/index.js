import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle} >
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='AboutUs' onClick={toggle}>
                    About Us
                </SidebarLink>

                <SidebarLink to='PastEvents' onClick={toggle}>
                    Past Events
                </SidebarLink>

                <SidebarLink to='Speakers' onClick={toggle}>
                    Speakers
                </SidebarLink>

                <SidebarLink to='Theme' onClick={toggle}>
                    Theme
                </SidebarLink>

                <SidebarLink to='Contact' onClick={toggle}>
                    Contact
                </SidebarLink>

            </SidebarMenu>

            <SideBtnWrap>
                <SidebarRoute to='/register' onClick={toggle}>Register</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar