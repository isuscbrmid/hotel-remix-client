import { useState } from "react";
import styled from "styled-components";
import {
  ButtonContent,
  Data,
  FormGroup,
  Inner,
  Input,
  Label,
} from "~/components/form";
import Modal from "~/components/modal";
import { useLogin } from "../../containers/global-context/authentication-wrapper";

export default function Bookings() {
  const login = useLogin();
  const loginAction = () => {
    login("admin535", "535");
  };

  const [stateModal, changeStateModal] = useState(false);
  return (
    <div>
      <div>
        <h1>Login</h1>

        <ButtonContainer>
          <ShowButton onClick={() => changeStateModal(!changeStateModal)}>
            Login
          </ShowButton>
        </ButtonContainer>

        <Modal state={stateModal} changeState={changeStateModal}>
          <FormGroup>
            <Data>
              <Label htmlFor="">User</Label>
              <Input type="text" placeholder="Username" required />
            </Data>
            <Data>
              <Label htmlFor="">Password</Label>
              <Input type="password" placeholder="Password" required />
            </Data>
            <ButtonContent>
              <Inner></Inner>
              <ButtonLogin onClick={() => changeStateModal(!changeStateModal && loginAction)}>
                login
              </ButtonLogin>
            </ButtonContent>
          </FormGroup>
        </Modal>
      </div>
    </div>
  );
}

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ShowButton = styled.button`
  display: block;
  padding: 10px 30px;
  color: #292929;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 500;
`;

const ButtonLogin = styled.button`
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
`;
