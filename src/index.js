import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/App';
import Home from './components/Home'
import Procedures from './components/Procedures'
import Contact from './components/Contact'
import './styles.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="procedures" element={<Procedures />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)