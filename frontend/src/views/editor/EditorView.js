import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidemenu/SideMenu';

import Lightbox from '../../components/lightbox/LightBox';
import '../../components/lightbox/style.css';

import AttrList from '../../components/attrlist/AttrList';

import Grid from '@material-ui/core/Grid';
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

var img_path = "/static/images/avatars/avatar_6.png";

const Profile = ({ className, ...rest }) => {
  

  return (
    <div>
      <Sidebar width={300} height={'100vh'}/>
      
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Lightbox image={img_path} title="Picture 1"></Lightbox>
        </Grid>
        <Grid item xs={6}>
          <Lightbox
            image="/static/images/avatars/avatar_6.png"
            title="Picture 2"
          ></Lightbox>
        </Grid>
      </Grid>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
