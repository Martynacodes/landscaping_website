import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements.js';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" onClick={toggle}>
                            About
                        </SidebarLink>
                        <SidebarLink to="services" onClick={toggle}>
                            Services
                        </SidebarLink>
                        <SidebarLink to="ourwork" onClick={toggle}>
                            Our Work
                        </SidebarLink>
                        <SidebarLink to="contact" onClick={toggle}>
                            Contact
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/signin">Get a Quote</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;