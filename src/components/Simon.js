import React from 'react';
import '../styles/components/simon.css';

const GameButton = props => {
  return (
    <div>
      <button
        className={`gameBtn btn ${props.value} ${props.cName}`}
        value={props.value}
        onClick={props.handleClick}
      />
    </div>
  );
};

class Simon extends React.Component {
  state = {
    isOn: false,
    greenActive: false,
    redActive: false,
    yellowActive: false,
    blueActive: false,
    originalRandomLights: [],
    currentLightsSeries: [],
    lightsPressed: []
  };

  handleClick = ev => {
    let button = ev.target.value;
    this.pressButton(button);
  };

  playAudio = color => {
    let audio = document.getElementById(`${color}Audio`);
    audio.load();
    audio.play();
  };

  pressButton = button => {
    this.playAudio(button);
    switch (button) {
      case 'green':
        this.setState(
          {
            greenActive: true
          },
          () => {
            setTimeout(() => {
              this.setState({ greenActive: false });
            }, 1000);
          }
        );
        break;

      case 'red':
        this.setState(
          {
            redActive: true
          },
          () => {
            setTimeout(() => {
              this.setState({ redActive: false });
            }, 1000);
          }
        );
        break;

      case 'yellow':
        this.setState(
          {
            yellowActive: true
          },
          () => {
            setTimeout(() => {
              this.setState({ yellowActive: false });
            }, 1000);
          }
        );
        break;

      case 'blue':
        this.setState(
          {
            blueActive: true
          },
          () => {
            setTimeout(() => {
              this.setState({ blueActive: false });
            }, 1000);
          }
        );
        break;
    }
  };

  turnGameOn = () => {
    if (this.state.isOn) {
      this.setState({ isOn: false });
    } else {
      let tempArray = [];
      for (let i = 0; i < 20; i++) {
        let random = Math.floor(Math.random() * 4);
        if (random === 0) {
          tempArray.push('green');
        } else if (random === 1) {
          tempArray.push('red');
        } else if (random === 2) {
          tempArray.push('yellow');
        } else if (random === 3) {
          tempArray.push('blue');
        }
      }
      this.setState({
        isOn: true,
        originalRandomLights: tempArray
      });
    }
  };

  startPattern = () => {
    // when isOn activates, then as pattern goes, add elements of originalPatter
    // onto pattern tracker array. Remove as user presses pattern??
    let arr = this.state.originalRandomLights;
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        console.log('lighting up ', arr[i]);
        this.pressButton(arr[i]);
      }, 2000 * i);
    }
  };

  render() {
    return (
      <div>
        <div className="gameCont center-align container">
          <GameButton
            cName={
              this.state.greenActive ? 'left green accent-3' : 'left green'
            }
            value={'green'}
            handleClick={this.handleClick}
          />
          <audio
            id="greenAudio"
            src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
          />
          <GameButton
            cName={
              this.state.redActive
                ? 'right deep orange darken-3'
                : 'right red darken-1'
            }
            value={'red'}
            handleClick={this.handleClick}
          />
          <audio
            id="redAudio"
            src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
          />
          <GameButton
            cName={
              this.state.yellowActive
                ? 'left yellow accent-2'
                : 'left yellow darken-1'
            }
            value={'yellow'}
            handleClick={this.handleClick}
          />
          <audio
            id="yellowAudio"
            src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
          />
          <GameButton
            cName={
              this.state.blueActive
                ? 'right blue light blue'
                : 'right light blue darken-3'
            }
            value={'blue'}
            handleClick={this.handleClick}
          />
          <audio
            id="blueAudio"
            src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
          />
          <button className="btn" onClick={this.turnGameOn}>
            {this.state.isOn ? 'On' : 'Off'}
          </button>
          <button className="btn" onClick={this.startPattern}>
            Start
          </button>
        </div>
      </div>
    );
  }
}

export default Simon;
