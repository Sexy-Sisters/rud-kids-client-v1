import styled from 'styled-components';
import { ButtonStyleProps } from '.';

export const Button = styled.button<{ style: ButtonStyleProps }>`
  width: ${(p) => p.style.width};
  height: ${(p) => p.style.height};
  border-radius: ${(p) => p.style.round};
  background-color: ${(p) => p.style.defaultColor};

  &:hover {
    background-color: ${(p) => p.style.hoverColor};
  }
`;
