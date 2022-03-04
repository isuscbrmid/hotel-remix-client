import React from "react";
import { FormGroup, Input, Label } from "../../components/form";
import { Modal } from "../../components/modal";
import useModal from "../../components/modal/use-modal";
import { useLogin } from "../../containers/global-context/authentication-wrapper";

const Bookings = () => {
  const login = useLogin();
  const loginAction = () => {
    login("admin535", "535");
  };
  const { showModal, toggle } = useModal();

  return (
    <React.Fragment>
      <div>
        <div>
          <h1>Login</h1>

          <button onClick={toggle}>Login</button>

          <Modal 
            open={showModal} 
            onClose={toggle}
            headerText="Welcome!"
          >
            <FormGroup>
              <div className="data">
                <Label>User</Label>
                <Input type="text" placeholder="User name" />
              </div>
              <div className="data">
                <Label>Password</Label>
                <Input type="password" placeholder="Password" />
              </div>
              <div className="btn">
                {/** add the button here */}
                {/* <button onClick={loginAction}>login</button> */}
              </div>
            </FormGroup>
            <button onClick={loginAction}>login</button>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bookings;
