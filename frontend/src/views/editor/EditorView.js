import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidemenu/SideMenu';

import '../../components/lightbox/style.css';

import ImageCarousel from '../../components/imagecarousel/ImageCarousel';
import DrawApp from '../../components/sketch/DrawApp';
import SketchImage from '../../components/sketch/SketchImage';
import Grid from '@material-ui/core/Grid';
import './EditorView.css';
import 'fontsource-aclonica';
import IconButton from '@material-ui/core/IconButton';
import SwitchCameraSharpIcon from '@material-ui/icons/SwitchCameraSharp';

const Profile = ({ className, ...rest }) => {

  const [sketch, setOpen] = React.useState(false);
  
  const changeRightview = () => {
    if(sketch){
      setOpen(false);
    }
    else
    {
    setOpen(true);
    }
  };

  const renderElement = ()=> {
    if(sketch)
       return <DrawApp/>;
    else
       return <SketchImage/>;
 }

  return (
    <div>
      <Sidebar width={300} height={'86vh'} />
      
        <Grid container spacing={4} style={{width:"100%"}}>
          <Grid item xs={6} style={{padding:"0px",paddingTop: "40px"}}>
            <ImageCarousel/>
            
          </Grid>
          <Grid item xs={6} style={{padding:"0px"}}>
          <IconButton color="secondary" onClick={changeRightview} style={{marginTop: "60px",position: "absolute",right: "28px"}}>
            <SwitchCameraSharpIcon/>
          </IconButton>
          { renderElement() }


          </Grid>
        </Grid>
      
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
