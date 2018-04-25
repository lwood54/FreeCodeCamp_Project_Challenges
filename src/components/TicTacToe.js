import React from 'react';
import Square from './Square';
import '../styles/components/tictactoe.css';

class TicTacToe extends React.Component {
  state = {
    box1Val: '',
    box2Val: '',
    box3Val: '',
    box4Val: '',
    box5Val: '',
    box6Val: '',
    box7Val: '',
    box8Val: '',
    box9Val: '',
    row1Victory: false,
    row2Victory: false,
    row3Victory: false,
    col1Victory: false,
    col2Victory: false,
    col3Victory: false,
    diagTopLVictory: false,
    diagTopRVictory: false,
    tie: false,
    xWins: 0,
    xWon: false,
    oWins: 0,
    oWon: false,
    clickVal: '',
    players: '',
    userTurn: true,
    gameOver: true,
    activeGame: false
  };

  putXO = box => {
    let {
      clickVal,
      userTurn,
      box1Val,
      box2Val,
      box3Val,
      box4Val,
      box5Val,
      box6Val,
      box7Val,
      box8Val,
      box9Val
    } = this.state;
    if (this.haveBlankTiles()) {
      switch (box) {
        case 'box1':
          if (box1Val === '') {
            this.setState(
              {
                box1Val: this.state.clickVal,
                clickVal: clickVal === 'X' ? 'O' : 'X',
                userTurn: !userTurn
              },
              () => {
                if (
                  this.checkTopRow() ||
                  this.checkCol1() ||
                  this.checkDiagTopLeft()
                ) {
                  setTimeout(this.autoRestart, 2000);
                } else {
                  if (!this.haveBlankTiles()) {
                    this.setState({ tie: true });
                    setTimeout(this.autoRestart, 2000);
                  } else if (!this.state.userTurn) {
                    if (this.state.players === 1) {
                      setTimeout(this.computerTurn, 1000);
                    }
                  }
                }
              }
            );
            return true;
          } else {
            return false;
          }

        case 'box2':
          if (box2Val === '') {
            this.setState(
              {
                box2Val: this.state.clickVal,
                clickVal: clickVal === 'X' ? 'O' : 'X',
                userTurn: !userTurn
              },
              () => {
                if (this.checkTopRow() || this.checkMiddleColumn()) {
                  setTimeout(this.autoRestart, 2000);
                } else {
                  if (!this.haveBlankTiles()) {
                    this.setState({ tie: true });
                    setTimeout(this.autoRestart, 2000);
                  } else if (!this.state.userTurn) {
                    if (this.state.players === 1) {
                      setTimeout(this.computerTurn, 1000);
                    }
                  }
                }
              }
            );
            return true;
          } else {
            return false;
          }

        case 'box3':
          if (box3Val === '') {
            this.setState(
              {
                box3Val: this.state.clickVal,
                clickVal: clickVal === 'X' ? 'O' : 'X',
                userTurn: !userTurn
              },
              () => {
                if (
                  this.checkTopRow() ||
                  this.checkDiagTopRight() ||
                  this.checkCol3()
                ) {
                  setTimeout(this.autoRestart, 2000);
                } else {
                  if (!this.haveBlankTiles()) {
                    this.setState({ tie: true });
                    setTimeout(this.autoRestart, 2000);
                  } else if (!this.state.userTurn) {
                    if (this.state.players === 1) {
                      setTimeout(this.computerTurn, 1000);
                    }
                  }
                }
              }
            );
            return true;
          } else {
            return false;
          }

        case 'box4':
          if (box4Val === '') {
            this.setState(
              {
                box4Val: this.state.clickVal,
                clickVal: clickVal === 'X' ? 'O' : 'X',
                userTurn: !userTurn
              },
              () => {
                if (this.checkMiddleRow() || this.checkCol1()) {
                  setTimeout(this.autoRestart, 2000);
                } else {
                  if (!this.haveBlankTiles()) {
                    this.setState({ tie: true });
                    setTimeout(this.autoRestart, 2000);
                  } else if (!this.state.userTurn) {
                    if (this.state.players === 1) {
                      setTimeout(this.computerTurn, 1000);
                    }
                  }
                }
              }
            );
            return true;
          } else {
            return false;
          }

        case 'box5':
          if (box5Val === '') {
            this.setState(
              {
                box5Val: this.state.clickVal,
                clickVal: clickVal === 'X' ? 'O' : 'X',
                userTurn: !userTurn
              },
              () => {
                if (
                  this.checkDiagTopLeft() ||
                  this.checkDiagTopRight() ||
                  this.checkMiddleRow() ||
                  this.checkMiddleColumn()
                ) {
                  setTimeout(this.autoRestart, 2000);
                } else {
                  if (!this.haveBlankTiles()) {
                    this.setState({ tie: true });
                    setTimeout(this.autoRestart, 2000);
                  } else if (!this.state.userTurn) {
                    if (this.state.players === 1) {
                      setTimeout(this.computerTurn, 1000);
                    }
                  }
                }
              }
            );
            return true;
          } else {
            return false;
          }

        case 'box6':
          if (box6Val === '') {
            this.setState(
              {
                box6Val: this.state.clickVal,
                clickVal: clickVal === 'X' ? 'O' : 'X',
                userTurn: !userTurn
              },
              () => {
                if (this.checkMiddleRow() || this.checkCol3()) {
                  setTimeout(this.autoRestart, 2000);
                } else {
                  if (!this.haveBlankTiles()) {
                    this.setState({ tie: true });
                    setTimeout(this.autoRestart, 2000);
                  } else if (!this.state.userTurn) {
                    if (this.state.players === 1) {
                      setTimeout(this.computerTurn, 1000);
                    }
                  }
                }
              }
            );
            return true;
          } else {
            return false;
          }

        case 'box7':
          if (box7Val === '') {
            this.setState(
              {
                box7Val: box7Val !== '' ? box7Val : this.state.clickVal,
                clickVal: clickVal === 'X' ? 'O' : 'X',
                userTurn: !userTurn
              },
              () => {
                if (
                  this.checkCol1() ||
                  this.checkDiagTopRight() ||
                  this.checkBottomRow()
                ) {
                  setTimeout(this.autoRestart, 2000);
                } else {
                  if (!this.haveBlankTiles()) {
                    this.setState({ tie: true });
                    setTimeout(this.autoRestart, 2000);
                  } else if (!this.state.userTurn) {
                    if (this.state.players === 1) {
                      setTimeout(this.computerTurn, 1000);
                    }
                  }
                }
              }
            );
            return true;
          } else {
            return false;
          }

        case 'box8':
          if (box8Val === '') {
            this.setState(
              {
                box8Val: this.state.clickVal,
                clickVal: clickVal === 'X' ? 'O' : 'X',
                userTurn: !userTurn
              },
              () => {
                if (this.checkMiddleColumn() || this.checkBottomRow()) {
                  setTimeout(this.autoRestart, 2000);
                } else {
                  if (!this.haveBlankTiles()) {
                    this.setState({ tie: true });
                    setTimeout(this.autoRestart, 2000);
                  } else if (!this.state.userTurn) {
                    if (this.state.players === 1) {
                      setTimeout(this.computerTurn, 1000);
                    }
                  }
                }
              }
            );
            return true;
          } else {
            return false;
          }

        case 'box9':
          if (box9Val === '') {
            this.setState(
              {
                box9Val: this.state.clickVal,
                clickVal: clickVal === 'X' ? 'O' : 'X',
                userTurn: !userTurn
              },
              () => {
                if (
                  this.checkCol3() ||
                  this.checkDiagTopLeft() ||
                  this.checkBottomRow()
                ) {
                  setTimeout(this.autoRestart, 2000);
                } else {
                  if (!this.haveBlankTiles()) {
                    this.setState({ tie: true });
                    setTimeout(this.autoRestart, 2000);
                  } else if (!this.state.userTurn) {
                    if (this.state.players === 1) {
                      setTimeout(this.computerTurn, 1000);
                    }
                  }
                }
              }
            );
            return true;
          } else {
            return false;
          }
      }
    } else {
      this.setState({ tie: true });
      setTimeout(this.autoRestart, 1000);
    }
  };

