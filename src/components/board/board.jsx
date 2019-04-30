import React, { Component } from "react";

import Tile from "../tile/tile";

class Board extends Component {
  renderTile(i) {
    return (
      <Tile value={this.props.tiles[i]} onClick={() => this.props.onClick(i)} />
    );
  }
  render() {
    return (
      <div className="board">
        <div className="board-row">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
        </div>
        <div className="board-row">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
        </div>
        <div className="board-row">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
        </div>
      </div>
    );
  }
}

export default Board;
