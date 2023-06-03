import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { ResultContextProvider } from './contexts/ResultContextProvider';
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <ResultContextProvider>
    <Router>
    <App />
    </Router>
    </ResultContextProvider>,
     
    document.getElementById('root'),
  );