  handleClick = ev => {
    let box = ev.target.id;
    this.putXO(box);
  };

  haveBlankTiles = () => {
    const {
      box1Val,
      box2Val,
      box3Val,
      box4Val,
      box5Val,
      box6Val,
      box7Val,
      box8Val,
      box9Val
    } = this.state;
    const boxes = [
      box1Val,
      box2Val,
      box3Val,
      box4Val,
      box5Val,
      box6Val,
      box7Val,
      box8Val,
      box9Val
    ];
    let counter = 0;
    boxes.forEach(box => {
      if (box === '') {
        counter++;
      }
    });
    if (counter === 0) {
      return false;
    } else {
      return true;
    }
  };

  howManyFilled = () => {
    const {
      box1Val,
      box2Val,
      box3Val,
      box4Val,
      box5Val,
      box6Val,
      box7Val,
      box8Val,
      box9Val
    } = this.state;
    const boxes = [
      box1Val,
      box2Val,
      box3Val,
      box4Val,
      box5Val,
      box6Val,
      box7Val,
      box8Val,
      box9Val
    ];
    let counter = 0;
    boxes.forEach(box => {
      if (box !== '') {
        counter++;
      }
    });
    return counter;
  };

  computerTurn = () => {
    console.log('computer turn acitvated');
    let prevPlayer = this.state.clickVal === 'X' ? 'O' : 'X';
    let computer = this.state.clickVal;
    if (this.haveBlankTiles) {
      const {
        box1Val,
        box2Val,
        box3Val,
        box4Val,
        box5Val,
        box6Val,
        box7Val,
        box8Val,
        box9Val
      } = this.state;
      const combinations = [
        box1Val,
        box2Val,
        box3Val,
        box4Val,
        box5Val,
        box6Val,
        box7Val,
        box8Val,
        box9Val
      ];

      /////// FIRST CHECK TO SEE IF THE GAME CAN BE WON RIGHT AWAY ///////
      if (combinations[0] === computer) {
        //// NEW BOX ENTRY POINT
        // Row 1 Entry 1
        if (combinations[1] === computer && combinations[2] === '') {
          this.putXO('box' + 3); //need one more than index value
          return true;
        } else if (combinations[2] === computer && combinations[1] === '') {
          this.putXO('box' + 2);
          return true;
        }
        // Diag L Entry 1
        else if (combinations[4] === computer && combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        } else if (combinations[8] === computer && combinations[4] === '') {
          this.putXO('box' + 5);
          return true;
        }
        // Col 1 Entry 1
        else if (combinations[3] === computer && combinations[6] === '') {
          this.putXO('box' + 7);
          return true;
        } else if (combinations[6] === computer && combinations[3] === '') {
          this.putXO('box' + 4);
          return true;
        }
      }

      if (combinations[1] === computer) {
        //// NEW BOX ENTRY POINT
        // Row 1 Entry 2
        if (combinations[0] === computer && combinations[2] === '') {
          this.putXO('box' + 3);
          return true;
        } else if (combinations[2] === computer && combinations[0] === '') {
          this.putXO('box' + 1);
          return true;
        }
        // Mid Col Entry 1
        else if (combinations[4] === computer && combinations[7] === '') {
          this.putXO('box' + 8);
          return true;
        } else if (combinations[7] === computer && combinations[4] === '') {
          this.putXO('box' + 5);
          return true;
        }
      }

      if (combinations[4] === computer) {
        //// NEW BOX ENTRY POINT
        // Mid Col Entry 2
        if (combinations[1] === computer && combinations[7] === '') {
          this.putXO('box' + 8);
          return true;
        } else if (combinations[7] === computer && combinations[1] === '') {
          this.putXO('box' + 2);
          return true;
        }
        // Mid Row Entry 1
        else if (combinations[3] === computer && combinations[5] === '') {
          this.putXO('box' + 6);
          return true;
        } else if (combinations[5] === computer && combinations[3] === '') {
          this.putXO('box' + 4);
          return true;
        }
        // Diag L Entry 2
        else if (combinations[0] === computer && combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        } else if (combinations[8] === computer && combinations[0] === '') {
          this.putXO('box' + 1);
          return true;
        }
        // Diag R Entry 2
        else if (combinations[2] === computer && combinations[6] === '') {
          this.putXO('box' + 7);
          return true;
        } else if (combinations[6] === computer && combinations[2] === '') {
          this.putXO('box' + 3);
          return true;
        }
      } else if (combinations[5] === computer) {
        //// NEW BOX ENTRY POINT
        // Col 3 Entry 1
        if (combinations[2] === computer && combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        } else if (combinations[8] === computer && combinations[2] === '') {
          this.putXO('box' + 3);
          return true;
        }
        // Mid Row Entry 2
        else if (combinations[4] === computer && combinations[3] === '') {
          this.putXO('box' + 4);
          return true;
        } else if (combinations[3] === computer && combinations[4] === '') {
          this.putXO('box' + 5);
          return true;
        }
      }

      if (combinations[6] === computer) {
        //// NEW BOX ENTRY POINT
        // Col 1 Entry 2
        if (combinations[7] === computer && combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        } else if (combinations[8] === computer && combinations[7] === '') {
          this.putXO('box' + 8);
          return true;
        }
        // Diag R Entry 1
        else if (combinations[4] === computer && combinations[2] === '') {
          this.putXO('box' + 3);
          return true;
        } else if (combinations[2] === computer && combinations[4] === '') {
          this.putXO('box' + 5);
          return true;
        }
        // Row 3 Entry 1
        else if (combinations[7] === computer && combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        } else if (combinations[8] === computer && combinations[7] === '') {
          this.putXO('box' + 8);
          return true;
        }
      }

      if (combinations[8] === computer) {
        //// NEW BOX ENTRY POINT
        // Col 3 Entry 2
        if (combinations[5] === computer && combinations[2] === '') {
          this.putXO('box' + 3);
          return true;
        } else if (combinations[2] === computer && combinations[5] === '') {
          this.putXO('box' + 6);
          return true;
        }
        // Row 3 Entry 2
        else if (combinations[7] === computer && combinations[6] === '') {
          this.putXO('box' + 7);
          return true;
        } else if (combinations[6] === computer && combinations[7] === '') {
          this.putXO('box' + 8);
          return true;
        }
      } else if (combinations[7] === computer) {
        if (combinations[8] === computer && combinations[6] === '') {
          this.putXO('box' + 7);
          return true;
        } else if (combinations[6] === computer && combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        }
      }

      ////// NO CHANCE FOR IMMEDIATE VICTORY, SO NOW PLAY DEFFENSIVELY //////
      // iterate through each index, check for rules like if there are 2 of opponent's type
      // use 'box' + (i+1) to say that's the boxNumVal to use if it meets the rules of strategy.
      // STRATEGY 1: check for 2 selections per row/column/diagonal
      if (combinations[0] === prevPlayer) {
        //// NEW BOX ENTRY POINT
        // Row 1 Entry 1
        if (combinations[1] === prevPlayer && combinations[2] === '') {
          this.putXO('box' + 3); //need one more than index value
          return true;
        } else if (combinations[2] === prevPlayer && combinations[1] === '') {
          this.putXO('box' + 2);
          return true;
        }
        // Diag L Entry 1
        else if (combinations[4] === prevPlayer && combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        } else if (combinations[8] === prevPlayer && combinations[4] === '') {
          this.putXO('box' + 5);
          return true;
        }
        // Col 1 Entry 1
        else if (combinations[3] === prevPlayer && combinations[6] === '') {
          this.putXO('box' + 7);
          return true;
        } else if (combinations[6] === prevPlayer && combinations[3] === '') {
          this.putXO('box' + 4);
          return true;
        }
      }

      if (combinations[1] === prevPlayer) {
        //// NEW BOX ENTRY POINT
        // Row 1 Entry 2
        if (combinations[0] === prevPlayer && combinations[2] === '') {
          this.putXO('box' + 3);
          return true;
        } else if (combinations[2] === prevPlayer && combinations[0] === '') {
          this.putXO('box' + 1);
          return true;
        }
        // Mid Col Entry 1
        else if (combinations[4] === prevPlayer && combinations[7] === '') {
          this.putXO('box' + 8);
          return true;
        } else if (combinations[7] === prevPlayer && combinations[4] === '') {
          this.putXO('box' + 5);
          return true;
        }
      }

      if (combinations[4] === prevPlayer) {
        //// NEW BOX ENTRY POINT
        // Mid Col Entry 2
        if (combinations[1] === prevPlayer && combinations[7] === '') {
          this.putXO('box' + 8);
          return true;
        } else if (combinations[7] === prevPlayer && combinations[1] === '') {
          this.putXO('box' + 2);
          return true;
        }
        // Mid Row Entry 1
        else if (combinations[3] === prevPlayer && combinations[5] === '') {
          this.putXO('box' + 6);
          return true;
        } else if (combinations[5] === prevPlayer && combinations[3] === '') {
          this.putXO('box' + 4);
          return true;
        }
        // Diag L Entry 2
        else if (combinations[0] === prevPlayer && combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        } else if (combinations[8] === prevPlayer && combinations[0] === '') {
          this.putXO('box' + 1);
          return true;
        }
        // Diag R Entry 2
        else if (combinations[2] === prevPlayer && combinations[6] === '') {
          this.putXO('box' + 7);
          return true;
        } else if (combinations[6] === prevPlayer && combinations[2] === '') {
          this.putXO('box' + 3);
          return true;
        }
      } else if (combinations[5] === prevPlayer) {
        //// NEW BOX ENTRY POINT
        // Col 3 Entry 1
        if (combinations[2] === prevPlayer && combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        } else if (combinations[8] === prevPlayer && combinations[2] === '') {
          this.putXO('box' + 3);
          return true;
        }
        // Mid Row Entry 2
        else if (combinations[4] === prevPlayer && combinations[3] === '') {
          this.putXO('box' + 4);
          return true;
        } else if (combinations[3] === prevPlayer && combinations[4] === '') {
          this.putXO('box' + 5);
          return true;
        }
      }

      if (combinations[6] === prevPlayer) {
        //// NEW BOX ENTRY POINT
        // Col 1 Entry 2
        if (combinations[7] === prevPlayer && combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        } else if (combinations[8] === prevPlayer && combinations[7] === '') {
          this.putXO('box' + 8);
          return true;
        }
        // Diag R Entry 1
        else if (combinations[4] === prevPlayer && combinations[2] === '') {
          this.putXO('box' + 3);
          return true;
        } else if (combinations[2] === prevPlayer && combinations[4] === '') {
          this.putXO('box' + 5);
          return true;
        }
        // Row 3 Entry 1
        else if (combinations[7] === prevPlayer && combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        } else if (combinations[8] === prevPlayer && combinations[7] === '') {
          this.putXO('box' + 8);
          return true;
        }
      }

      if (combinations[8] === prevPlayer) {
        //// NEW BOX ENTRY POINT
        // Col 3 Entry 2
        if (combinations[5] === prevPlayer && combinations[2] === '') {
          this.putXO('box' + 3);
          return true;
        } else if (combinations[2] === prevPlayer && combinations[5] === '') {
          this.putXO('box' + 6);
          return true;
        }
        // Row 3 Entry 2
        else if (combinations[7] === prevPlayer && combinations[6] === '') {
          this.putXO('box' + 7);
          return true;
        } else if (combinations[6] === prevPlayer && combinations[7] === '') {
          this.putXO('box' + 8);
          return true;
        }
      } else if (combinations[7] === prevPlayer) {
        if (combinations[8] === prevPlayer && combinations[6] === '') {
          this.putXO('box' + 7);
          return true;
        } else if (combinations[6] === prevPlayer && combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        }
      }

      if (combinations[3] === prevPlayer) {
        //// NEW BOX ENTRY POINT
        if (combinations[6] === prevPlayer && combinations[0] === '') {
          this.putXO('box' + 1);
          return true;
        } else if (combinations[0] === prevPlayer && combinations[6] === '') {
          this.putXO('box' + 7);
          return true;
        }
      }
      // HANDLE IF THERE ARE NO GROUPS WITH 2 SPOTS PICKED
      if (this.howManyFilled() === 0) {
        if (combinations[8] === '') {
          //// COMPUTER FIRST MOVE IF IT STARTS GAME
          this.putXO('box' + 9);
          return true;
        }
      }

      if (this.howManyFilled() === 1) {
        if (combinations[4] === '') {
          this.putXO('box' + 5);
          return true;
        } else if (combinations[8] === '') {
          this.putXO('box' + 9);
          return true;
        } else if (combinations[6] === '') {
          this.putXO('box' + 7);
          return true;
        } else if (combinations[0] === '') {
          this.putXO('box' + 1);
          return true;
        } else if (combinations[2] === '') {
          this.putXO('box' + 3);
          return true;
        }
      } else if (this.howManyFilled() === 2) {
        if (combinations[4] !== '') {
          this.putXO('box' + 1);
          return true;
        } else {
          this.putXO('box' + 5);
          return true;
        }
      } else if (this.howManyFilled() >= 3 && this.howManyFilled() <= 6) {
        if (combinations[0] === prevPlayer && combinations[8] === prevPlayer) {
          this.putXO('box' + 2);
          return true;
        } else if (
          combinations[2] === prevPlayer &&
          combinations[6] === prevPlayer
        ) {
          this.putXO('box' + 8);
          return true;
        } else if (
          combinations[4] === prevPlayer &&
          combinations[0] === prevPlayer
        ) {
          this.putXO('box' + 7);
          return true;
        } else {
          for (let i = 0; i < combinations.length; i++) {
            if (combinations[i] === prevPlayer) {
              if (combinations[i + 1] === '') {
                this.putXO('box' + (i + 2));
                return true;
              } else if (combinations[i + 2] === '') {
                this.putXO('box' + (i + 3));
                return true;
              } else if (combinations[i + 3] === '') {
                this.putXO('box' + (i + 4));
                return true;
              }
            }
          }
        }
      } else if (this.howManyFilled() > 6) {
        for (let i = 0; i < combinations.length; i++) {
          if (combinations[i] === '') {
            this.putXO('box' + (i + 1));
            return true;
          }
        }
      }
    } else {
      //// HANDLE IF THERE ARE NO BLANK TILES ON THE COMPUTERS TURN
      this.autoRestart();
    }
  };

