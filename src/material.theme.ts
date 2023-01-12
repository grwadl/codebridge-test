import { createTheme } from '@mui/material'

const fontUrl = 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap'

export const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif"
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            color: #363636;
            @font-face {
              font-family: 'Montserrat', sans-serif;
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: url(${fontUrl});
            }
          `
    }
  }
})
