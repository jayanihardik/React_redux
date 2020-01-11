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


const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Staticform}></Route>
            <Route exact path="/staticform" component={Staticform}></Route>
            <Route exact path="/reduxform" component={Reduxform}></Route>
            <Route exact path="/fomicform" component={FomicForm}></Route>
            <Route exact path="/Datafacing" component={Datafacing}></Route>
            <Route exact path="/DataFacingUseReduce" component={DataFacingUseReduce}></Route>
            <Route exact path="/ParentsTochailed" component={ParentsTochailed}></Route>
            <Route exact path="/Usememocounter" component={Usememocounter}></Route>
            <Route exact path="/todolist" component={TodoList}></Route>
        </Switch>
    </div>
)

export default MainRouter