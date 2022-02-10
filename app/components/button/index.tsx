import { ReactNode } from 'react';
import StyledButton from './styled-button';
import { lightTheme } from '../../styles/default-theme';

interface ButtonProps {
  children: ReactNode,
  onClick(): any,
  style: keyof typeof lightTheme.button
};

const Button = ({ children, style, ...props }: ButtonProps) => {
  const styledProps = lightTheme.button[style];
  return (
    <StyledButton {...styledProps} {...props}>
      { children}
    </StyledButton>
  );
};

Button.defaultProps = {
  style: 'primary',
};

export default Button;
