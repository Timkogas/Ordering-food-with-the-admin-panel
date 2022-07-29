import React from 'react';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import dishesReducer from './store/reducers/dishesReducer'
import ordersReducer from './store/reducers/ordersReducer';

const store = configureStore({reducer: {
  dishes: dishesReducer,
  orders: ordersReducer
}});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
