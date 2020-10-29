import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidemenu/SideMenu';

import Lightbox from '../../components/lightbox/LightBox';
import '../../components/lightbox/style.css';

import Grid from '@material-ui/core/Grid';
import './EditorView.css';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import 'fontsource-aclonica';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const Categories = [
  {
    value: 'ABC',
    text: 'ABC'
  },
  {
    value: 'XYZ',
    text: 'XYZ'
  },
  {
    value: 'PQR',
    text: 'PQR'
  }
];

const Attributes = [
  {
    value: 'ABC',
    text: 'ABC'
  },
  {
    value: 'XYZ',
    text: 'XYZ'
  },
  {
    value: 'PQR',
    text: 'PQR'
  }
];

function setinitialURL() {
  return '/static/images/avatars/avatar_6.png';
}

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();

  const [img_path, changeURL] = useState(() => setinitialURL());
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const [attribute, setAttribute] = React.useState('');

  const handleChange = event => {
    setCategory(event.target.value || '');
  };

  const handleAttrChange = event => {
    setAttribute(event.target.value || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleImgChange(event) {
    var temp_path = URL.createObjectURL(event.target.files[0]);
    console.log(temp_path);
    changeURL(temp_path);
    console.log('inside');
  }

  return (
    <div>
      <Sidebar width={300} height={'100vh'}>
        <div style={{ backgroundColor: 'white', flexGrow: 1 }}>
          <Grid container spacing={2} style={{ margin: 0, height: '50px' }}>
            <Grid item xs={6} sm={4}>
              <Typography
                style={{
                  fontFamily: 'Aclonica',
                  paddingLeft: '10px',
                  paddingTop: '10px'
                }}
              >
                trendify
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              {/* search bar */}
            </Grid>
            <Grid item xs={6} sm={4}>
              <label htmlFor="file-upload">
                <IconButton
                  className="upload-btn"
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  size="smalll"
                >
                  <PhotoCamera fontSize="small" />
                </IconButton>
              </label>

              <input id="file-upload" type="file" onChange={handleImgChange} />
            </Grid>
          </Grid>
        </div>

        <div>
          <Button
            onClick={handleClickOpen}
            variant="outlined"
            color="primary"
            style={{ marginLeft: '15px', marginTop: '12px' }}
          >
            Filter Category & Attribute
          </Button>
          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>Choose the Category and Attribute</DialogTitle>
            <DialogContent>
              <form className={classes.container}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="demo-dialog-native">
                    Categories
                  </InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    value={category}
                    onChange={handleChange}
                    input={<Input />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>

                    {Categories.map(type => (
                      <MenuItem value={type.value}>{type.text}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-dialog-select-label">
                    Attributes
                  </InputLabel>
                  <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    value={attribute}
                    onChange={handleAttrChange}
                    input={<Input />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {Attributes.map(type => (
                      <MenuItem value={type.value}>{type.text}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>

        {/* <h1>Nav Item</h1>
        <h1>Nav Item</h1>
        <h1>Nav Item</h1>
        <h1>Nav Item</h1> */}
      </Sidebar>

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
