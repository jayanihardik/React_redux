import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CountCustomeHook from './countCustomeHook'
import UseCounter from './useCounter'


const Datafacing = () => {

    const [NewData, setData] = useState([])
    const [count, setCounter] = useState(0)

    const [uerCounter, increment, Decrement, revert] = UseCounter()
    CountCustomeHook(count)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (res) => {
                setData(res.data)
            }
        ).catch(err => console.log(err))

    }, [])

    return (
        <div>
            <div className="headings">
                <h1>Data Facing</h1>
                <hr />
            </div>
            <div>
                <button onClick={() => setCounter(count + 1)}>Custom hookcounter = {count}</button>
            </div><br />
            <div>
                <button onClick={increment}>Increment = {uerCounter}</button>
                <button className="ml-3" onClick={Decrement}>Decrement = {uerCounter}</button>
                <button className="ml-3" onClick={revert}>Revert = {uerCounter}</button>
            </div><br />
            Use counter customehook = {uerCounter}<br /><br /><br />
            <ul>
                {
                    NewData.map(x => (
                        <li key={x.id}>{x.title} </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Datafacing
