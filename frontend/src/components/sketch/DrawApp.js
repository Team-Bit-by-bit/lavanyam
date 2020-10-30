import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = {
  canvas: {
    border: '1px solid #333',
    margin: '20px 0px'
  },

  maindiv: {
    padding: '10px',
    paddingTop: '42px',
    margin: 'auto',
    width: '675px'
  },

  button: {
    border: '0px',
    margin: '1px',
    height: '50px',
    minWidth: '75px'
  },

  colorSwatches: {
    red: { backgroundColor: 'red' },
    orange: { backgroundColor: 'orange' },
    yellow: { backgroundColor: 'yellow' },
    green: { backgroundColor: 'green' },
    blue: { backgroundColor: 'blue' },
    purple: { backgroundColor: 'purple' },
    black: { backgroundColor: 'black' }
  },

  formControl: {
    margin: '5px',
    minWidth: 120
  },
  selectEmpty: {
    marginTop: '10px'
  }
};

//simple draw component made in react
class DrawApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cursorType: 1,
        counter: 1
      };
  }

  componentDidMount() {
    this.reset();
  }

  setType(e) {
    if (e.target.value == 1) {
        this.setState({
            cursorType: 1
        });  
      this.draw();
    } else {
        this.setState({
            cursorType: 2
          });
      this.erase();
    }
  }

  draw() {
    //response to Draw button click
    this.setState({
      mode: 'draw'
    });
  }

  erase() {
    //response to Erase button click
    this.setState({
      mode: 'erase'
    });
  }

  drawing(e) {
    //if the pen is down in the canvas, draw/erase

    if (this.state.pen === 'down') {
      this.ctx.beginPath();
      this.ctx.lineWidth = this.state.lineWidth;
      this.ctx.lineCap = 'round';

      if (this.state.mode === 'draw') {
        this.ctx.strokeStyle = this.state.penColor;
      }

      if (this.state.mode === 'erase') {
        this.ctx.strokeStyle = '#ffffff';
      }

      this.ctx.moveTo(this.state.penCoords[0], this.state.penCoords[1]); //move to old position
      this.ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); //draw to new position
      this.ctx.stroke();

      this.setState({
        //save new position
        penCoords: [e.nativeEvent.offsetX, e.nativeEvent.offsetY]
      });
    }
  }

  penDown(e) {
    //mouse is down on the canvas
    this.setState({
      pen: 'down',
      penCoords: [e.nativeEvent.offsetX, e.nativeEvent.offsetY]
    });
  }

  penUp() {
    //mouse is up on the canvas
    this.setState({
      pen: 'up'
    });
  }

  penSizeUp() {
    //increase pen size button clicked
    this.setState({
      lineWidth: (this.state.lineWidth += 5)
    });
  }

  penSizeDown() {
    //decrease pen size button clicked
    this.setState({
      lineWidth: (this.state.lineWidth -= 5)
    });
  }

  setColor(c) {
    //a color button was clicked
    this.setState({
      penColor: c
    });
  }

  reset() {
    //clears it to all white, resets state to original
    this.setState({
      mode: 'draw',
      pen: 'up',
      lineWidth: 10,
      penColor: 'black'
    });

    this.ctx = this.refs.canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, 800, 600);
    this.ctx.lineWidth = 10;
  }

  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
    this.penSizeUp();
  };

  handleDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
    this.penSizeDown();
  };

  render() {
    const displayCounter = this.state.counter > 0;

    return (
      <div style={styles.maindiv}>
        <div>
          <FormControl style={styles.formControl}>
            <InputLabel id="demo-simple-select-label">Select Type</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.cursorType}
              onChange={e => this.setType(e)}
            >
              <MenuItem value={1}>Draw {this.cursorType}</MenuItem>
              <MenuItem value={2}>Erase</MenuItem>
            </Select>
          </FormControl>

          <ButtonGroup
            size="small"
            aria-label="small outlined button group"
            style={{ padding: '20px' }}
          >
            <Button onClick={this.handleIncrement}>+</Button>
            {displayCounter && <Button disabled style={{color:"black"}}>{this.state.counter} </Button>}
            {displayCounter && (
              <Button onClick={this.handleDecrement}>-</Button>
            )}
          </ButtonGroup>

          <Button
            onClick={() => this.reset()}
            variant="outlined"
            color="secondary"
          >
            RESET
          </Button>
        </div>
        <div>
          <button
            style={Object.assign({}, styles.colorSwatches.red, styles.button)}
            onClick={() => this.setColor('red')}
          >
            Red
          </button>
          <button
            style={Object.assign(
              {},
              styles.colorSwatches.orange,
              styles.button
            )}
            onClick={() => this.setColor('orange')}
          >
            Orange
          </button>
          <button
            style={Object.assign(
              {},
              styles.colorSwatches.yellow,
              styles.button
            )}
            onClick={() => this.setColor('yellow')}
          >
            Yellow
          </button>
          <button
            style={Object.assign({}, styles.colorSwatches.green, styles.button)}
            onClick={() => this.setColor('green')}
          >
            Green
          </button>
          <button
            style={Object.assign({}, styles.colorSwatches.blue, styles.button)}
            onClick={() => this.setColor('blue')}
          >
            Blue
          </button>
          <button
            style={Object.assign(
              {},
              styles.colorSwatches.purple,
              styles.button
            )}
            onClick={() => this.setColor('purple')}
          >
            Purple
          </button>
          <button
            style={Object.assign({}, styles.colorSwatches.black, styles.button)}
            onClick={() => this.setColor('black')}
          >
            Black
          </button>
        </div>

        <canvas
          ref="canvas"
          width="675px"
          height="600px"
          style={styles.canvas}
          onMouseMove={e => this.drawing(e)}
          onMouseDown={e => this.penDown(e)}
          onMouseUp={e => this.penUp(e)}
        ></canvas>
      </div>
    );
  }
}

export default DrawApp;
