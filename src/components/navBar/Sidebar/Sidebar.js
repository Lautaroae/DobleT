import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrapper, SidebarRoute } from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/About" onClick={toggle}>
                        Nosotros
                    </SidebarLink>
                    <SidebarLink to="/Products" onClick={toggle}>
                        Productos
                    </SidebarLink>
                    <SidebarLink to="/Contact" onClick={toggle}>
                        Contacto
                    </SidebarLink>
                    <SidebarLink to="/SignUp" onClick={toggle}>
                        Sign  Up
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrapper>
                    <SidebarRoute to="/SignIn">Sign In</SidebarRoute>
                </SidebarBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar