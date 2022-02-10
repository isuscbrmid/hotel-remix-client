import styled from 'styled-components';
import { Link } from 'remix';
import FlexBox from '../layouts/flexbox';

interface links {
  to: string,
  text: string
}

interface NavBarProps {
  links: links[],
}

const StyledLinkItem = styled.div`
  :hover {
    opacity: 40%;
  };
`;

const LinkItem = (props: links) => {
  const { to, text } = props;
  return (
    <FlexBox padding='4px 10px' alignItems='center'>
      <StyledLinkItem>
        <Link to={to}>
          {text}
        </Link>
      </StyledLinkItem>
    </FlexBox>
  );
}

const NavBar = (props: NavBarProps) => {
  const { links } = props;
  return (
    <FlexBox>
      {
        links.map((link, i) =>
          <LinkItem key={i} to={link.to} text={link.text} />
        )
      }
    </FlexBox>

  )
};

export default NavBar;