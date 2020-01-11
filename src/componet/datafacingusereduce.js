import React, { useReducer, useEffect } from "react";
import axios from 'axios'
export const DataContext = React.createContext()

const initialState = {
    post: {},
    error: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                post: action.payload,
                error: ''
            }
        case 'FETCH_FAILED':
            return {
                post: [],
                error: 'Someting Wrong'
            }
        default:
            return state;
    }

}

const DataFacingUseReduce = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (res) => {
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })
            }
        ).catch(err => dispatch({ type: "FETCH_FAILED" }))
    }, [])
    return (
        <>
            <div className="headings">
                <h1>Data Facing Use Reducer</h1>
                <hr />
            </div>
            <div className="col-md-12">
                {state.post && state.post.length > 0 ? state.post.map(x => (
                    <li key={x.id}>{x.title} </li>
                ))
                    : null}
                {state.error ? state.error : null}
            </div>
        </>
    )
}

export default DataFacingUseReduce