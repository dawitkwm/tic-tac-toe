import React, { Component } from "react";

import "./app.css";

import Board from "./components/board/board";
import History from "./components/history/history";
import Info from "./components/info/info";

class App extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-info">
          <Info />
        </div>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-history">
          <History />
        </div>
      </div>
    );
  }
}

export default App;
