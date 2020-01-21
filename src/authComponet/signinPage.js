import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { HttpPostReq } from '../services/httpservice';
import history from '../history'



const SigninPage = () => {
    const { register, handleSubmit, errors } = useForm()
    const [signindetails, setsignin] = useState({
        name: '',
        phoneNo: '',
        pincode: '',
        email: '',
        password: '',
        confimPassword: ''
    })

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    const handleChange = (e) => {
        setsignin({
            ...signindetails,
            [e.target.name]: e.target.value,
        });
    }

    const submit = () => {
        HttpPostReq('http://localhost:3000/api/signin', signindetails).then(res => {
            if (res.data.ResponseStatus === 0) {
                toast.success(res.data.message)
                history.push('/login')
            } else {
                toast.error(res.data.errors.message)
            }
        })
    }

    return (
        <div className="login-row" >
            <div className="col-md-6 login-form-1">
                <h3>SignUp</h3>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" ref={register({ required: true })} onChange={handleChange} placeholder="Your Name *" value={signindetails.name || ''} />
                                <span className="text-danger">
                                    {errors.name && 'name is required.'}
                                </span> <br />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="phoneNo"  ref={register({
                                    required: 'Required',
                                    maxLength: 10,
                                    pattern: {
                                        value: /^[0-9\b]+$/,
                                        message: "Enter only number"
                                    }
                                })}
                                     onChange={handleChange} placeholder="Your phone number *" value={signindetails.phoneNo || ''} />
                                <span className="text-danger">
                                    {errors.phoneNo && errors.phoneNo.message}
                                    {errors.phoneNo && errors.phoneNo.type === "maxLength" && "Enter only 10 digit"}
                                </span> <br />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="pincode" ref={register({
                                    required: 'Required',
                                    pattern: {
                                        value: /^[0-9\b]+$/,
                                        message: "Enter only number"
                                    }
                                })} onChange={handleChange} placeholder="Your Pincode *" value={signindetails.pincode || ''} />
                                <span className="text-danger">
                                    {errors.pincode && errors.pincode.message}
                                </span> <br />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" name="email" ref={register({
                                    required: 'Required',
                                    pattern: {
                                        value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                        message: "email not valid"
                                    }
                                })} onChange={handleChange} placeholder="Your Email *" value={signindetails.email || ''} />
                                <span className="text-danger">
                                    {errors.email && errors.email.message}
                                </span> <br />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" ref={register({ required: true })} onChange={handleChange} placeholder="Your Password *" value={signindetails.password || ''} />
                                <span className="text-danger">
                                    {errors.password && 'password is required.'}
                                </span> <br />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="confimPassword" ref={register({ required: true })} onChange={handleChange} placeholder="Confim Password *" value={signindetails.confimPassword || ''} />
                                <span className="text-danger">
                                    {errors.confimPassword && 'confirm password is required.'}
                                </span> <br />
                            </div>
                        </div>
                    </div>
                    <div className="form-group signup">
                        <input type="submit" className="btnSubmit" value="Signup" />
                    </div>
                    <div className="form-group signup">
                        <Link to="/Login" className="ForgetPwd"> Back To Login </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SigninPage
