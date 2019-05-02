import React, { Component } from "react";

import "./tile.css";
class Tile extends Component {
  render() {
    return (
      <button
        className={"tile " + this.props.value}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Tile;
