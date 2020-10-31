import './Sidebar.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import AttrList from '../../components/attrlist/AttrList';

const Categories = [
  {
    value: 'Shirts',
    text: 'Shirts'
  },
  {
    value: 'Pants',
    text: 'Pants'
  },
  {
    value: 'Dresses',
    text: 'Dresses'
  }
];

function setinitialURL() {
  return '/static/images/avatars/avatar_6.png';
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  },
  searchField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '28ch'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

let searchFieldText = '';
const handleSearchTextChange = event => {
  searchFieldText = event.target.value;
};

const handleSearchClick = event => {
  console.log(searchFieldText);
};

const Sidebar = ({ width, height, children,change_func }) => {
  const classes = useStyles();

  const [img_path, changeURL] = useState(() => setinitialURL());
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const [attribute, setAttribute] = React.useState('');

  const handleCatChange = event => {
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

  const [xPosition, setX] = React.useState(-width);
  const [age, setAge] = React.useState('');

  const handleAgeChange = event => {
    setAge(event.target.value);
  };

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  const handleChange = event => {
    console.log(event.target.value);
  };

  React.useEffect(width => {
    setX(-width);
  }, []);
  return (
    <React.Fragment>
      <div
        className="side-bar"
        style={{
          zIndex: 50,
          position: 'absolute',
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 40vh)`
          }}
        ></button>
        <div
          className="content"
          style={{ overflowY: 'scroll', height: '100%', overflowX: 'hidden' }}
        >
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
                <FormControl
                  className={classes.formControl}
                  style={{ marginTop: '-5px' }}
                >
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleAgeChange}
                    autoWidth
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {Categories.map(type => (
                      <MenuItem value={type.value}>{type.text}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
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

                <input
                  id="file-upload"
                  type="file"
                  onChange={handleImgChange}
                />
              </Grid>
            </Grid>
          </div>

          {/* 
          <TextField
            id="outlined-margin-dense"
            label="Search"
            className={classes.searchField}
            margin="dense"
            variant="outlined"
            onChange={handleSearchTextChange}
          />
          <IconButton aria-label="search" >
            <SearchIcon />
           </IconButton> */}

          <div>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper
                  component="form"
                  className={classes.root}
                  style={{ paddingTop: 'inherit' }}
                >
                  <InputBase
                    className={classes.input}
                    placeholder="Search Attribute"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  <IconButton
                    type="submit"
                    onClick={handleSearchClick}
                    className={classes.iconButton}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>

            {/* <Button
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
                      onChange={handleCatChange}
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
            </Dialog> */}
          </div>
          <AttrList></AttrList>

          <Button onClick={change_func} variant="contained" color="primary" disableElevation style={{position:"inherit",marginLeft: "auto",display: "block",marginRight: "auto"}}>
            Select
          </Button>


        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
