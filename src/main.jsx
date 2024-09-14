import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
// import App from "./App";
// import App from './App.jsx'
import "./index.css";
import viteLogo from "/vite.svg";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <img src='{viteLogo}' alt='vite logo' />
  </React.StrictMode>,
)
