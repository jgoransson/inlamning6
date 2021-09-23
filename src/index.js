import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //Ta vår applikationskomponent som vi importerar här

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //Och placera den i root
);

