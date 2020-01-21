import axios from 'axios';
import { GetJsonHttpCommon, GetAuthHttpCommon } from './httpCommon'

const Api_url = process.env.REACT_APP_API_PATH;

export const HttpGetReq = (url) => {
    return axios.get(Api_url + url, GetJsonHttpCommon()).then().catch()
}

export const HttpPostReq = (url, obj) => {
    return axios.post(url, obj, GetAuthHttpCommon()).then().catch()
}