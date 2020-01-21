import React from 'react'
import { Switch } from 'react-router-dom'
import LoginPage from './authComponet/loginPage'
import PrivteRouter from './authComponet/priveteRouter'
import SigninPage from './authComponet/signinPage'
import ParentsTochailed from './componet/ChiledPage/ParentsTochailed'
import Datafacing from './componet/datafacing'
import DataFacingUseReduce from './componet/datafacingusereduce'
import FomicForm from './componet/fomicform'
import Reduxform from './componet/reduxform'
import Staticform from './componet/staticform'
import TodoList from './componet/TodoList'
import Usememocounter from './componet/usememocounter'
import Navigationbar from './core/navbar'


const MainRouter = () => (
    <div>
        <Navigationbar />
        <Switch>
            <PrivteRouter.LoginRouter exact path="/" component={LoginPage}></PrivteRouter.LoginRouter>
            <PrivteRouter.LoginRouter exact path="/login" component={LoginPage}></PrivteRouter.LoginRouter>
            <PrivteRouter.LoginRouter exact path="/signin" component={SigninPage}></PrivteRouter.LoginRouter>
            <div className="container-fluid">
                <PrivteRouter.PrivetRouter path="/staticform" component={Staticform}></PrivteRouter.PrivetRouter>
                <PrivteRouter.PrivetRouter path="/reduxform" component={Reduxform}></PrivteRouter.PrivetRouter>
                <PrivteRouter.PrivetRouter path="/fomicform" component={FomicForm}></PrivteRouter.PrivetRouter>
                <PrivteRouter.PrivetRouter path="/Datafacing" component={Datafacing}></PrivteRouter.PrivetRouter>
                <PrivteRouter.PrivetRouter path="/DataFacingUseReduce" component={DataFacingUseReduce}></PrivteRouter.PrivetRouter>
                <PrivteRouter.PrivetRouter path="/ParentsTochailed" component={ParentsTochailed}></PrivteRouter.PrivetRouter>
                <PrivteRouter.PrivetRouter path="/Usememocounter" component={Usememocounter}></PrivteRouter.PrivetRouter>
                <PrivteRouter.PrivetRouter path="/todolist" component={TodoList}></PrivteRouter.PrivetRouter>
            </div>
        </Switch>
    </div>
)

export default MainRouter