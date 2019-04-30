import React, { Component } from "react";

import "./history.css";

class History extends Component {
  render() {
    const moves = this.props.history.map((step, move) => {
      const description = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.props.onClick(move)}>
            {description}
          </button>
        </li>
      );
    });
    return (
      <div>
        <p>History</p>
        <ol>{moves}</ol>
      </div>
    );
  }
}

export default History;
