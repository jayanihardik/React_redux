import React, { useReducer } from "react";
import Chiled1 from './chiled1';
import Chiled2 from './chiled2';
import Chiled3 from './chiled3';
const initialState = 0;

export const CountContext = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state = state + action.value;
        case 'decrement':
            return state = state - action.value;
        case 'revert':
            return state = 0;
        default:
            return state;
    }
}

const ParentsTochailed = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div className="headings">
                <h1>Parents To chailed</h1>
                <hr />
            </div>
            <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
                <div className='mb-3'>
                Parents Count = {count}
                </div>
                <div className ='ml-5'>
                    <div className="col-md-12">
                        <Chiled1></Chiled1>
                    </div>
                    <hr />
                    <div className="col-md-12">
                        <Chiled2></Chiled2>
                    </div>
                    <hr />
                    <div className="col-md-12">
                        <Chiled3></Chiled3>
                    </div>
                </div>
            </CountContext.Provider>
        </>
    )
}

export default ParentsTochailed