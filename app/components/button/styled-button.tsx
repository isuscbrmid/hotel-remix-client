import styled from 'styled-components';
import { lightTheme } from '../../styles/default-theme';

interface StyledButtonProps {
  height?: string,
  width?: string,
  color: string,
  border: string,
  backgroundColor: string
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  /** Size properties */
  font-weight: ${lightTheme.fontWeights.medium};
  font-size: ${lightTheme.fonts.normal.size};

  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border || 0};
  
  :hover {
    opacity: 40%;
  };
`;

export default StyledButton;
