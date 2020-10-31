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

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none'
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
  },
  button: {
    color: '#CACACA'
  }
}));

const handleChange = event => {
  console.log(event.target.value);
};

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" elevation={8}>
      <AppBar
        className={clsx(classes.titlebar, className)}
        elevation={8}
        {...rest}
      >
        <Typography className={clsx(classes.title, className)}>
          lavanyam
        </Typography>
      </AppBar>

      <Toolbar className={clsx(classes.titlebar, className)}>
        <RouterLink to="/app/account">
          <label htmlFor="icon-button-file">
            <IconButton className={clsx(classes.button, className)}>
              <AccountCircleIcon />
            </IconButton>
          </label>
        </RouterLink>

        <RouterLink to="/app/editor">
          <label htmlFor="icon-upload-picture">
            <IconButton className={clsx(classes.button, className)}>
              <EditIcon />
            </IconButton>
          </label>
        </RouterLink>

        <label htmlFor="icon-button-file">
          <IconButton
            className={clsx(classes.button, className)}
            onClick={handleChange}
          >
            <FormatColorFillIcon />
          </IconButton>
        </label>

        <label htmlFor="icon-button-file">
          <IconButton
            onClick={handleChange}
            className={clsx(classes.button, className)}
          >
            <FileCopyIcon />
          </IconButton>
        </label>

        <label htmlFor="file-upload">
          <IconButton
            onClick={handleChange}
            aria-label="upload folder"
            component="span"
            className={clsx(classes.button, className)}
          >
            <FolderIcon />
          </IconButton>
        </label>

        <input
          id="file-upload"
          type="file"
          directory=""
          webkitdirectory=""
          // onChange={}
        />

        <label htmlFor="icon-button-file">
          <IconButton
            onClick={handleChange}
            className={clsx(classes.button, className)}
          >
            <SaveIcon />
          </IconButton>
        </label>

        <Box flexGrow={1} />
        <Hidden mdDown>
          <RouterLink to="/login" style={{ textDecoration: 'none' }}>
            <IconButton className={clsx(classes.button, className)}>
              <InputIcon />
            </IconButton>
          </RouterLink>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
