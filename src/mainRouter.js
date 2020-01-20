import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ParentsTochailed from './componet/ChiledPage/ParentsTochailed'
import Datafacing from './componet/datafacing'
import DataFacingUseReduce from './componet/datafacingusereduce'
import FomicForm from './componet/fomicform'
import Staticform from './componet/staticform'
import Reduxform from './componet/reduxform'
import Usememocounter from './componet/usememocounter'
import TodoList from './componet/TodoList'
import LoginPage from './authComponet/loginPage'
import SigninPage from './authComponet/signinPage'
import PrivteRouter from './authComponet/priveteRouter'
import Navigationbar from './core/navbar'

const MainRouter = () => (
    <div>
        <Navigationbar />
        <Switch>
            <Route exact path="/" component={LoginPage}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/signin" component={SigninPage}></Route>
            <div className="container-fluid">
                <PrivteRouter path="/staticform" component={Staticform}></PrivteRouter>
                <PrivteRouter path="/reduxform" component={Reduxform}></PrivteRouter>
                <PrivteRouter path="/fomicform" component={FomicForm}></PrivteRouter>
                <PrivteRouter path="/Datafacing" component={Datafacing}></PrivteRouter>
                <PrivteRouter path="/DataFacingUseReduce" component={DataFacingUseReduce}></PrivteRouter>
                <PrivteRouter path="/ParentsTochailed" component={ParentsTochailed}></PrivteRouter>
                <PrivteRouter path="/Usememocounter" component={Usememocounter}></PrivteRouter>
                <PrivteRouter path="/todolist" component={TodoList}></PrivteRouter>
            </div>
        </Switch>
    </div>
)

export default MainRouter