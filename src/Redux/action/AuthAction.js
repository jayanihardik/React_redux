export const InsertToken = (obj) => {
    return {
        type: 'insertToken',
        payload: obj
    }
}

export const DeleteToken = (obj) => {
    return {
        type: 'DeleteToken',
        payload: obj
    }
}