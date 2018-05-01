import React, { Component } from 'react';
import './App.css';
import Simon from '../src/components/Simon';
import TicTacToe from '../src/components/TicTacToe';
import PomodoroClock from '../src/components/PomodoroClock';

class App extends Component {
  render() {
    return (
      <div>
        <div className="simon">
          <Simon />
        </div>
        <div className="tictactoe">
          <TicTacToe />
        </div>
        <div>
          <PomodoroClock className="pomodoro" />
        </div>
      </div>
    );
  }
}

export default App;
