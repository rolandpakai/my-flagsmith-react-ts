import React from 'react';
import ReactDOM from 'react-dom/client';
import flagsmith from 'flagsmith'
import { FlagsmithProvider } from 'flagsmith/react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FlagsmithProvider options={{
        environmentID: "QjgYur4LQTwe5HpvbvhpzK",
        cacheFlags:true
    }} flagsmith={flagsmith}>
      <App />
    </FlagsmithProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
