import { InputHTMLAttributes, forwardRef, Ref } from "react";
import { InputContainer } from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef(
  ({ ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return <InputContainer ref={ref} {...props} />;
  }
);
