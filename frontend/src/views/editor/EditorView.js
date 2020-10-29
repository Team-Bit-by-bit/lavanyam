import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidemenu/SideMenu';

import Lightbox from '../../components/lightbox/LightBox';
import '../../components/lightbox/style.css';

import AttrList from '../../components/attrlist/AttrList';

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
import Grid from '@material-ui/core/Grid';


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
      <Sidebar width={300} height={'100vh'}/>
      
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
