import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from "react";
import { Button } from "react-bootstrap";
import * as Yup from 'yup';
import '../style/style.css';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    name: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

const FomicForm = () => {
    return (
        <>
            <div className="headings">
                <h1>Formik Form</h1>
                <hr />
            </div>
            <Formik
                initialValues={{ email: '', password: '', name: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
                validationSchema={SignupSchema}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="row">
                            <div className="col-md-8">
                                <label className="col-md-2 mt-2">
                                    Email:
                            </label>
                                <div className="col-md-10">
                                    <Field className="input-width" type="email" name="email" />
                                    <ErrorMessage className="errorclass" name="email" component="div" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <label className="col-md-2 mt-2">
                                    Password:
                            </label>
                                <div className="col-md-10">
                                    <Field className="input-width" type="password" name="password" />
                                    <ErrorMessage className="errorclass" name="password" component="div" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <label className="col-md-2 mt-2">
                                    Name:
                            </label>
                                <div className="col-md-10">
                                    <Field className="input-width" type="text" name="name" />
                                    <ErrorMessage className="errorclass" name="name" component="div" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="col-md-10 pt-3">
                                    <Button type="submit" variant="outline-secondary" disabled={isSubmitting}>
                                        Submit
                                </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}

                {/* {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (

                    <form onSubmit={handleSubmit}>
                        <div className="row">

                            <div className="col-md-8 pt-5">
                                <label className="col-md-2">
                                    Email:
                            </label>
                                <div className="col-md-10">
                                    <input
                                        className="input-width"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <p className="errorclass">
                                        {errors.email && touched.email && errors.email}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <label className="col-md-2">
                                    Password:
                            </label>
                                <div className="col-md-10">
                                    <input
                                        className="input-width"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <p className="errorclass">
                                        {errors.password && touched.password && errors.password}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <label className="col-md-2">
                                    Name:
                            </label>
                                <div className="col-md-10">
                                    <input
                                        className="input-width"
                                        type="name"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <p className="errorclass">
                                        {errors.name && touched.name && errors.name}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="col-md-10 pt-3">
                                    <Button type="submit" variant="outline-secondary" disabled={isSubmitting}>
                                        Submit
                                </Button>
                                </div>
                            </div>
                        </div>

                    </form>
                )} */}
            </Formik>
        </>
    )
}


export default FomicForm