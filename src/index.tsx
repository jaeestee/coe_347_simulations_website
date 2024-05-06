import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Test } from './Test';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Test />
    </Router>
  </React.StrictMode>,
  document.getElementById('react-root'),
);
