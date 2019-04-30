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
    if (calculateWinner(tiles) || tiles[i]) {
      return;
    }

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

  jumpTo(step) {
    this.setState({
      moveNumber: step,
      xTurn: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.moveNumber];
    const winner = calculateWinner(current.tiles);

    let info;
    if (winner) {
      info = "Winner: " + winner;
    } else {
      info = "Next player: " + (this.state.xTurn ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-info">
          <Info info={info} />
        </div>
        <div className="game-board">
          <Board tiles={current.tiles} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-history">
          <History history={history} onClick={step => this.jumpTo(step)} />
        </div>
      </div>
    );
  }
}

function calculateWinner(tiles) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
      return tiles[a];
    }
  }
  return null;
}

export default App;
