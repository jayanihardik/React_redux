export const initialState = {}

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case 'insertToken':
            return state = action.payload
        case 'DeleteToken':
            return state =null;
        default:
            return state

    }
}


export default Auth;