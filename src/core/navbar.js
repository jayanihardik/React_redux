import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../style/style.css'

import { isAuthenticated } from '../authComponet/index'


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
                        <Link className='nav-link' to='/staticForm'>staticForm</Link>
                        <Link className='nav-link' to='/reduxForm'>reduxForm</Link>
                        <Link className='nav-link' to='/formicForm'>formicFrom</Link>
                        <Link className='nav-link' to='/DataFetching'>dataFacing</Link>
                        <Link className='nav-link' to='/DataFetchingUsingRedux'>DataFetchingUsingRedux</Link>
                        <Link className='nav-link' to='/useMemoCounter'>useMemoCounter</Link>
                        <Link className='nav-link' to='/parentsToChild'>parentsToChild</Link>
                        <Link className='nav-link' to='/todolist'>todoList</Link>
                        <Link className='nav-link-signout' to='/login' onClick={() => signout()}>signout</Link>
                    </Nav>
                </Navbar>
            </>
        )}

    </div >
)

export default withRouter(Navigationbar)

