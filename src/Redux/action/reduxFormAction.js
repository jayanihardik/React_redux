
export const Insert = (obj) => {
    return {
        type: 'ReduxForm_Insert',
        payload: obj,
    }
}

export const Delete = (obj) => {
    return {
        type: 'ReduxForm_Delete',
        payload: obj
    }
}

export const Update = (obj) => {
    return {
        type: 'ReduxForm_Update',
        payload: obj
    }
}








