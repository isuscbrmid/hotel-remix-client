import { useLogin } from '../../containers/global-context/authentication-wrapper';

export default function Bookings() {
  const login = useLogin();
  const loginAction = () => {
    login('admin535', '535');
  };
  return (
    <div>
      <div>
      <h1>Login</h1>
      <button onClick={loginAction}>Click here to login</button>
      </div>
    </div>
  );
}