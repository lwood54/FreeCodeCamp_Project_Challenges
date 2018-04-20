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
    originalPattern: [],
    patternActive: true,
    patternStreak: 5,
    userPattern: []
  };

  handleClick = ev => {
    let button = ev.target.value;
    this.pressButton(button);
  };

  playAudio = color => {
    let audio = document.getElementById(`${color}Audio`);
    audio.load();
    console.log(audio);
    audio
      .play()
      .then(() => {
        console.log('@playAuido: playing');
      })
      .catch(e => {
        console.log('error: ', e);
      });
  };

  pressButton = button => {
    let { patternActive, userPattern, patternStreak } = this.state;
    this.playAudio(button);
    switch (button) {
      case 'green':
        this.setState(
          {
            greenActive: true
          },
          () => {
            setTimeout(() => {
              // setTimeout for color turn off delay
              this.setState({
                greenActive: false
              });
            }, 250);
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
              // setTimeout for color turn off delay
              this.setState({
                redActive: false
              });
            }, 250);
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
              // setTimeout for color turn off delay
              this.setState({
                yellowActive: false
              });
            }, 250);
          }
        );
        break;

      default:
        //(blue)
        this.setState(
          {
            blueActive: true
          },
          () => {
            setTimeout(() => {
              // setTimeout for color turn off delay
              this.setState({
                blueActive: false
              });
            }, 250);
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
      console.log('@turnGameOn: ', tempArray);
      this.setState({
        isOn: true,
        originalPattern: tempArray
      });
    }
  };
  //// NOTE NOTE NOTE:::: the problem is that it checks the entire array up to the
  // patternStreak, which after you reset the userPattern to run it again, the check
  // after hitting the first button on streak 2 will result in not matching because
  // userPattern does not have a value in any other index than 0 yet, but patternStreak
  // will check it up the current pattern, which if greater than 1, will result in no match!
  // FIX THIS!!!
  startPattern = () => {
    let { originalPattern, patternStreak } = this.state;
    let originalBuildUp = originalPattern.slice(0, patternStreak);
    console.log('@startPattern - originalBuildUp: ', originalBuildUp);
    // CREATE A WAY TO PRESS A BUTTON ON TIME DELAY, setTimeout still seems
    // the most promising, but when using a for loop, it want's to apply all
    // timeouts at once, which I briefly solved by multiplying the timeout by the index value
    // but then that seems to prevent the sequence from running.
    for (let i = 0; i < patternStreak; i++) {
      setTimeout(() => {
        this.pressButton(originalBuildUp[i]);
      }, 1500 * i);
    }
  };

  checkPattern = () => {
    let { userPattern, originalPattern, patternStreak } = this.state;
    let originalBuildUp = originalPattern.slice(0, patternStreak);
    let match = true;
    for (let i = 0; i < patternStreak; i++) {
      if (userPattern[i] !== originalBuildUp[i]) {
        match = false;
      }
    }
    if (match) {
      console.log(
        '@checkPattern - match - userPattern ---> originalBuildUp: ',
        userPattern,
        '--->',
        originalBuildUp
      );
      this.setState(
        {
          patternStreak: patternStreak + 1,
          userPattern: []
        },
        () => {
          setTimeout(() => {
            this.startPattern();
          }, 1000);
        }
      );
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
            {this.state.isOn ? 'Turn Off' : 'Turn On'}
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
