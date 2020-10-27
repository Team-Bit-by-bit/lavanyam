import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Sidebar from '../../components/sidemenu/SideMenu';

import Lightbox from "../../components/lightbox/LightBox";
import "../../components/lightbox/style.css";

import Grid from '@material-ui/core/Grid';

import {
  makeStyles
} from '@material-ui/core';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
      <div>
      <Sidebar width={300} height={"100vh"}>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1> 
        </Sidebar>
    {/* <Card
      className={clsx(classes.root, className)}
      {...rest}
    > */}
      {/* <CardContent> */}
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Lightbox image="/static/images/avatars/avatar_6.png" title="Picture 1">
          </Lightbox>
  
        </Grid>
        <Grid item xs={6}>
          <Lightbox image="/static/images/avatars/avatar_6.png" title="Picture 2">
          </Lightbox>
  
        </Grid>
      </Grid>
      
      {/* </CardContent> */}
    
    {/* </Card> */}
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
