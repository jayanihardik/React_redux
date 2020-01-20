import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import MainRouter from './mainRouter';
function App() {
  return (
    <BrowserRouter>
      <MainRouter />
      <ToastContainer autoClose={1500} />
    </BrowserRouter>
  );
}

export default App;
