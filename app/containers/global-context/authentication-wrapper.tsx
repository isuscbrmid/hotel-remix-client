import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_STRING } from '../../utils/app-constants';
import { setCookie, getCookie } from '../../utils/cookie-utils';
import { loginApi } from '../../sources/authentication';

const Accesstoken = React.createContext('');
const Login = React.createContext({} as (user: string, password: string) =>void);
export const useAccessToken = () => useContext(Accesstoken);
export const useLogin = ():(user: string, password: string) => void => useContext(Login);

const accessTokenCookie = getCookie(ACCESS_TOKEN_STRING);

const AuthenticationWrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const navigate = useNavigate();
  const [currentUrl, setCurrentUrl] = useState('/bookings');
  const [accessToken, setAccessToken] = useState(accessTokenCookie); 
  const [authenticated, setAuthenticated] = useState(Boolean(accessTokenCookie));

  const handleLogin = useCallback(async (userName, password) => {
    const { data } = await loginApi(userName, password)
    if(data) {
      setCookie({ name: ACCESS_TOKEN_STRING, value: `Bearer ${data.access}`, options: { maxAge: 15552000 } });
      setAuthenticated(true);
      setAccessToken(`Bearer ${data.access}`);
    }
  }, []);

  useEffect(() => {
    if (authenticated && accessToken) {
      navigate(currentUrl, { replace: true });
    } else {
      navigate("/login", { replace: true });
      setCurrentUrl('/bookings')
    }
  }, [accessToken, authenticated]);


  return (
    <Login.Provider value={handleLogin}>
      <Accesstoken.Provider value={accessToken}>
        { children }
      </Accesstoken.Provider>
    </Login.Provider>
  );
};

export default AuthenticationWrapper;
