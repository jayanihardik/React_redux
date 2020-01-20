import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { InsertToken } from '../Redux/action/AuthAction';
import { HttpPostReq } from '../services/httpservice';
import history from '../history'
import '../style/loginpage.css';


const LoginPage = () => {
    const [logindetails, setlogin] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm()

    const handleChange = (e) => {
        setlogin({
            ...logindetails,
            [e.target.name]: e.target.value,
        });
    }

    const submit = () => {
        HttpPostReq('http://localhost:5000/api/login', logindetails).then(res => {
            if (res.data.ResponseStatus === 0) {
                dispatch(InsertToken(res.data.token))
                history.push('/staticForm')
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        })
    }

    return (
        <>
            <div className="login-row" >
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="email" ref={register({ required: true })} onChange={handleChange} placeholder="Your Email *" value={logindetails.email || ''} />
                            <span className="text-danger">
                                {errors.email && 'email is required.'}
                            </span> <br />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" ref={register({ required: true })} onChange={handleChange} placeholder="Your Password *" value={logindetails.password || ''} />
                            <span className="text-danger">
                                {errors.password && 'password is required.'}
                            </span> <br />
                        </div>
                        <div className="form-group signup">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                        <div className="form-group signup">
                            <Link to="/signin" className="ForgetPwd"> SignUp? </Link>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default LoginPage
