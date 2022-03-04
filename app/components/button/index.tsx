import { ReactNode } from 'react';
import StyledButton from './styled-button';
import { lightTheme } from '../../styles/default-theme';

interface ButtonProps {
  children: ReactNode,
  onClick(): any,
  type: keyof typeof lightTheme.button
};

const Button = ({ children, type, ...props }: ButtonProps) => {
  const styledProps = lightTheme.button[type];
  return (
    <StyledButton {...styledProps} {...props}>
      { children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
