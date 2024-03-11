import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  background-color: rgba(19, 51, 76, 0.8);
  color: #ffffff;
  padding: 1rem 7.5rem 0.5rem 7.5rem;
  border-radius: 0px 0px 2px 2px;
  height: 184px;
`;

export const ContainerTop = styled.div`
  padding: 1rem 7.5rem 0.5rem 7.5rem;
  display: flex;
  flex-direction: row;
`;

export const NavbarHeading = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 61px;
  letter-spacing: 0em;
  align-items: center;
  width: 464px;
  height: 80px;
  margin-left: 30px
`;

export const IgnitingLogo = styled.img`
margin-left: 0px;;
width: 81.9px;
height: 81.9px;
`

export const JoinUsButtonContainer = styled(ReactRouterLink) `
height: 59.05px;
width: 200px;
text-decoration: none;

background-color: rgba(19, 51, 76, 0);
margin-left: auto;
border: 2px solid #FFFFFF;
border-radius: 2px;

text-align: center;
`

export const JoinUsButton = styled.div`
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 44px;

color: #FFFFFF;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px 0;
  margin-left: 40px;
  margin-right: 425px;
`;

export const NavbarLink = styled(ReactRouterLink)`
  display: block;
  font-size: 26px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    color: #FD5F00;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    padding-bottom: 6px
  }s
`;