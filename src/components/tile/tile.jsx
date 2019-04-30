import React, { Component } from "react";

class Tile extends Component {
  render() {
    return (
      <button className="tile" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Tile;
