import React, { Component } from "react";

import "./history.css";

class History extends Component {
  render() {
    const moves = this.props.history.map((boardConfig, moveNumber) => {
      const description = moveNumber
        ? "Go To Step " + moveNumber
        : "Restart Game";
      return (
        <li key={moveNumber} className="list-group-item">
          <button onClick={() => this.props.onClick(moveNumber)}>
            {description}
          </button>
        </li>
      );
    });
    return (
      <div>
        <h1>History</h1>
        <ol className="list-group">{moves}</ol>
      </div>
    );
  }
}

export default History;
