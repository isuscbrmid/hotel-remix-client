import * as React from 'react';
import FlexBox from './flexbox';
import Header from '../containers/header';
// import Sidebar from '../containers/sidebar';
import Footer from '../containers/footer';
import { children } from '../../types/common-props';

interface GeneralProps {
  children: children
}

const GeneralLayout = ({ children }: GeneralProps) => (
  <FlexBox direction='column' minHeight='100vh'>
    <Header />
    <FlexBox width='100%' minHeight='calc(100vh - 80px)' flexGrow={1}>
      {/* <Sidebar/> */}
      <FlexBox flexGrow={1} className='content'>
        {children}
      </FlexBox>
    </FlexBox>
    <Footer />
  </FlexBox>
)

export default GeneralLayout;