  // RESET OPTIONS //
  fullReset = () => {
    this.setState({
      box1Val: '',
      box2Val: '',
      box3Val: '',
      box4Val: '',
      box5Val: '',
      box6Val: '',
      box7Val: '',
      box8Val: '',
      box9Val: '',
      row1Victory: false,
      row2Victory: false,
      row3Victory: false,
      col1Victory: false,
      col2Victory: false,
      col3Victory: false,
      diagTopLVictory: false,
      diagTopRVictory: false,
      tie: false,
      xWins: 0,
      xWon: false,
      oWins: 0,
      oWon: false,
      clickVal: '',
      players: '',
      userTurn: true,
      gameOver: true,
      activeGame: false
    });
  };

  autoRestart = () => {
    this.setState(
      {
        box1Val: '',
        box2Val: '',
        box3Val: '',
        box4Val: '',
        box5Val: '',
        box6Val: '',
        box7Val: '',
        box8Val: '',
        box9Val: '',
        row1Victory: false,
        row2Victory: false,
        row3Victory: false,
        col1Victory: false,
        col2Victory: false,
        col3Victory: false,
        diagTopLVictory: false,
        diagTopRVictory: false,
        tie: false,
        xWon: false,
        oWon: false,
        activeGame: true
      },
      () => {
        if (!this.state.userTurn) {
          if (this.state.players === 1) {
            setTimeout(this.computerTurn, 1000);
          }
        }
      }
    );
  };
  // END RESET OPTIONS //

