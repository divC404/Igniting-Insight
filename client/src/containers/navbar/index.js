import React from "react";
import { Container, NavbarHeading, IgnitingLogo, ContainerTop, JoinUsButton, JoinUsButtonContainer, NavbarLinkContainer, NavbarLink } from "./styles/navbar";
import logo from "../../images/home_logo.png"
import * as ROUTES from "../../constants/routes";


function Navbar() {
  return (
    <Container>
      <ContainerTop>
        <IgnitingLogo src={logo} />
        <NavbarHeading>Igniting Insight</NavbarHeading>
        <JoinUsButtonContainer to={ROUTES.JOIN_US}>
          <JoinUsButton>Join us</JoinUsButton>
        </JoinUsButtonContainer>
      </ContainerTop>
      <NavbarLinkContainer>
        <NavbarLink to={ROUTES.HOME}>Home</NavbarLink>
        <NavbarLink to={ROUTES.ABOUT_US}>About</NavbarLink>
        <NavbarLink to={ROUTES.SPONSORS}>Sponsors</NavbarLink>
        <NavbarLink to={ROUTES.TESTIMONIALS}>Initiatives</NavbarLink>
        <NavbarLink to={ROUTES.BLOGS}>Blog</NavbarLink>
        <NavbarLink to={ROUTES.CONTACT_US}>Contact</NavbarLink>
      </NavbarLinkContainer>
    </Container>
  )
}

export default Navbar;
