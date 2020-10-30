import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './sketch.css';

export default function SimpleContainer() {
  return (
    <React.Fragment overflow="hidden">
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" className="typo_sketch" style={{marginTop:"75px"}}>
        <img src="https://pngimg.com/uploads/dress/dress_PNG115.png" width="auto" height="80%" align="center" className="mask_img"/>
        </Typography>
      </Container>
    </React.Fragment>
  );
}