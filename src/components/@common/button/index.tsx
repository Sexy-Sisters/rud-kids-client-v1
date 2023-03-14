import { MouseEventHandler, ReactNode } from 'react';
import { ButtonStyle } from './button.style';

export interface ButtonStyleProps {
  defaultColor: string;
  hoverColor: string;
  round: string;
  width: string;
  height: string;
}

export interface ButtonProps {
  style: ButtonStyleProps;
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  return (
    <ButtonStyle style={props.style} onClick={props.onClick}>
      {props.children}
    </ButtonStyle>
  );
};
