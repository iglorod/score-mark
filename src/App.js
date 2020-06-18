import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import Layout from './components/Layout/Layout';
import { handleError } from './utility/utility';
import 'antd/dist/antd.css';
import 'three-dots/dist/three-dots.min.css';
import './App.css';

function App() {
  axios.interceptors.request.use(null, error => {
    handleError(error);
    return Promise.reject(error);
  })

  axios.interceptors.response.use(null, error => {
    handleError(error);
    return Promise.reject(error);
  })

  return (
    <div className='App'>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </div>
  );
}

export default App;
