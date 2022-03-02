import * as React from 'react';
import FlexBox from '../layouts/flexbox';
import NavBar from '../components/navbar';
import Button from '../components/button';
import { lightTheme } from '../styles/default-theme';

interface HeaderProps {
  backgroundColor?: string,
  justifyContent?: 'flex-end' | 'flex-start' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit',
  height?: string,
  width?: string,
  textColor?: string
}

const Header = (props: HeaderProps) => {
  const { backgroundColor, textColor,
    justifyContent, height, width } = props;
  const links = [
    { to: '/rooms', text: 'Rooms' },
    { to: '/cashflow', text: 'Cashflow' },
    { to:'/bookings', text:'Bookings' }
  ]
  const logOut = React.useCallback(() => alert('logging out'), []);
  
  return (
    <FlexBox
      justifyContent={justifyContent}
      backgroundColor={backgroundColor}
      textColor={textColor}
      height={height}
      width={width}
    >
      <NavBar links={links} />
      <Button onClick={logOut}>
        LogOut
      </Button>
    </FlexBox>
  )
}

Header.defaultProps = {
  backgroundColor: lightTheme.colors.primaryDark,
  textColor: lightTheme.colors.primaryTextColor,
  justifyContent: 'space-between',
  height: '50px',
  width: '100%'
}

export default Header;
