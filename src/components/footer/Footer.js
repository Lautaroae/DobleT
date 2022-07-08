import React from 'react'
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRight, SocialIcon, SocialIconLink } from "./FooterElements"
import { FaInstagram, FaWhatsapp, } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Nosotros </FooterLinkTitle>
                            <FooterLink to="/SignIn">Nosotros</FooterLink>
                            <FooterLink to="/SignIn">Nosotros</FooterLink>
                            <FooterLink to="/SignIn">Nosotros</FooterLink>
                            <FooterLink to="/SignIn">Nosotros</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Nosotros </FooterLinkTitle>
                            <FooterLink to="/SignIn">Nosotros</FooterLink>
                            <FooterLink to="/SignIn">Nosotros</FooterLink>
                            <FooterLink to="/SignIn">Nosotros</FooterLink>
                            <FooterLink to="/SignIn">Nosotros</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Nosotros </FooterLinkTitle>
                            <FooterLink to="/SignIn">Nosotros</FooterLink>
                            <FooterLink to="/SignIn">Nosotros</FooterLink>
                            <FooterLink to="/SignIn">Nosotros</FooterLink>
                            <FooterLink to="/SignIn">Nosotros</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Doble Tilde
                        </SocialLogo>
                        <WebsiteRight>Doble Tilde © {new Date().getFullYear()} All rigths reserved.</WebsiteRight>
                        <SocialIcon>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Gmail">
                                <SiGmail />
                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer