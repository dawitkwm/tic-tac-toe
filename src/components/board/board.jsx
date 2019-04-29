import React, { Component } from "react";

import Tile from "../tile/tile";

class Board extends Component {
  state = {
    tiles: Array(9).fill(null)
  };
  render() {
    return <Tile />;
  }
}

export default Board;
