import React, { useState, useCallback,useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './sketch.css';

export default function SimpleContainer( mask_img ) {

  const [srcImg, setImgSrc] = useState("");
  
  useEffect(() => {
    // Update the document title using the browser API
    console.log(mask_img);

    // 0 - No Image
    // 1 - Garment from reference
    // 2 - Color change
    // 3 - 
    // 4 - Texture change
    // 5 - Sketch translation

    if(mask_img.mask_img===0){
      setImgSrc("");
    }
    else if(mask_img.mask_img===1)
    {
      setImgSrc("/static/images/mask.png");
    }
    else if(mask_img.mask_img===2)
    {
      setImgSrc("/static/images/red.png");
    }
    else if(mask_img.mask_img===3)
    {
      setImgSrc("/static/images/sketch.png");
    }
    else if(mask_img.mask_img===4)
    {
      setImgSrc("/static/images/structure.png");
    }
    else if(mask_img.mask_img===5)
    {
      setImgSrc("/static/images/sketch.png");
    }
    
  },[mask_img.mask_img]);


  return (
    <React.Fragment overflow="hidden">
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" className="typo_sketch" style={{marginTop:"75px"}}>
        <img src={srcImg} width="auto" height="80%" align="center" className="mask_img"/>
        </Typography>
      </Container>
    </React.Fragment>
  );
}