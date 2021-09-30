import React from 'react';
import ReactDOM from 'react-dom';

import Routers from './routers/index'
import puepera from './views/puerpera'

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);

