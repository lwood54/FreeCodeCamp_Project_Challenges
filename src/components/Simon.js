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
    gameActive: false,
    greenActive: false,
    redActive: false,
    yellowActive: false,
    blueActive: false,
    originalPattern: [],
    patternActive: true,
    patternStreak: 1,
    userPattern: [],
    strictMode: false,
    gameWon: false,
    gameLost: false
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
        console.log('@playAuido: playing');
      })
      .catch(e => {
        console.log('error: ', e);
      });
  };

  pressButton = button => {
    let { patternActive, userPattern, patternStreak } = this.state;
    // NOTE userPattern is saved as false when it was empty array
    // so I had to check if it's false and define its first entry,
    // then I could add to the array.
    this.playAudio(button);
    if (!patternActive) {
      if (!userPattern) {
        userPattern = [button];
      } else {
        userPattern.push(button);
      }
    }
    switch (button) {
      case 'green':
        this.setState(
          {
            greenActive: true,
            userPattern: !patternActive && userPattern
          },
          () => {
            if (!patternActive) {
              this.checkPattern();
            }
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
            redActive: true,
            userPattern: !patternActive && userPattern
          },
          () => {
            if (!patternActive) {
              this.checkPattern();
            }
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
            yellowActive: true,
            userPattern: !patternActive && userPattern
          },
          () => {
            if (!patternActive) {
              this.checkPattern();
            }
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
            blueActive: true,
            userPattern: !patternActive && userPattern
          },
          () => {
            if (!patternActive) {
              this.checkPattern();
            }
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
    if (this.state.isOn && !this.state.patternActive) {
      this.resetGame();
    } else if (this.state.isOn && this.state.patternStreak === 1) {
      this.resetGame();
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
        originalPattern: tempArray
      });
    }
  };

  startPattern = () => {
    let { originalPattern, patternStreak, gameActive } = this.state;
    if (!gameActive) {
      this.setState({ gameActive: true });
    }
    let originalBuildUp = originalPattern.slice(0, patternStreak);
    let counter = patternStreak;
    for (let i = 0; i < patternStreak; i++) {
      if (patternStreak >= 5 && patternStreak < 9) {
        setTimeout(() => {
          this.pressButton(originalBuildUp[i]);
          counter--;
          if (counter === 0) {
            this.setState({
              patternActive: false
            });
          }
        }, 900 * i);
      } else if (patternStreak >= 9 && patternStreak < 13) {
        setTimeout(() => {
          this.pressButton(originalBuildUp[i]);
          counter--;
          if (counter === 0) {
            this.setState({
              patternActive: false
            });
          }
        }, 600 * i);
      } else if (patternStreak >= 13) {
        setTimeout(() => {
          this.pressButton(originalBuildUp[i]);
          counter--;
          if (counter === 0) {
            this.setState({
              patternActive: false
            });
          }
        }, 350 * i);
      } else {
        setTimeout(() => {
          this.pressButton(originalBuildUp[i]);
          counter--;
          if (counter === 0) {
            this.setState({
              patternActive: false
            });
          }
        }, 1500 * i);
      }
    }
  };

  checkPattern = () => {
    let {
      userPattern,
      originalPattern,
      patternStreak,
      strictMode
    } = this.state;
    let originalBuildUp = originalPattern.slice(0, patternStreak);
    let lastSpot = userPattern.length - 1;
    let match;
    if (userPattern[lastSpot] === originalPattern[lastSpot]) {
      match = true;
    } else {
      match = false;
    }
    if (match) {
      if (userPattern.length === originalPattern.length) {
        this.gameWon();
      } else {
        if (userPattern.length === patternStreak) {
          this.setState(
            {
              patternStreak: patternStreak + 1,
              userPattern: [],
              patternActive: true
            },
            () => {
              setTimeout(() => {
                this.startPattern();
              }, 1000);
            }
          );
        }
      }
    } else {
      this.gameLost();
    }
  };

  handleStrict = () => {
    let { strictMode } = this.state;
    this.setState({ strictMode: !strictMode });
  };

  gameWon = () => {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        this.playAudio('green');
      }, 250 * i);
    }
    this.setState(
      {
        greenActive: true,
        gameWon: true
      },
      () => {
        setTimeout(() => {
          this.resetGame();
        }, 2500);
      }
    );
  };

  gameLost = () => {
    this.setState(
      {
        patternActive: true,
        userPattern: [],
        greenActive: true,
        redActive: true,
        yellowActive: true,
        blueActive: true,
        gameLost: true
      },
      () => {
        setTimeout(() => {
          this.setState(
            {
              greenActive: false,
              redActive: false,
              yellowActive: false,
              blueActive: false,
              gameLost: false
            },
            () => {
              if (this.state.strictMode) {
                this.resetGame();
              } else {
                setTimeout(() => {
                  this.startPattern();
                }, 1500);
              }
            }
          );
        }, 2000);
      }
    );

    let colors = ['green', 'red', 'yellow', 'blue'];
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        this.playAudio(colors[i]);
      }, 250 + 250 * i);
    }
  };

  resetGame = () => {
    this.setState({
      isOn: false,
      gameActive: false,
      greenActive: false,
      redActive: false,
      yellowActive: false,
      blueActive: false,
      originalPattern: [],
      patternActive: true,
      patternStreak: 1,
      userPattern: [],
      strictMode: false
    });
  };

  render() {
    return (
      <div>
        <div className="gameCont center-align container">
          <div className="btnCont">
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
                  ? 'right amber accent-3'
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
          </div>

          <button
            className="btn left light-green accent-2 grey-text text-darken-2"
            onClick={this.turnGameOn}
          >
            {this.state.isOn ? 'Turn Off' : 'Turn On'}
          </button>
          {this.state.isOn && (
            <div className="startBtn">
              {!this.state.gameActive ? (
                <button
                  className="btn right light-green accent-2 grey-text text-darken-2"
                  onClick={this.startPattern}
                >
                  Start
                </button>
              ) : (
                <button className="inactiveStart btn grey lighten-1 right">
                  Start
                </button>
              )}
              <div className="strictDiv left">
                <button
                  className={
                    this.state.strictMode
                      ? 'strict btn red left'
                      : 'strict btn black left'
                  }
                  onClick={this.handleStrict}
                />
                <h6 className="left strictWord">strict</h6>
                <h3 className="right streak">{this.state.patternStreak - 1}</h3>
              </div>

              {this.state.gameWon && <h2>You WON!!!</h2>}
              {this.state.gameLost && <h2>You lost...</h2>}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Simon;
