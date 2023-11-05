import React from 'react';
import ReactDOM from 'react-dom/client';
import 'flowbite';
import flagsmith from 'flagsmith'
import { FlagsmithProvider } from 'flagsmith/react'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FlagsmithProvider options={{
        environmentID: "DCYBQgBcuRF86fmvgZc2os",
        cacheFlags:true
    }} flagsmith={flagsmith}>
      <App />
    </FlagsmithProvider>
  </React.StrictMode>
);
