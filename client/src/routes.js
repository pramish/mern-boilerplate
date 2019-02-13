import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';

// Components
const App = require('./components/App/App.js');

module.exports = (
  <BrowserRouter>
    <Route path='/' exact component={App} />
  </BrowserRouter>
);
