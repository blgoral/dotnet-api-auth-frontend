import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak();

function initKeycloak() {
  keycloak.init({
    onLoad: 'login-required'
  }).then(function(authenticated) {
      console.log(authenticated ? 'authenticated' : 'not authenticated');
      loadData();
  }).catch(function() {
      console.log('failed to initialize');
  });
}

initKeycloak();

const loadData = () => {
  const apiUrl = 'https://localhost:7180/WeatherForecast';

  fetch(apiUrl, {
    headers: {
      'Authorization': 'Bearer ' + keycloak.token
    }
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}


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
