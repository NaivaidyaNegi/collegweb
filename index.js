import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Count from './Count'
import PersonalizedMessage from './msg';
import UserForm from './form';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <h1>hello </h1>
// <App name="Shubh" roll="69999" />/*
//  <Count/>
  // <App />
//  <PersonalizedMessage prop="nav"/>*/
    <UserForm/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
