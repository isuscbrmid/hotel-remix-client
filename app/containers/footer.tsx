import FlexBox from '../layouts/flexbox';
import { lightTheme } from '../styles/default-theme';

interface FooterProps {
  backgroundColor?: string,
  height?: string,
  width?: string,
  textColor?: string
}

const Footer = (props: FooterProps) => {
  return (
    <FlexBox {...props} >
      <FlexBox padding='2px 10px'>
        Hotel Management, 2020 &copy;
      </FlexBox>
      <FlexBox padding='2px 10px'>
        Hotel Posada del Angel
      </FlexBox>
    </FlexBox >
  )
};

Footer.defaultProps = {
  backgroundColor: lightTheme.colors.footer,
  textColor: lightTheme.colors.secondaryTextColor,
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '30px',
  width: '100%'
}

export default Footer;
