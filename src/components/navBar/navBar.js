import React from 'react'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn } from "./navbarElements"
import { FaBars } from "react-icons/fa"

const NavBar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">Doble Tilde</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Nosotros</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="products">Productos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contacto</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/SignIn"> Sign In</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default NavBar