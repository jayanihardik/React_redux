import Counter from './counterReducer';
import Reduxform from './reduxformReducer';
import TodoList from './todolistReducer';
import Auth from './AuthReducer';
import { combineReducers } from 'redux';


const allreducer  = combineReducers({
    Counter: Counter,
    ReduxformData: Reduxform,
    TodoList: TodoList,
    Token: Auth
})

export default allreducer;