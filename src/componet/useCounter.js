import { useState } from 'react'

const UseCounter = (initaialState = 0) => {
    const [uerCounter, setuerCounter] = useState(0)

    const increment = () => {
        setuerCounter(prevCounte => prevCounte + 1)
    }
    const Decrement = () => {
        setuerCounter(prevCounte => prevCounte - 1)
    }
    const revert = () => {
        setuerCounter(initaialState)
    }

    return [uerCounter, increment, Decrement, revert]
}

export default UseCounter
