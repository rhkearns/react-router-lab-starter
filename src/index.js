import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
<App />, rootElement);
