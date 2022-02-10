import 'styled-componets';

interface buttonSettup {
  color: string,
  backgroundColor: string,
  border: string,
}

export interface fontType {
  type: string,
  size: string,
  color: string,
  weight: string
}


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      primaryLight: string,
      primaryDark: string,
      secondary: string,
      secondaryLight: string,
      secondaryDark: string,
      disabled: string,
      primaryTextColor: string,
      secondaryTextColor: string,
      active: string,
      footer: string,
      highlight: string,
      error: string,
      focus: string
    },
    button: {
      primary: buttonSettup,
      secondary: buttonSettup,
      disabled: buttonSettup
    },
    fonts: {
      moduleTitle: fontType,
      moduleSubtitle: fontType,
      normal: fontType
    }
    fontWeights: {
      normal: string,
      medium: string,
      light: string,
      bold: string
    }
  }
}
