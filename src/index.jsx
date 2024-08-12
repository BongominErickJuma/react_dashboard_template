import React from 'react'
import ReactDOM from 'react-dom/client'

// Bootstrap styles & JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Fonts 
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/nunito"; // Defaults to weight 400
import "@fontsource/poppins"; // Defaults to weight 400

// CSS styles
import './index.css'

// Main JSX 

import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
