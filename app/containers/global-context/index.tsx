import AuthenticationWrapper from './authentication-wrapper';

const GlobalContext = ({ children }: { children: React.ReactNode }): JSX.Element => {

  return (
    <AuthenticationWrapper>
      {children}
    </AuthenticationWrapper>
  );
};


export default GlobalContext;
