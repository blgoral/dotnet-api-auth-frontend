import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Keycloak from 'keycloak-js';

function initKeycloak() {
  const keycloak = new Keycloak();
  keycloak.init({
    onLoad: 'login-required'
  }).then(function(authenticated) {
      alert(authenticated ? 'authenticated' : 'not authenticated');
  }).catch(function() {
      alert('failed to initialize');
  });
}

initKeycloak();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
