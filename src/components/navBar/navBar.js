import React, { useState, useEffect } from 'react'
import { Nav, NavBarContainer, NavLogo, ImgLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn } from "./navbarElements"
import { FaBars } from "react-icons/fa"
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import Logo from "../../images/logo1.png"

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrollNav}>
                    <NavBarContainer>
                        <ImgLogo src={Logo} />
                        <NavLogo to="/home" onClick={toggleHome}>Doble Tilde</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/about"
                                    // smooth={true}
                                    duration={500}
                                    // spy={true}
                                    exact="true"
                                    offset={0}

                                >Nosotros</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/products"
                                    // smooth={true}
                                    duration={500}
                                    // spy={true}
                                    exact="true"
                                    offset={0}

                                >Productos</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/contact"
                                    // smooth={true}
                                    duration={500}
                                    // spy={true}
                                    exact="true"
                                    offset={0}

                                >Contacto</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup"
                                    // smooth={true}
                                    duration={500}
                                    // spy={true}
                                    exact="true"
                                    offset={0}
                                >Regístrate</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signIn"> Iniciar sesión</NavBtnLink>
                        </NavBtn>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar