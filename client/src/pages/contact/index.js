import React from "react";
import { Container, Introduction, ContactInfo, Box, FormContainer, ContactInfoHeading, ContactInfoContent, ContactInfoPhone, ContactInfoPhoneText, ContactInfoEmail, ContactInfoEmailText, FieldName, FieldContainter, FieldTextContent, FieldTextContentMessage,InputCollection, InputCollectionMessage, Submit } from "./styles/contact";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

function Contact() {
    return (
        <>
            <Container>
                <Introduction>
                    Need to get in touch with us? Just write a message!
                    <br />
                    We’re here for it all.
                </Introduction>
                <br />
                <Box>
                    <ContactInfo>
                        <ContactInfoHeading>Contact Information</ContactInfoHeading>
                        <ContactInfoContent>
                            Fill out the form and our team will get back to you in 24 hours
                        </ContactInfoContent>
                        <ContactInfoPhone>
                            <LocalPhoneOutlinedIcon style={{ color: "white", width: "20px", height: "20px" }}></LocalPhoneOutlinedIcon>
                            <ContactInfoPhoneText>+91 26452 987232</ContactInfoPhoneText>
                        </ContactInfoPhone>
                        <ContactInfoEmail>
                            <EmailOutlinedIcon style={{ color: "white", width: "23px" }}></EmailOutlinedIcon>
                            <ContactInfoEmailText>ignitinginsight@gmail.com</ContactInfoEmailText>
                        </ContactInfoEmail>
                    </ContactInfo>

                    <FormContainer>
                        <FieldContainter>
                            <FieldName>Name</FieldName>
                            <InputCollection>
                                <FieldTextContent placeholder="John Doe" />
                            </InputCollection>
                        </FieldContainter>

                        <FieldContainter>
                            <FieldName>Mobile No.</FieldName>
                            <InputCollection>
                                <LocalPhoneOutlinedIcon style={{ color: "#858585", height: "17px", marginLeft: "10px" }}></LocalPhoneOutlinedIcon>
                                <FieldTextContent type="text" placeholder="Type Mobile No." />
                            </InputCollection>
                        </FieldContainter>

                        <FieldContainter>
                            <FieldName>Email</FieldName>
                            <InputCollection>
                                <EmailOutlinedIcon style={{ color: "#858585", height: "17px", marginLeft: "10px" }}></EmailOutlinedIcon>
                                <FieldTextContent type="email" placeholder="Type Email" />
                            </InputCollection>
                        </FieldContainter>

                        <FieldContainter>
                            <FieldName>Type your message</FieldName>
                            <InputCollectionMessage>
                                <ChatBubbleOutlineOutlinedIcon style={{ color: "#858585", height: "17px", marginLeft: "10px" }}></ChatBubbleOutlineOutlinedIcon>
                                <FieldTextContentMessage type="text" placeholder="Type Message" />
                            </InputCollectionMessage>
                        </FieldContainter>

                        <Submit type="submit"/>

                    </FormContainer>
                </Box>
            </Container>
        </>
    );
}

export default Contact