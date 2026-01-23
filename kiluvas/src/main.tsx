import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' 
import './index.css'    

const rootElement = document.getElementById('app') || document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element with id "app" or "root"');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);