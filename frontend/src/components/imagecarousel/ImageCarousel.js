import React, { useState, useCallback, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel from 'react-images';
import { photos } from './photos';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ReplayIcon from '@material-ui/icons/Replay';
import Button from '@material-ui/core/Button';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import $ from 'jquery';

// Changes required
//     Component should appear with proper padding on all four sides
//     Extra horizontal scroll bar to be removed
//     Add a button in selection view to see the list of all garments in currently viewed picture
//     Add two buttons to (i)transer garment (ii)transfer shape (iii)transfer colour of garment selected in photo
//     Add a proper button to switch from selection view to gallery view (currently shopping cart icon button used)

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  formControl: {
    margin: theme.spacing(3)
  },
  input: {
    display: 'none'
  }
}));

export default function ImageCarousel(selected_state) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  console.log('Selected state is ', selected_state);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [gallery_photos, setGalleryPic] = React.useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    if (selected_state.selected_state) {
      setGalleryPic(photos);
    } else {
      setGalleryPic([]);
    }
  }, [selected_state.selected_state]);

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // Modal Classes Start

  const handleOpen = () => {
    setOpen(true);
    // Ajax request to get the category datas
    $.ajax({
      type: 'GET',
      url: 'http://localhost:5000/test?image_id=' + currentImage,
      error: function(data) {
        console.log('Error in getting data from API: ', data);
      },
      success: function(data) {
        alert('hello'); // if it's failing on actual server check your server FIREWALL + SET UP CORS
        setGalleryPic(data['photos']);
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  // handling image upload ajax call
  const handleAddImgChange = event => {
    console.log(event);
    console.log(event.length);

    var temp_gallery = [];
    // var i = 0;
    for (var i = 0; i < event.length; i++) {
      var singleObj = {};
      singleObj['src'] = '/static/' + event[i].webkitRelativePath;
      singleObj['id'] = i;
      singleObj['height'] = 1;
      singleObj['width'] = 1;
      temp_gallery.push(singleObj);
    }
    setGalleryPic(temp_gallery);

    // const data = new FormData();

    // data.append('file', event[0]);
    // $.ajax({
    //   url: 'http://localhost:5000/test',
    //   type: 'POST',
    //   data: data,
    //   cache: false,
    //   processData: false,
    //   contentType: false,
    //   error: function(data) {
    //     console.log('upload error', data);
    //   },
    //   success: function(data) {
    //     alert('hello'); // if it's failing on actual server check your server FIREWALL + SET UP CORS
    //     var bytestring = data['status'];
    //     setGalleryPic(data['photos']);
    //   }
    // });
  };
  // Modal Classes End

  const galleryView = () => (
    <div
      style={{ backgroundColor: 'black', height: '115vh', overflowY: 'scroll' }}
    >
      <Gallery photos={gallery_photos} onClick={openLightbox} />

      <label htmlFor="folder-upload">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <AddCircleIcon />
        </IconButton>
      </label>

      <input
        accept="image/*"
        id="folder-upload"
        type="file"
        directory=""
        webkitdirectory=""
        onChange={e => handleAddImgChange(e.target.files)}
      />
    </div>
  );

  const selectionView = () => (
    <div
      style={{ backgroundColor: 'black', height: '119vh', overflowY: 'scroll' }}
    >
      <div padding="100px">
        <Chip
          icon={<FaceIcon />}
          label="Selected Image"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
      </div>

      <Carousel
        currentIndex={currentImage}
        views={gallery_photos.map(x => ({
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

      <IconButton
        color="secondary"
        onClick={() => selected_state.change_mask(1)}
      >
        <FormatShapesIcon />
      </IconButton>

      <IconButton
        color="secondary"
        onClick={() => selected_state.change_mask(2)}
      >
        <ColorLensIcon />
      </IconButton>

      <IconButton
        color="secondary"
        onClick={() => selected_state.change_mask(3)}
      >
        <ArrowForwardIcon />
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
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div>
              <h2 id="transition-modal-title">Fashion Component</h2>
              <p id="transition-modal-description">
                Select the component of fashion to be extracted.
              </p>
              <FormControl component="fieldset">
                <FormLabel component="legend">Select one option</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Shirt"
                    control={<Radio />}
                    label="Shirt"
                  />
                  <FormControlLabel
                    value="Jeans"
                    control={<Radio />}
                    label="Jeans"
                  />
                  <FormControlLabel
                    value="Dress"
                    control={<Radio />}
                    label="Dress"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div>
              <Button onClick={handleClose} variant="contained" color="primary" position="bottom">
                Select
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );

  return viewerIsOpen ? selectionView() : galleryView();
}