  // GAME SETUP //
  handleXOPick = ev => {
    let choice = ev.target.value;
    this.setState({
      clickVal: choice,
      activeGame: true
    });
  };

  // CHECK WIN OPTIONS //
  checkTopRow = () => {
    const { box1Val, box2Val, box3Val, clickVal, xWins, oWins } = this.state;
    let prevPlayer = clickVal === 'X' ? 'O' : 'X';
    if (box1Val !== '' && box1Val === box2Val && box1Val === box3Val) {
      this.setState({
        row1Victory: true,
        xWins: prevPlayer === 'X' ? xWins + 1 : xWins,
        xWon: prevPlayer === 'X' ? true : false,
        oWins: prevPlayer === 'O' ? oWins + 1 : oWins,
        oWon: prevPlayer === 'O' ? true : false
      });
      return true;
    }
  };

  checkCol1 = () => {
    const { box1Val, box4Val, box7Val, clickVal, xWins, oWins } = this.state;
    let prevPlayer = clickVal === 'X' ? 'O' : 'X';
    if (box1Val !== '' && box1Val === box4Val && box1Val === box7Val) {
      this.setState({
        col1Victory: true,
        xWins: prevPlayer === 'X' ? xWins + 1 : xWins,
        xWon: prevPlayer === 'X' ? true : false,
        oWins: prevPlayer === 'O' ? oWins + 1 : oWins,
        oWon: prevPlayer === 'O' ? true : false
      });
      return true;
    }
  };

