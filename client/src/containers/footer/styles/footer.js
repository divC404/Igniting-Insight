import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  background-color: #13334c;
  color: #ffffff;
  padding: 1rem 7.5rem 0.5rem 7.5rem;
  display: flex;
  flex-direction: column;
`;

export const FooterHeading = styled.h1`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ConsentWarning = styled.p`
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  padding: 10px 0;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center !important;
`;

export const FormInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FormInnerInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
  width: 100%;
`;
export const FieldName = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
`;

export const FieldText = styled.textarea`
  width: 100%;
  resize: none;
  border: 1px solid #858585;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 16px 0 5px 10px;
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px 0;
`;

export const FooterLink = styled(ReactRouterLink)`
  display: block;
  font-size: 26px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
`;

export const BreakLine = styled.hr`
  border: 1px solid #ffffff;
`;

export const CopyRightText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  padding: 10px 0 0 0;
`;
