import React, { useState, useMemo, useEffect, useRef } from 'react'


const Usememocounter = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const [Timer, setTimer] = useState(0)


    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const countereven = useMemo(() => {
        return 2
    }, [counterTwo])

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 2)
    }

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        };
    }, [])

    return (
        <div>
            <div className="headings">
                <h1>Use Memo Counter</h1>
                <hr />
            </div>
            <div>
                <button onClick={incrementOne} >CounterOne --  {counterOne}</button>
            </div><br />
            <div>
                <button onClick={incrementTwo} >CounterTwo --  {counterTwo}</button> <br /><br />
            </div>

            <div >
                <input ref={inputRef} type="text" />
            </div><br />

            <div>
                Timer = {Timer}
            </div>
        </div>
    )
}

export default Usememocounter
