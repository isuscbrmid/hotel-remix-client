import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode,
  state: boolean,
  changeState: any
};

const Modal = ({ children, state, changeState } : ButtonProps) => {
  return (
    <>
      {state && 
        <Overlay>
          <ModalContainer>
            <CloseModal onClick={() => changeState(false)}>X</CloseModal>
            <ModalHeader>
              Welcome!
            </ModalHeader>
            {children}            
          </ModalContainer>
        </Overlay>
      }
    </>
  );
}

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
    width: 410px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
    padding: 30px;
`;

const CloseModal = styled.button`
  position: absolute;
  right: 20px;
  top: 15px;

  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;

  :hover {
    background: #414345;
  }
`;

const ModalHeader = styled.div`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;
