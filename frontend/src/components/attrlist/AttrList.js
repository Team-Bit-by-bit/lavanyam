import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {sidemenu_items} from './Cat_list';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles(theme => ({
  root: {
    height: '40%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    // flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: 'white',
    overflow: 'hidden',
    fontSize: '1rem',
    lineHeight: '16px',
    whiteSpace: 'unset'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
}));

const AttrList = ({ className, ...rest }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root} style={{paddingTop: "12px"}}>

      {sidemenu_items.map(items => (

          <Accordion
          expanded={expanded === "panel"+(items.id)}
          onChange={handleChange('panel'+(items.id)) }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>{items.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>

          <FormControl component="fieldset">
            <RadioGroup aria-label={items.name} name="gender1">
            {items.childs.map(tile => (
              <FormControlLabel value={tile.name} control={<Radio />} label={tile.name} />
                  ))}
              </RadioGroup>
            </FormControl>

            {/* <GridList className={classes.gridList} cols={2.5}>
              {items.childs.map(tile => (
                <GridListTile key={tile.name}>
                  <img src={tile.src} alt={tile.name} />
                  <GridListTileBar
                    title={tile.name}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title
                    }}
                  />
                </GridListTile>
              ))}
            </GridList> */}
          </AccordionDetails>
        </Accordion>

      ))}
{/* 
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Textile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GridList className={classes.gridList} cols={2.5}>
            {items.map(tile => (
              <GridListTile key={tile.name}>
                <img src={tile.src} alt={tile.name} />
                <GridListTileBar
                  title={tile.name}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Shapes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GridList className={classes.gridList} cols={2.5}>
            {items.map(tile => (
              <GridListTile key={tile.name}>
                <img src={tile.src} alt={tile.name} />
                <GridListTileBar
                  title={tile.name}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}> Colors </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GridList className={classes.gridList} cols={2.5}>
            {items.map(tile => (
              <GridListTile key={tile.name}>
                <img src={tile.src} alt={tile.name} />
                <GridListTileBar
                  title={tile.name}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </AccordionDetails>
      </Accordion>


      
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Structure</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GridList className={classes.gridList} cols={2.5}>
            {items.map(tile => (
              <GridListTile key={tile.name}>
                <img src={tile.src} alt={tile.name} />
                <GridListTileBar
                  title={tile.name}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </AccordionDetails>
      </Accordion>
    
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Neckline</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GridList className={classes.gridList} cols={2.5}>
            {items.map(tile => (
              <GridListTile key={tile.name}>
                <img src={tile.src} alt={tile.name} />
                <GridListTileBar
                  title={tile.name}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </AccordionDetails>
      </Accordion> */}
   
    </div>
  );
};

AttrList.propTypes = {
  className: PropTypes.string
};

export default AttrList;
