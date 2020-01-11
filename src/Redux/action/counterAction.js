export const increment = (obj) => {
    return {
        type: 'increment',
        payload: obj
    }
}

export const decrement = (obj) => {
    return {
        type: 'decrement',
        payload: obj
    }
}