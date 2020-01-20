import React, { useEffect, useState } from 'react';
import { Redirect ,Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authntication } from '../authComponet/index';
import { HttpPostReq } from '../services/httpservice';
import useForm from 'react-hook-form';
import '../style/loginpage.css';


const LoginPage = () => {
    const [redirectTorefrence, setredirectTorefrence] = useState(false)
    const [logindetails, setlogin] = useState({
        email: '',
        password: ''
    })

    const { register, handleSubmit, errors } = useForm()

    const handleChange = (e) => {
        setlogin({
            ...logindetails,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        if (localStorage.getItem('Token')) {
            setredirectTorefrence(true)
        } else {
            setredirectTorefrence(false)
        }
    },[]);

    const submit = () => {
        HttpPostReq('http://localhost:4800/api/login', logindetails).then(res => {
            if (res.data.ResponseStatus === 0) {
                setredirectTorefrence(true)
                authntication(res, () => {
                })
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        })
    }

    return (
        <>
            {
                redirectTorefrence && (
                    < Redirect to="/staticform" />
                )
            }
            <div className="login-row" >
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="email" ref={register({ required: true })} onChange={handleChange} placeholder="Your Email *"  value={logindetails.email || ''} />
                        <span className="text-danger">
                            {errors.email &&  'email is required.'}
                        </span> <br />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" ref={register({ required: true })} onChange={handleChange} placeholder="Your Password *"  value={logindetails.password || ''} />
                        <span className="text-danger">
                            {errors.password && 'password is required.'}
                        </span> <br />
                        </div>
                        <div className="form-group signup">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                        <div className="form-group signup">
                            <Link to ="/signin" className="ForgetPwd"> SignUp? </Link>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}

export default LoginPage
