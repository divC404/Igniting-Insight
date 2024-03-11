import React from "react";
import { ButtonContainer } from "./styles/button";

function Button(props) {
  return <ButtonContainer>{props.content}</ButtonContainer>;
}

export default Button;
