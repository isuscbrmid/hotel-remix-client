import styled from 'styled-components';

interface FlexBoxTypes {
  justifyContent?: 'flex-end' | 'flex-start' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit',
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline ' | 'stretch',
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit',
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
  minHeight?: string,
  textColor?: string,
  backgroundColor?: string,
  height?: string,
  className?: string,
  width?: string,
  padding?: string,
  margin?: string,
  flexGrow?: number,
  flexShrink?: number,
  zIndex?: number,
}

const FlexBox = styled.div<FlexBoxTypes>`
  display: flex;
  className: ${({ className }) => className};
  z-index: ${({ zIndex }) => zIndex};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  min-height:${({ minHeight }) => minHeight};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  
  color: ${({ textColor }) => textColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
`; 

export default FlexBox;
