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
    patternActive: true,
    patternStreak: 1,
    userPattern: []
  };

  handleClick = ev => {
    let button = ev.target.value;
    this.pressButton(button);
  };

  playAudio = color => {
    let audio = document.getElementById(`${color}Audio`);
    audio.load();
    audio
      .play()
      .then(() => {
        console.log('playing');
      })
      .catch(e => {
        console.log('error: ', e);
      });
  };

  pressButton = button => {
    let { patternActive } = this.state;
    this.playAudio(button);
    switch (button) {
      case 'green':
        this.setState(
          {
            greenActive: true
          },
          () => {
            if (!patternActive) {
              this.checkPattern(button);
            }
            setTimeout(() => {
              this.setState({
                greenActive: false,
                patternActive: !patternActive
              });
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
            if (!patternActive) {
              this.checkPattern(button);
            }
            setTimeout(() => {
              this.setState({
                redActive: false,
                patternActive: !patternActive
              });
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
            if (!patternActive) {
              this.checkPattern(button);
            }
            setTimeout(() => {
              this.setState({
                yellowActive: false,
                patternActive: !patternActive
              });
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
            if (!patternActive) {
              this.checkPattern(button);
            }
            setTimeout(() => {
              this.setState({
                blueActive: false,
                patternActive: !patternActive
              });
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
    let patternStreak = this.state.patternStreak;
    for (let i = 0; i < patternStreak; i++) {
      setTimeout(() => {
        console.log('lighting up ', arr[i], '@: ', i);
        this.pressButton(arr[i]);
      }, 2000 * i);
    }
  };
  // check pattern up to patternStreak length with original
  // if it's equal, set userPattern, increase streak, return true
  // TODO FIX: It is checking pattern every time the button is pressed
  // I feel this is connected to the bug.
  checkPattern = newButtonPress => {
    console.log('checkPattern 1');
    let { userPattern, originalRandomLights, patternStreak } = this.state;
    console.log('userPattern: ', userPattern);
    userPattern.push(newButtonPress);
    let flag = true;
    for (let i = 0; i < patternStreak; i++) {
      if (originalRandomLights[i] !== userPattern[i]) {
        console.log(
          'originalRandomLights[i]: ',
          originalRandomLights[i],
          '@: ',
          i
        );
        console.log('full originalRandomLights: ', originalRandomLights);
        console.log('userPattern[i]: ', userPattern[i]);
        console.log('checkPattern 2: this is false');
        flag = false;
      }
    }
    if (flag) {
      console.log('checkPattern 3: all were true');
      this.setState(
        {
          userPattern: [],
          patternStreak: patternStreak + 1
        },
        () => {
          this.startPattern();
        }
      );
    } else {
      return false;
      this.startPattern(); // TODO fix pattern comparison, and something
    } // isn't working right with audio, load vs play check error message
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
