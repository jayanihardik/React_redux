export const initialState = []

const ApiData = (state = initialState, action) => {
    switch (action.type) {
        case 'insert_call_api':
            return [
                ...action.payload
            ]

        case 'insert':
            return [
                ...state,
                action.payload,
            ]

        case 'delete':
            state.splice(action.payload, 1);
            return [...state]

        case 'update':
            var data = [...state];
            data[action.payload.index] = action.payload;
            return state = data

        default:
            return state;
    }
}

export default ApiData;  