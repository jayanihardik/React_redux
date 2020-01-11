import { useEffect } from 'react'

const CountCustomeHook = (count) => {
    useEffect(() => {
        document.title = `count  ${count}`
    }, [count])
}

export default CountCustomeHook
