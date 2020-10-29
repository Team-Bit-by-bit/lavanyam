import './Sidebar.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';

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
  }
}));

let searchFieldText = '';
const handleSearchTextChange = event => {
  searchFieldText = event.target.value;
};

const handleSearchClick = event => {
  console.log(searchFieldText);
};

const Sidebar = ({ width, height, children }) => {
  const classes = useStyles();

  const [xPosition, setX] = React.useState(-width);

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
        <div className="content">
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="standard-select-currency"
                select
                label="Filter"
                onChange={handleChange}
                // helperText="Please select your currency"
              ></TextField>
            </div>
          </form>

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

                <input
                  id="file-upload"
                  type="file"
                  onChange={handleImgChange}
                />
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
          <AttrList></AttrList>

          <TextField
            id="outlined-margin-dense"
            label="Search"
            className={classes.searchField}
            margin="dense"
            variant="outlined"
            onChange={handleSearchTextChange}
          />
          <IconButton aria-label="search" onClick={handleSearchClick}>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
