import React, { Component } from "react";

import "./app.css";

import Board from "./components/board/board";
import History from "./components/history/history";
import Info from "./components/info/info";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ tiles: Array(9).fill(null) }],
      xTurn: true,
      moveNumber: 0
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.moveNumber + 1);
    const current = history[history.length - 1];
    const tiles = current.tiles.slice(); //copy
    tiles[i] = this.state.xTurn ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          tiles: tiles
        }
      ]),
      moveNumber: history.length,
      xTurn: !this.state.xTurn
    });
  }

  render() {
    return (
      <div className="game">
        <div className="game-info">
          <Info />
        </div>
        <div className="game-board">
          <Board
            tiles={this.state.history[this.state.moveNumber].tiles}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-history">
          <History />
        </div>
      </div>
    );
  }
}

export default App;
