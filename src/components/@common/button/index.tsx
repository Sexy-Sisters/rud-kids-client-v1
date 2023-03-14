import { MouseEventHandler, ReactNode } from 'react';
import * as S from './button.style';

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

const Button = (props: ButtonProps) => {
  return (
    <S.Button style={props.style} onClick={props.onClick}>
      {props.children}
    </S.Button>
  );
};

export default Button;
