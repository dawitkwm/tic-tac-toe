import React, { Component } from "react";

import "./history.css";

class History extends Component {
  render() {
    const moves = Array(9).fill(null);
    const history = moves.map((h, i) => {
      const button = i > 0 ? <button key={i}>Go back to move #{i}</button> : "";
      return button;
    });
    return <div>{history}</div>;
  }
}

export default History;
