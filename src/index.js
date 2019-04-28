import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Tile from './components/tile/tile';

import * as serviceWorker from './serviceWorker';

ReactDOM.render( < Tile /> , document.getElementById('root'));

serviceWorker.unregister();