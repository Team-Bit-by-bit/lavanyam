import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';
import './topbar.css';
import Typography from '@material-ui/core/Typography';
import 'fontsource-aclonica';

const useStyles = makeStyles(() => ({
  titlebar: {
    position: 'relative',
    backgroundColor: '#282C31',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'Aclonica',
    color: '#CACACA'
  },
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <AppBar
        className={clsx(classes.titlebar, className)}
        elevation={10}
        {...rest}
      >
        <Typography className={clsx(classes.title, className)}>
          lavanyam
        </Typography>
      </AppBar>

      <Toolbar className={clsx(classes.titlebar, className)}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <RouterLink to="/app/account">
          <div className="heading-title">PROFILE</div>
        </RouterLink>
        <RouterLink to="/app/editor">
          <div className="heading-title">EDITOR</div>
        </RouterLink>

        <Box flexGrow={1} />
        <Hidden mdDown>
          <RouterLink to="/login" style={{ textDecoration: 'none' }}>
            <IconButton style={{ color: 'white' }}>
              <InputIcon />
            </IconButton>
          </RouterLink>
        </Hidden>
        {/* <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden> */}
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
