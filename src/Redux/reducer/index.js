import Counter from './counterReducer';
import Reduxform from './reduxformReducer';
import TodoList from './todolistReducer'
import { combineReducers } from 'redux';


const allreducer  = combineReducers({
    Counter: Counter,
    ReduxformData: Reduxform,
    TodoList: TodoList
})

export default allreducer;