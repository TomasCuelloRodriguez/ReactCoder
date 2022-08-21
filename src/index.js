import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
import NavBar from './components/NavBar.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);


