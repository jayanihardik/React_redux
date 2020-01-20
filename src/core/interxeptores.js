import { toast } from 'react-toastify';
import axios from 'axios';
import history from '../history'

const interceptors = () => {
    axios.interceptors.request.use(request => {
        return request
    }, error => {
        return Promise.reject(error);
    })
    axios.interceptors.response.use(response => {
        return response
    }, error => {
        localStorage.clear();
        history.push('/login')
        toast.error("Please Login again")
        return Promise.reject(error);
    })
    return null;
}

export default interceptors;