  checkDiagTopLeft = () => {
    const { box1Val, box5Val, box9Val, clickVal, xWins, oWins } = this.state;
    let prevPlayer = clickVal === 'X' ? 'O' : 'X';
    if (box1Val !== '' && box1Val === box5Val && box1Val === box9Val) {
      this.setState({
        diagTopLVictory: true,
        xWins: prevPlayer === 'X' ? xWins + 1 : xWins,
        xWon: prevPlayer === 'X' ? true : false,
        oWins: prevPlayer === 'O' ? oWins + 1 : oWins,
        oWon: prevPlayer === 'O' ? true : false
      });
      return true;
    }
  };

  checkMiddleRow = () => {
    const { box4Val, box5Val, box6Val, clickVal, xWins, oWins } = this.state;
    let prevPlayer = clickVal === 'X' ? 'O' : 'X';
    if (box4Val !== '' && box4Val === box5Val && box4Val === box6Val) {
      this.setState({
        row2Victory: true,
        xWins: prevPlayer === 'X' ? xWins + 1 : xWins,
        xWon: prevPlayer === 'X' ? true : false,
        oWins: prevPlayer === 'O' ? oWins + 1 : oWins,
        oWon: prevPlayer === 'O' ? true : false
      });
      return true;
    }
  };

  checkMiddleColumn = () => {
    const { box2Val, box5Val, box8Val, clickVal, xWins, oWins } = this.state;
    let prevPlayer = clickVal === 'X' ? 'O' : 'X';
    if (box2Val !== '' && box2Val === box5Val && box2Val === box8Val) {
      this.setState({
        col2Victory: true,
        xWins: prevPlayer === 'X' ? xWins + 1 : xWins,
        xWon: prevPlayer === 'X' ? true : false,
        oWins: prevPlayer === 'O' ? oWins + 1 : oWins,
        oWon: prevPlayer === 'O' ? true : false
      });
      return true;
    }
  };

