import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidemenu/SideMenu';

import Lightbox from '../../components/lightbox/LightBox';
import '../../components/lightbox/style.css';

import ImageCarousel from '../../components/imagecarousel/ImageCarousel';

import AttrList from '../../components/attrlist/AttrList';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './EditorView.css';
import 'fontsource-aclonica';

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120
//   }
// }));

var img_path = '/static/images/avatars/avatar_6.png';

const Profile = ({ className, ...rest }) => {
  return (
    <div>
      <Sidebar width={300} height={'86vh'} />
      
        <Grid container spacing={4} style={{width:"100%"}}>
          <Grid item xs={6} style={{padding:"0px"}}>
            {/* <Paper> */}
            <ImageCarousel/>
            {/* </Paper> */}
            
          </Grid>
          <Grid item xs={6}>
          {/* <Paper> */}
          <Lightbox
              image="https://source.unsplash.com/iecJiKe_RNg/600x799"
              title="Picture 2"
            />
          {/* </Paper> */}
            
          </Grid>
        </Grid>
      
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
