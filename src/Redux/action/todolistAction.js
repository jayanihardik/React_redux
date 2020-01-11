export const Insert_Call_Api = (obj) => {
     return {
        type: 'insert_call_api',
        payload: obj
    }
}

export const Insert = (obj) => {
    return {
        type: 'insert',
        payload: obj
    }
}

export const Delete = (obj) => {
    return {
        type: 'delete',
        payload: obj
    }
}

export const Update = (obj) => {
    return {
        type: 'update',
        payload: obj
    }
}