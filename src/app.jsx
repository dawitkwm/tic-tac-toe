import React, { Component } from "react";

import "./app.css";

import Board from "./components/board/board";
import History from "./components/history/history";
import Info from "./components/info/info";

import {
  calculateWinner,
  calculateTie,
  genericWinnerCalculator
} from "./util/util";

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
    if (genericWinnerCalculator(tiles) || tiles[i]) {
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
    const winner = genericWinnerCalculator(current.tiles);

    let info;
    if (winner) {
      info = "Winner is player " + winner;
    } else if (calculateTie(current.tiles)) {
      info = "It is a tie";
    } else {
      info = "Next player is " + (this.state.xTurn ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-info">
          <Info info={info} />
        </div>
        <div className="d-flex justify-content-center game-board">
          <Board tiles={current.tiles} onClick={i => this.handleClick(i)} />
        </div>
        <div className="d-flex justify-content-center game-history">
          <History history={history} onClick={step => this.jumpTo(step)} />
        </div>
      </div>
    );
  }
}
export default App;
