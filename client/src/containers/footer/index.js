import React from "react";
import {
  Container,
  FooterHeading,
  ConsentWarning,
  FormContainer,
  FormInnerContainer,
  FormInnerInnerContainer,
  FieldName,
  FieldText,
  FooterLinkContainer,
  FooterLink,
  BreakLine,
  CopyRightText,
} from "./styles/footer";
import * as ROUTES from "../../constants/routes";

import { Button } from "../../components/index";

function Footer() {
  return (
    <Container>
      <FooterHeading>Show Us Your Support</FooterHeading>
      <ConsentWarning>
        By filling this form you provide us the consent to send you promotional
        emails
      </ConsentWarning>
      <FormContainer>
        <FormInnerContainer>
          <FormInnerInnerContainer>
            <FieldName>Name</FieldName>
            <FieldText placeholder="John Doe"></FieldText>
          </FormInnerInnerContainer>
          <FormInnerInnerContainer>
            <FieldName>Email</FieldName>
            <FieldText placeholder="Email"></FieldText>
          </FormInnerInnerContainer>
        </FormInnerContainer>
        <Button content="Submit" />
      </FormContainer>
      <FooterLinkContainer>
        <FooterLink to={ROUTES.ABOUT_US}>About</FooterLink>
        <FooterLink to={ROUTES.TESTIMONIALS}>Initiatives</FooterLink>
        <FooterLink to={ROUTES.BLOGS}>Blog</FooterLink>
        <FooterLink to={ROUTES.CONTACT_US}>Contact</FooterLink>
      </FooterLinkContainer>
      <BreakLine />
      <CopyRightText>
        Ⓒ 2021 Igniting Insight - All Rights Reserved Developed by Igniting
        Insight Technical Team
      </CopyRightText>
    </Container>
  );
}

export default Footer;
