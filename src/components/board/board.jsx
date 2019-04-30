import React, { Component } from "react";

import Tile from "../tile/tile";

class Board extends Component {
  render() {
    return (
      <div className="board">
        <div className="board-row">
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div className="board-row">
          <Tile />
          <Tile />
          <Tile />
        </div>
        <div className="board-row">
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>
    );
  }
}

export default Board;
