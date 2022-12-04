import { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}
export const BaseButton = ({ children, ...rest }: BaseButtonProps): JSX.Element => {
  return (
    <Button {...rest}>{children}</Button>
  );
}