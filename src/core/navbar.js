import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../style/style.css'

import { isAuthenticated } from '../authComponet/index'

const isActive = (history, path) => {
    if (history.location.pathname === path)
        return { color: "#aeb5bb" }; else
        return { color: "#ffffff" }
};


const signout = () => {
    window.location.href = "/login";
    localStorage.clear();
}


const Navigationbar = ({ history }) => (
    <div>
        {isAuthenticated() && (
            <>
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
                        <Link className='nav-link-signout' to='/login' onClick={() => signout()}>signout</Link>
                    </Nav>
                </Navbar>
            </>
        )}

    </div >
)

export default withRouter(Navigationbar)

