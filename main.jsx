import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';// Correct path to App.js
import './index.css'; // Correct path to index.css
import { BrowserRouter } from 'react-router-dom';
import { StoreContextProvider } from './src/Pages/Context/StoreContext'; // Correct path to StoreContext.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
)
