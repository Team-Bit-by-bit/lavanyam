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
    if(mask_img.mask_img==0){
      setImgSrc("");
    }
    else if(mask_img.mask_img==1)
    {
      setImgSrc("https://pngimg.com/uploads/dress/dress_PNG115.png");
    }
    else if(mask_img.mask_img==2)
    {
      setImgSrc("/state/images/");
    }
    else if(mask_img.mask_img==3)
    {
      setImgSrc("/state/images/");
    }
    else 
    {
      setImgSrc("https://pngimg.com/uploads/dress/dress_PNG115.png");
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