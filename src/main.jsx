import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//install aos
// npm i aos
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
