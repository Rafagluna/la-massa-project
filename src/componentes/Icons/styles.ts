import { theme } from '../styles/theme';
import styled, { css } from 'styled-components';

export type IconSizes = 'extrasmall' | 'small' | 'medium' | 'large';
export type IconColor = 'black' | 'white' | 'inherit' | 'blue' | 'disabled' | 'red';

const sizes: Record<IconSizes, string> = {
  extrasmall: '12px',
  small: '24px',
  medium: '32px',
  large: '42px',
};

const colors: Record<IconColor, string> = {
  black: theme.colors.black,
  white: theme.colors.white,
  blue: theme.colors.companyBlue,
  disabled: theme.colors.gray,
  red: theme.colors.red,
  inherit: 'currentColor',
};

const getColor = (color: IconColor, disabled: boolean) => {
  return disabled ? theme.colors.white : colors[color];
};

export interface IconProps {
  size?: IconSizes;
  color?: IconColor;
  disabled?: boolean;
  $isButton?: boolean;
  onClick?: () => void;
}

export const Icon = styled.svg<IconProps>`
  ${({ size = 'medium', color = 'inherit', disabled = false, $isButton }) => css`
    width: ${sizes[size]};
    height: ${sizes[size]};
    color: ${getColor(color, disabled)};
    fill: ${getColor(color, disabled)};
    cursor: ${$isButton ? 'pointer' : 'auto'};

    path {
      fill: ${getColor(color, disabled)};
    }
  `}
`;
