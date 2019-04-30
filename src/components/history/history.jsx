import React, { Component } from "react";

import "./history.css";

class History extends Component {
  render() {
    const moves = Array(2).fill(null);
    const history = moves.map((h, i) => {
      const button = i > 0 ? <button key={i}>Move #{i}</button> : "";
      return button;
    });
    return (
      <div>
        <p>History</p>
        <div>{history}</div>
      </div>
    );
  }
}

export default History;
