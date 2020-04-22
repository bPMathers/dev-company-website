import { createMuiTheme } from '@material-ui/core/styles';

const bpmBlue = "#0B72B9"
const bpmOrange = "#FFBA60"

export default createMuiTheme({
  palette: {
    common: {
      blue: `${bpmBlue}`,
      orange: `${bpmOrange}`
    },
    primary: {
      main: `${bpmBlue}`
    },
    secondary: {
      main: `${bpmOrange}`
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: '1rem',
      textTransform: "none",
      color: "white"
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${bpmBlue}`,
      lineHeight: 1.5
    }
  }
})