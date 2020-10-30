import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidemenu/SideMenu';

import '../../components/lightbox/style.css';

import ImageCarousel from '../../components/imagecarousel/ImageCarousel';
import DrawApp from '../../components/sketch/DrawApp';
import SketchImage from '../../components/sketch/SketchImage';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import './EditorView.css';
import 'fontsource-aclonica';
import IconButton from '@material-ui/core/IconButton';
import SwitchCameraSharpIcon from '@material-ui/icons/SwitchCameraSharp';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  paper: {
    height: '100%',
    padding: '2%'
  },
  container: {
    position: 'absolute',
    height: '87.6vh',
    width: '98.5vw',
    padding: 20,
    paddingRight: 0
  }
}));

const Editor = ({ className, ...rest }) => {
  const [sketch, setOpen] = React.useState(false);

  const classes = useStyles();

  const changeRightview = () => {
    setOpen(!sketch);
  };

  const renderElement = () => {
    if (sketch) return <DrawApp />;
    else return <SketchImage />;
  };

  return (
    <div>
      <Sidebar width={300} height={'88%'} />
      <div className={classes.container}>
        <Grid container className={classes.root} spacing={2}>
          <Grid key={0} item xs={6}>
            <Paper className={classes.paper} elevation={8}>
              <ImageCarousel />
            </Paper>
          </Grid>
          <Grid key={1} item xs={6}>
            <Paper className={classes.paper} elevation={8}>
              <IconButton color="secondary" onClick={changeRightview} S>
                <SwitchCameraSharpIcon />
              </IconButton>
              {renderElement()}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Editor.propTypes = {
  className: PropTypes.string
};

export default Editor;
