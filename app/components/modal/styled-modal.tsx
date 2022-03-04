import styled from 'styled-components';
import { lightTheme } from '../../styles/default-theme';

interface StyledModalProps {
  width?: string,
  height?: string,
  backgroundColor: string
}

export const Wrapper = styled.div<StyledModalProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({width}) => width};
  height: ${({height}) => height};
  /** Position properties */
  position: fixed;
  top: 0;
  left: 0;

  background-color: ${({backgroundColor}) => backgroundColor};
`;

export const ModalContainer = styled.div<StyledModalProps>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  min-height: 100px;

  position: relative;
  padding: 30px;

  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);

  .close-btn {
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: ${lightTheme.fonts.moduleTitle.size};
    cursor: pointer;
  }

  .close-btn:hover {
    opacity: 40%;
  }

  .text {
    font-size: ${lightTheme.fonts.moduleTitle.size};
    font-weight: ${lightTheme.fonts.moduleTitle.weight};
    text-align: center;
  }
`;