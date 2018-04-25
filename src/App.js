import React, { Component } from 'react';
import './App.css';
import Simon from '../src/components/Simon';
import TicTacToe from '../src/components/TicTacToe';

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
      </div>
    );
  }
}

export default App;
