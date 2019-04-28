import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Board from "./components/board/board";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Board />, document.getElementById("root"));

serviceWorker.unregister();
