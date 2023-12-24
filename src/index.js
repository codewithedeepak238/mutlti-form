import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormContextProvider } from './context/FormContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </React.StrictMode>
);
