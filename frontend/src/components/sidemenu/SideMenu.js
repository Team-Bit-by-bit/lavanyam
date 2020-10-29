import "./Sidebar.css";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    }
  },
  searchField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '28ch',
  },
}));

let searchFieldText="";
const handleSearchTextChange = (event)=>{
  searchFieldText=event.target.value;
}

const handleSearchClick = (event)=>{
  console.log(searchFieldText);
}

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

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  React.useEffect((width) => {
    setX(-width);
  }, []);
  return (
    <React.Fragment>
      <div
        className="side-bar"
        style={{
          zIndex: 50,
          position: "absolute",
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
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
            >
            </TextField>
          </div>
        </form>
        
        {children}
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