  checkCol3 = () => {
    const { box3Val, box6Val, box9Val, clickVal, xWins, oWins } = this.state;
    let prevPlayer = clickVal === 'X' ? 'O' : 'X';
    if (box3Val !== '' && box3Val === box6Val && box3Val === box9Val) {
      this.setState({
        col3Victory: true,
        xWins: prevPlayer === 'X' ? xWins + 1 : xWins,
        xWon: prevPlayer === 'X' ? true : false,
        oWins: prevPlayer === 'O' ? oWins + 1 : oWins,
        oWon: prevPlayer === 'O' ? true : false
      });
      return true;
    }
  };

  checkDiagTopRight = () => {
    const { box3Val, box5Val, box7Val, clickVal, xWins, oWins } = this.state;
    let prevPlayer = clickVal === 'X' ? 'O' : 'X';
    if (box3Val !== '' && box3Val === box5Val && box3Val === box7Val) {
      this.setState({
        diagTopRVictory: true,
        xWins: prevPlayer === 'X' ? xWins + 1 : xWins,
        xWon: prevPlayer === 'X' ? true : false,
        oWins: prevPlayer === 'O' ? oWins + 1 : oWins,
        oWon: prevPlayer === 'O' ? true : false
      });
      return true;
    }
  };

  checkBottomRow = () => {
    const { box7Val, box8Val, box9Val, clickVal, xWins, oWins } = this.state;
    let prevPlayer = clickVal === 'X' ? 'O' : 'X';
    if (box7Val !== '' && box7Val === box8Val && box7Val === box9Val) {
      this.setState({
        row3Victory: true,
        xWins: prevPlayer === 'X' ? xWins + 1 : xWins,
        xWon: prevPlayer === 'X' ? true : false,
        oWins: prevPlayer === 'O' ? oWins + 1 : oWins,
        oWon: prevPlayer === 'O' ? true : false
      });
      return true;
    }
  };

