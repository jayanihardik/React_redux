
const token = JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')).Token : null;

export const GetJsonHttpCommon = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
        }
    };
}


export const GetAuthHttpCommon = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };
}