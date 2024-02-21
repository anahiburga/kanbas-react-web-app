import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'; // imports from App.tsx. The .tsx extension is implied
import reportWebVitals from './reportWebVitals';

// retrieves a reference to the DOM element declared in public/index.html
// via document.getElementById('root')
// ReactDOM then creates an instance of the App component and appends its output 
// to the element whose ID = root
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);
