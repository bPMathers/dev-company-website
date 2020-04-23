import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../../assets/Footer Adornment.svg';
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center"
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em"
    }
  }
}));

export default function Footer({ value, setValue, selectedIndex, setSelectedIndex }) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" className={classes.link} onClick={() => setValue(0)}>
                Home
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/services" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(0) }}>
                Services
            </Grid>
              <Grid item component={Link} to="/customsoftware" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(1) }}>
                Custom Software Development
            </Grid>
              <Grid item component={Link} to="/mobileapps" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(2) }}>
                iOS/Android Development
            </Grid>
              <Grid item component={Link} to="/websites" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(3) }}>
                Website Development
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>
                The Revlolution
            </Grid>
              <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>
                Vision
            </Grid>
              <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>
                Technology
            </Grid>
              <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>
                Process
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/about" className={classes.link} onClick={() => setValue(3)}>
                About
            </Grid>
              <Grid item component={Link} to="/about" className={classes.link} onClick={() => setValue(3)}>
                History
            </Grid>
              <Grid item component={Link} to="/about" className={classes.link} onClick={() => setValue(3)}>
                Team
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid item component={Link} to="/contact" className={classes.link} onClick={() => setValue(4)}>
                Contact Us
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img className={classes.adornment} alt="black decorative slash" src={footerAdornment} />
      <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item component={"a"} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer >
  )
}