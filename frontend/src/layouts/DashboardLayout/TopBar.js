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
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';
import './topbar.css';
import Typography from '@material-ui/core/Typography';
import 'fontsource-aclonica';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SaveIcon from '@material-ui/icons/Save';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  titlebar: {
    position: 'static',
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

const handleChange = (event) => {
  console.log(event.target.value);
};

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
        <RouterLink to="/app/dashboard">
          <Logo />
        </RouterLink>

        <RouterLink to="/app/account">
          {/* <div className="heading-title">PROFILE</div> */}
          <div className={classes.root}>
            {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /> */}
              <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                <AccountCircleIcon />
                </IconButton>
              </label>
          </div>
        </RouterLink>

        <RouterLink to="/app/editor">
          {/* <div className="heading-title">EDITOR</div> */}
          <div className={classes.root}>
            {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /> */}
              <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                <EditIcon />
                </IconButton>
              </label>
          </div>
        </RouterLink>

        <div className={classes.root}>
          {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /> */}
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleChange}>
             <FormatColorFillIcon />
            </IconButton>
          </label>
        </div>

        <div className={classes.root}>
          {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /> */}
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleChange}>
             <FileCopyIcon />
            </IconButton>
          </label>
        </div>

        <div className={classes.root}>
          {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /> */}
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleChange}>
             <FolderIcon />
            </IconButton>
          </label>
        </div>

        <div className={classes.root}>
          {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" /> */}
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleChange}>
             <SaveIcon />
            </IconButton>
          </label>
        </div>

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
