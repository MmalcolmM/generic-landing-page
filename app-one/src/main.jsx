import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure it's 'react-dom/client' for React 18
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
