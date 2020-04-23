import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },

  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white'
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: '40px',
    width: '40px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1
    }
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1
  }
}));

export default function Header({ value, setValue, selectedIndex, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);


  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { link: "/services", name: "Services" },
    { link: "/customsoftware", name: "Custom Software Development" },
    { link: "/mobileapps", name: "iOS/Android Development" },
    { link: "/websites", name: "websites" }
  ];
  const tabsOptions = [
    { link: "/", name: "Home" },
    { link: "/services", name: "Services", mouseOver: (event) => handleClick(event), ariaOwns: anchorEl ? 'simple-menu' : undefined, ariaHasPopup: anchorEl ? 'true' : undefined },
    { link: "/revolution", name: "The Revolution" },
    { link: "/about", name: "About Us" },
    { link: "/contact", name: "Contact Us" }
  ];

  useEffect(() => {
    const pathname = window.location.pathname;
    const valueIndex = tabsOptions.findIndex(option => option.link === pathname);
    const index = menuOptions.findIndex(option => option.link === pathname);

    if (pathname === '/estimate') {
      setValue(false)
    } else {
      setValue(valueIndex === -1 ? 1 : valueIndex);
    }
    setSelectedIndex(index);
  }, [menuOptions, setSelectedIndex, setValue, tabsOptions]);



  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}>
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {tabsOptions.map((tabOption, index) => (
            <ListItem
              key={`${tabOption}${index}`}
              onClick={() => { setOpenDrawer(false); setValue(index) }}
              divider
              button
              component={Link}
              to={tabOption.link}
              selected={value === index}
              classes={{ selected: classes.drawerItemSelected }}>
              <ListItemText
                key="restimateButton"
                disableTypography
                className={classes.drawerItem}>
                {tabOption.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => { setOpenDrawer(false); setValue(5) }}
            divider
            button
            component={Link}
            to="/estimate"
            selected={value === 5}
            classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
          >
            <ListItemText disableTypography className={classes.drawerItem}>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment >
  );

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary">
        {tabsOptions.map((tabOption, index) => (
          <Tab
            key={`${tabOption}${index}`}
            className={classes.tab}
            component={Link}
            to={tabOption.link}
            label={tabOption.name}
            aria-owns={tabOption.ariaOwns}
            aria-haspopup={tabOption.ariaHasPopup}
            onMouseOver={tabOption.mouseOver} />
        ))}
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.estimateButton}>
        Free estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
        MenuListProps={{ onMouseLeave: handleClose }}>
        {menuOptions.map((option, index) => (
          <MenuItem
            key={`${option}${index}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              setValue(1);
              handleClose();
            }}
            selected={index === selectedIndex && value === 1}>
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              className={classes.logoContainer}>
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

