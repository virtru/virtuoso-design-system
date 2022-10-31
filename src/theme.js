const baseTheme = {
  palette: {
    type: 'light',
    primary: {
      light: '#c6cbd4',
      main: '#004987',
      dark: '#011E4A',
    },
    secondary: {
      main: '#174EB6',
    },
    text: {
      primary: '#2d323b',
      secondary: '#515864',
      disabled: '#c6cbd4',
      hint: '#515864',
    },
    navigation: {
      background: '#FFFFFF',
      textColor: '#515864',
    },
    header: {
      backgroundColor: '#011E4A',
      textColor: '#FFFFFF',
    },
    error: {
      main: '#A70A0E',
    },
    warning: {
      main: '#d66400',
    },
    info: {
      main: '#b2d6ff',
    },
    success: {
      main: '#75b749',
      contrastText: '#307a21',
    },
  },
  typography: {
    fontFamily: 'Raleway, Open Sans',
    fontSize: 14,
    body2: {
      fontFamily: 'Raleway',
      fontSize: 13,
    },
    body1: {
      fontFamily: 'Raleway',
      fontSize: 13,
    },
    h1: {
      fontFamily: 'Raleway',
      fontSize: 49,
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Raleway',
      fontSize: 39,
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Raleway',
      fontSize: 31,
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: 25,
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Raleway',
      fontSize: 20,
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Raleway',
      fontSize: 17,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 13,
    },
    subtitle2: {
      fontSize: 13,
      fontWeight: 600,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 700,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#011E4A',
          color: '#fff',
        },
      },

    },
  },
  props: {
  },
};

export default baseTheme;
