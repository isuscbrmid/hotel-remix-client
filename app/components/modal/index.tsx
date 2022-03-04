import React, { FunctionComponent, ReactNode } from "react";
import ReactDOM  from "react-dom";
import { ModalContainer, Wrapper } from "./styled-modal";

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  headerText: string;
};

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  open,
  onClose,
  headerText
}) => {

  const modal = (
    <React.Fragment>
      <Wrapper
        width="100vw"
        height="100vh"
        backgroundColor="rgba(0,0,0,0.5)"
      >
        <ModalContainer
          width="410px"
          height="auto"
          backgroundColor="#ffffff"
        >
          <label onClick={onClose} className="close-btn">X</label>
          <div className="text">{headerText}</div>
          {children}
        </ModalContainer>        
      </Wrapper>    
    </React.Fragment>
  );
  return open ? ReactDOM.createPortal(modal, document.body) : null;
};