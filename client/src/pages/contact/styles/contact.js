import styled from "styled-components/macro";
import ContactBG from "../../../images/ContactBG.png"


export const Container = styled.div`
  padding: 2.5rem 7.5rem 5rem 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export const Introduction = styled.div`
font-weight: 400;
font-size: 20px;
line-height: 24px;
text-align: center;
`;

export const Box = styled.div`
width: 964px;
height: 541px;
background: #FFFFFF;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
display: flex;
flex-direction: row;
`;

export const ContactInfo = styled.div`
  background-image: url(${ContactBG});
  width: 400px;
  height: 541px;
`;

export const ContactInfoHeading = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 148.4%;
color: #FFFFFF;
margin-left: 23px;
margin-top: 10px;
`;

export const ContactInfoContent = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 148.4%;
color: #FFFFFF;
margin-left: 23px;
margin-top: 27px;
width: 341px;
height: 20px;
`;

export const ContactInfoPhone = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-left: 23px;
margin-top: 100px;
`;



export const ContactInfoPhoneText = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 148.4%;
color: #FFFFFF;
margin-left: 21px;
`;

export const ContactInfoEmail = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-left: 23px;
margin-top: 30px;
`;

export const ContactInfoEmailText = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 148.4%;
color: #FFFFFF;
margin-left: 21px;
`;

export const FormContainer = styled.form`
margin: 20px 64px 41px 64px;
display: flex;
flex-direction: column;

`;

export const FieldContainter = styled.div`
margin-top:20px
`


export const FieldName = styled.h3`
font-weight: 400;
font-size: 14px;
line-height: 171.9%;
color: #383838;
`;

export const InputCollection = styled.div`
height: 31px;
width: 436px;
background: #FFFFFF;
border: 1px solid #858585;
border-radius: 8px;
display: flex;
align-items: center;
`

export const InputCollectionMessage = styled(InputCollection)`
height: 111px;
align-items: flex-start;
`

export const FieldTextContent = styled.input`
border:none;
border-radius: 8px;
width: 100%;
height: 100%;
margin-left: 16px;
`;

export const FieldTextContentMessage = styled(FieldTextContent)`
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items: flex-start;
align-content: flex-start;
`;

export const Submit = styled.input`
width: 200px;
height: 40px;
background: rgba(253, 95, 0, 0.8);
border-radius: 8px;
border: none;
margin-top: 45px;
align-self: flex-end;
cursor: pointer;


font-weight: 600;
font-size: 20px;
line-height: 148.4%;
color: #FFFFFF;
`




