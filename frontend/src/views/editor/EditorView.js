import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidemenu/SideMenu';

import Lightbox from "../../components/lightbox/LightBox";
import "../../components/lightbox/style.css";

import Grid from '@material-ui/core/Grid';

const Profile = ({ className, ...rest }) => {
  
  return (
      <div>
      <Sidebar width={300} height={"100vh"}>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1>
          <h1>Nav Item</h1> 
        </Sidebar>

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
    
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
