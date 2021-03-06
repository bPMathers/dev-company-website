import { createMuiTheme } from '@material-ui/core/styles';

const bpmBlue = "#0B72B9"
const bpmOrange = "#FFBA60"
const bpmGrey = "#868686"

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
      color: bpmBlue,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: bpmBlue
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: bpmBlue,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: bpmGrey
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "white"
    },
    learnButton: {
      borderColor: bpmBlue,
      color: bpmBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",

    },
  }
})