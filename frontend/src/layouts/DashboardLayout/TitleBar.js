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
import Typography from '@material-ui/core/Typography';
import 'fontsource-aclonica';

const useStyles = makeStyles(() => ({
  root: {
    height: 30,
    backgroundColor: '#282C31',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  }
}));

const TitleBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={8} {...rest}>
      <Typography style={{ fontFamily: 'Aclonica', color: '#CACACA' }}>lavanyam</Typography>
    </AppBar>
  );
};

TitleBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TitleBar;