  handlePlayerNum = ev => {
    let playerNum = ev.target.value;
    this.setState({ players: parseInt(playerNum, 10) });
  };

  render() {
    return (
      <div className="container main">
        {this.state.activeGame && (
          <div className="gameBoard center-align">
            {this.state.tie ? (
              <h2 className="turn blue-grey lighten-3">Tie!</h2>
            ) : this.state.xWon ? (
              <h2 className="turn blue-grey lighten-3">X Won!</h2>
            ) : this.state.oWon ? (
              <h2 className="turn blue-grey lighten-3">O Won!</h2>
            ) : (
              <h2 className="turn blue-grey lighten-3">
                {this.state.clickVal}'s turn!
              </h2>
            )}
            <div className="row">
              <Square
                box={'box1'}
                tie={this.state.tie}
                className={
                  (this.state.row1Victory && 'green') ||
                  (this.state.diagTopLVictory && 'green') ||
                  (this.state.col1Victory && 'green') ||
                  'brown lighten-4'
                }
                handleClick={this.handleClick}
                clickVal={this.state.box1Val}
              />
              <Square
                box={'box2'}
                tie={this.state.tie}
                className={
                  (this.state.col2Victory && 'green') ||
                  (this.state.row1Victory && 'green') ||
                  'brown lighten-4'
                }
                handleClick={this.handleClick}
                clickVal={this.state.box2Val}
              />
              <Square
                box={'box3'}
                tie={this.state.tie}
                className={
                  (this.state.row1Victory && 'green') ||
                  (this.state.diagTopRVictory && 'green') ||
                  (this.state.col3Victory && 'green') ||
                  'brown lighten-4'
                }
                handleClick={this.handleClick}
                clickVal={this.state.box3Val}
              />
            </div>
            <div className="row">
              <Square
                box={'box4'}
                tie={this.state.tie}
                className={
                  (this.state.row2Victory && 'green') ||
                  (this.state.col1Victory && 'green') ||
                  'brown lighten-4'
                }
                handleClick={this.handleClick}
                clickVal={this.state.box4Val}
              />
              <Square
                box={'box5'}
                tie={this.state.tie}
                className={
                  (this.state.row2Victory && 'green') ||
                  (this.state.col2Victory && 'green') ||
                  (this.state.diagTopRVictory && 'green') ||
                  (this.state.diagTopLVictory && 'green') ||
                  'brown lighten-4'
                }
                handleClick={this.handleClick}
                clickVal={this.state.box5Val}
              />
              <Square
                box={'box6'}
                tie={this.state.tie}
                className={
                  (this.state.col3Victory && 'green') ||
                  (this.state.row2Victory && 'green') ||
                  'brown lighten-4'
                }
                handleClick={this.handleClick}
                clickVal={this.state.box6Val}
              />
            </div>
            <div className="row">
              <Square
                box={'box7'}
                tie={this.state.tie}
                className={
                  (this.state.col1Victory && 'green') ||
                  (this.state.row3Victory && 'green') ||
                  (this.state.diagTopRVictory && 'green') ||
                  'brown lighten-4'
                }
                handleClick={this.handleClick}
                clickVal={this.state.box7Val}
              />
              <Square
                box={'box8'}
                tie={this.state.tie}
                className={
                  (this.state.col2Victory && 'green') ||
                  (this.state.row3Victory && 'green') ||
                  'brown lighten-4'
                }
                handleClick={this.handleClick}
                clickVal={this.state.box8Val}
              />
              <Square
                box={'box9'}
                tie={this.state.tie}
                className={
                  (this.state.row3Victory && 'green') ||
                  (this.state.col3Victory && 'green') ||
                  (this.state.diagTopLVictory && 'green') ||
                  'brown lighten-4'
                }
                handleClick={this.handleClick}
                clickVal={this.state.box9Val}
              />
            </div>
            <div className="scoreCont container center-align">
              <h5
                className={
                  this.state.xWon
                    ? 'score left green center-align'
                    : 'score left center-align'
                }
              >
                "X" wins: {this.state.xWins}
              </h5>
              <button
                className="orange lighten-2 btn reset"
                onClick={this.fullReset}
              >
                Reset
              </button>
              <h5
                className={
                  this.state.oWon
                    ? 'score right green center-align'
                    : 'score right center-align'
                }
              >
                "O" wins: {this.state.oWins}
              </h5>
            </div>
          </div>
        )}
        {!this.state.activeGame && (
          <div>
            {this.state.players !== '' && (
              <div className="center-align">
                <h4>Would you like to be X's or O's?</h4>
                <button
                  className="btn blue-grey xoBtn"
                  onClick={this.handleXOPick}
                  value={'X'}
                >
                  X
                </button>
                <button
                  className="btn blue-grey xoBtn"
                  onClick={this.handleXOPick}
                  value={'O'}
                >
                  O
                </button>
              </div>
            )}
            <div className="center-align">
              <h4 className="playersQtitle">How many players?</h4>
              <button
                onClick={this.handlePlayerNum}
                value={1}
                className={
                  this.state.players === 1
                    ? 'blue btn playerSel'
                    : 'blue-grey btn playerSel'
                }
              >
                One Player
              </button>
              <button
                onClick={this.handlePlayerNum}
                value={2}
                className={
                  this.state.players === 2
                    ? 'blue btn playerSel'
                    : 'blue-grey btn playerSel'
                }
              >
                Two Players
              </button>
            </div>
          </div>
        )}
      </div> // end main container
    );
  }
}
export default TicTacToe;
