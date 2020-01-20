import axios from 'axios';

const Api_url = process.env.REACT_APP_API_PATH;

const headers = {
    'Content-Type': 'application/json',
};

export const HttpGetReq = (url) => {
    return axios.get(Api_url + url).then().catch()
}

export const HttpPostReq = (url, obj) => {
    return axios.post(url, obj, { headers }).then().catch()
}