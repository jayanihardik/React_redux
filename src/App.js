import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './style/style.css'
import MainRouter from './mainRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className='nav-link' to='/staticform'>StaticForm</Link>
          <Link className='nav-link' to='/reduxform'>ReduxForm</Link>
          <Link className='nav-link' to='/fomicform'>FormicFrom</Link>
          <Link className='nav-link' to='/Datafacing'>DataFacing</Link>
          <Link className='nav-link' to='/DataFacingUseReduce'>DataFacingUseReduce</Link>
          <Link className='nav-link' to='/Usememocounter'>UseMemoCounter</Link>
          <Link className='nav-link' to='/ParentsTochailed'>ParentsTochailed</Link>
          <Link className='nav-link' to='/todolist'>TodoList</Link>
        </Nav>
      </Navbar>
      <div className="container-fluid">
        <MainRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
