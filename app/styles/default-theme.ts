import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  colors: {
    primary: '#14213d', //dark blue
    primaryLight: '#3e4868',
    primaryDark: '#000018',
    primaryTextColor: '#ffffff',
    secondary: 'magenta', // pale blue
    secondaryLight: '#ffffff',
    secondaryDark: '#afc2cb',
    secondaryTextColor: '#000000',
    footer: '#3e486861',
    disabled: '#8D9CA9',
    focus: '000018',
    active: '#0C2A31',
    error: 'E34C53',
    highlight: '#007EA8'
  },
  fonts: {
    moduleTitle: {
      type: 'Simple Norm',
      size: '20px',
      color: '#000018',
      weight: '600'
    },
    moduleSubtitle: {
      type: 'Roboto',
      size: '16px',
      color: '#000018',
      weight: '600'
    },
    normal: {
      type: 'Roboto',
      size: '14px',
      color: '#000018',
      weight: '400'
    }
  },
  fontWeights: {
    normal: 'normal',
    medium: '400',
    light: '100',
    bold: '900',
  },
  button: {
    primary: {
      color: "#fff",
      backgroundColor: "#14213d",
      border: "1px solid #14213d",
    },
    secondary: {
      color: "#000000",
      backgroundColor: "#ffffff",
      border: "1px solid #ffffff",
    },
    disabled: {
      color: "#fff",
      backgroundColor: "#8D9CA9",
      border: "1px solid #8D9CA9",
    }
  }
}

export { lightTheme }