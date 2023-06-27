import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import { ContextProvider } from './context/ShopContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Layout />
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
