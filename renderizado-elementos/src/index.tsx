import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const root2 = ReactDOM.createRoot(
  document.getElementById('root2') as HTMLElement
);

const tick = () => {
  const element = <div>
    <h1>Hello, World</h1>
    <h2>It's {new Date().toLocaleTimeString()}</h2>
  </div>


  root2.render(element);
}

setInterval(tick, 1000);


reportWebVitals();
