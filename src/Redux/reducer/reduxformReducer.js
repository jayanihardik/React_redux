export const initialState = []

const insertdata = (state = initialState, action) => {
    switch (action.type) {
        case 'ReduxForm_Insert':
            return [
                ...state,
                action.payload]

        case 'ReduxForm_Delete':
            state.splice(action.payload, 1);
            return [...state]

        case 'ReduxForm_Update':
            var data = [...state];
            data[action.payload.index] = action.payload;
            return state = data
        default:
            return state;
    }
}

export default insertdata;  