import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel from 'react-images';
import { photos } from './photos';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ReplayIcon from '@material-ui/icons/Replay';
import FolderIcon from '@material-ui/icons/Folder';
import Button from '@material-ui/core/Button';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';


// Changes required
//     Component should appear with proper padding on all four sides
//     Extra horizontal scroll bar to be removed
//     Add a button in selection view to see the list of all garments in currently viewed picture
//     Add two buttons to (i)transer garment (ii)transfer shape (iii)transfer colour of garment selected in photo
//     Add a proper button to switch from selection view to gallery view (currently shopping cart icon button used)


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(3),
  },
  input: {
    display: 'none',
  },
}));


export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // Modal Classes Start
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Modal Classes End

  const galleryView = () => (
    <div style={{ backgroundColor: "black",height: "115vh",overflowY: "scroll" }}>
      <Gallery photos={photos} onClick={openLightbox} />

      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <AddCircleIcon />
        </IconButton>
      </label>

    </div>
  );

  const selectionView = () => (
    <div style={{ backgroundColor: "black" }}>
      <Carousel
        currentIndex={currentImage}
        views={photos.map((x) => ({
          ...x,
          srcset: x.srcSet,
          caption: x.title
        }))}
      />
    

      {/* returns back to gallery view mode, put appropriate icon */}
      <IconButton color="secondary" onClick={closeLightbox}>
        <ReplayIcon /> 
      </IconButton>

      <IconButton color="secondary" onClick={handleOpen}>
        <AddCircleIcon /> 
      </IconButton>

      <IconButton color="secondary" onClick={closeLightbox}>
        <ColorLensIcon /> 
      </IconButton>

      <IconButton color="secondary" onClick={closeLightbox}>
        <FormatShapesIcon /> 
      </IconButton>

      {/* <IconButton color="secondary" onClick={closeLightbox}>
        <AddAPhotoIcon /> 
      </IconButton> */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div>
            <h2 id="transition-modal-title">Fashion Component</h2>
            <p id="transition-modal-description">Select the component of fashion to be extracted.</p>
            <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend"></FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                label="T-Shirt"
              />
              <FormControlLabel
                control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                label="Pant"
              />
              <FormControlLabel
                control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                label="Jacket"
              />
            </FormGroup>
            <FormHelperText>Choose one</FormHelperText>
            </FormControl>
            </div>

            <div>
      
            <Button variant="contained" color="primary" position="bottom">
              Select
            </Button>


            </div>
      

          </div>
        </Fade>
      </Modal>

    </div>
  );

  return viewerIsOpen? selectionView(): galleryView();
}
