import styled from 'styled-components';
import FlexBox from './flexbox';
// import styles from './styles.css';

import { lightTheme } from '../styles/default-theme';
import { children } from '../types/common-props';

interface ContentProps {
  moduleTitle: string,
  children: children
}

export const StyledModuleTitle = styled.div`
  font-family: ${lightTheme.fonts.moduleTitle.type};
  font-size: ${lightTheme.fonts.moduleTitle.size};
  color: ${lightTheme.fonts.moduleTitle.color};
  font-weight: ${lightTheme.fonts.moduleTitle.weight};
`;

const ContentLayout = ({ children, moduleTitle }: ContentProps) => (
  <FlexBox direction='column' width='100%'>
    <FlexBox padding='32px'>
      <StyledModuleTitle>
        {moduleTitle}
      </StyledModuleTitle>
    </FlexBox>
    <FlexBox flexGrow={1} padding='10px 32px'>
      {children}
    </FlexBox>
  </FlexBox>
)

export default ContentLayout;
