import { ButtonHTMLAttributes, forwardRef, Ref } from "react";
import { ButtonContainer } from "./Button.styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef(
  ({}: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    return <ButtonContainer>5s</ButtonContainer>;
  }
);
