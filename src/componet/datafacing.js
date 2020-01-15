import React, { useEffect, useState } from 'react'

import { HttpGetReq } from '../services/httpservice'
import CountCustomeHook from './countCustomeHook'
import UseCounter from './useCounter'

const Datafacing = () => {

    const [NewData, setData] = useState([])
    const [count, setCounter] = useState(0)

    const [uerCounter, increment, Decrement, revert] = UseCounter()
    CountCustomeHook(count)
    useEffect(() => {
        HttpGetReq('posts').then(
            (res) => {
                setData(res.data)
            }
        ).catch(err => console.log(err))

    }, [])

    return (
        <>
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
                <table>
                    <tbody>
                        {
                            NewData.map(x => (
                                <tr key={x.id}>
                                    <td >{x.title} </td>
                                    <td><button className="btn"><i className="fa fa-trash"></i></button>  </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Datafacing
