// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

// index.js or App.js
import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore
import { covidReducer } from '../redux/reducers'; // Combine with other reducers if needed
// import thunk from 'redux-thunk'; // If using redux-thunk middleware

import App from './App'; // Your main component

// Create the Redux store
const store = configureStore({
  reducer: covidReducer,
  // middleware: [thunk], // Add any other middleware here
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
