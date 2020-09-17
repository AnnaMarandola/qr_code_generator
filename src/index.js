import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const raleway = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url('./Raleway/Raleway-Regular.ttf') format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Raleway',
    h1: {
      color: '#031627',
      fontSize: '2rem',
      fontWeight: '800',
    },
    h2: {
      fontSize: '1rem',
      fontWeight: '700',
      color: '#031627',
      marginBottom: '30px',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    body2: {
      fontSize: '1rem',
    },
    
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [raleway],
      },
    },
    MuiLink: {
      textDecoration: 'none',
    },
  },
  palette: {
    primary: {
      main: '#031627',
      red: '#F51735',
      seaBlue: '#4cead5',
      whiteish: '#F8F0D7',
      orange: '#F89F1D',
    },
    background: {
      default: '#F8F8F8',
      paper: '#F8F0D7',
      blue: '#031627',
    },
    text: {
      primary: '#031627',
    },
  },
})


ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
