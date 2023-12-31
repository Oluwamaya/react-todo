import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import User from './User';
import Todo from './props/Todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './Notfound';
import Nav from './Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/user' element={<User/>} />
      <Route path='/*' element={<Notfound/>} />
      <Route path='/nav' element={<Nav/>} />
      <Route path='/todo' element={<Todo/>} />
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
