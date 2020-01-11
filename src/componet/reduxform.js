import React, { useState } from "react";
import { Alert, Button, FormControl, InputGroup, Table } from "react-bootstrap";
import useForm from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';

import { Delete, Insert, Update } from '../Redux/action/reduxFormAction';
import CustomHookCounter from './countCustomeHook';


const Reduxform = (props) => {
    const [employeedetails, setEmployeedetails] = useState({
        name: '',
        email: '',
        Adress: '',
        Phonenumber: '',
        index: null
    })
    const [count, setCounter] = useState(0)

    const dispatch = useDispatch();



    const { register, handleSubmit, errors } = useForm()
    const [isAlert, setAlert] = useState(false);
    const [isName, setName] = useState(false);
    const [isAdress, setAdress] = useState(false);
    const [isEmail, setEmail] = useState(false);
    const [isPhno, setPhno] = useState(false);

    const insertData = () => {
        if (employeedetails.index !== null) {
            dispatch(Update(employeedetails))
            setEmployeedetails({
                employeedetails,
                index: null
            })
        } else {
            dispatch(Insert(employeedetails))
            setEmployeedetails({
                employeedetails,
                index: null
            })
        }
    }

    const handleChange = e => {
        setEmployeedetails({
            ...employeedetails,
            [e.target.name]: e.target.value,
        });
        setAlert(false)
    }

    const employeedetailsDelete = index => {
        dispatch(Delete(index))
    }

    const employeedetailsUpdate = (index) => {
        var updateData = props.student[index];
        setEmployeedetails({
            name: updateData.name,
            Adress: updateData.Adress,
            Phonenumber: updateData.Phonenumber,
            email: updateData.email,
            index: index,
        });
    }
    const nameUpdate = (i) => {
    }

    const clickEventName = () => {
        setName(!isName)
    }

    const clickEventemail = () => {
        setEmail(!isEmail)
    }

    const clickEventAdress = () => {
        setAdress(!isAdress)
    }

    const clickEventPhonenumber = () => {
        setPhno(!isPhno)
    }

    CustomHookCounter(count)


    return (
        <>
            <div className="headings">
                <h1>Redux Form</h1>
                <hr />
            </div>
            <div>
                <button onClick={() => setCounter(count + 1)}>CustomHookCounter - {count}</button>
            </div>
            <div className="row pt-5">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit(insertData)}>
                        Name:
                        <InputGroup>
                            <FormControl
                                name="name"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                value={employeedetails.name || ''}
                            />
                        </InputGroup>
                        <span className="text-danger">
                            {errors.name && 'Name is required.'}
                        </span> <br />
                        Email:
                        <InputGroup>
                            <FormControl
                                name="email"
                                type="email"
                                placeholder="Enter your Email"
                                onChange={handleChange}
                                value={employeedetails.email || ''}
                            />
                        </InputGroup>
                        {isAlert ? <Alert variant="danger"> Email-Id already exist </Alert> : ''}
                        <span className="text-danger">
                            {errors.email && 'Email is required.'}
                        </span> <br />
                        Address:
                        <InputGroup>
                            <FormControl
                                name="Adress"
                                placeholder="Enter your Adress"
                                onChange={handleChange}
                                value={employeedetails.Adress || ''}
                            />
                        </InputGroup>
                        <span className="text-danger">
                            {errors.Adress && 'Address is required.'}
                        </span><br />
                        Phonenumber:
                        <InputGroup>
                            <FormControl
                                name="Phonenumber"
                                type="test"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                value={employeedetails.Phonenumber || ''}
                            />
                        </InputGroup>
                        <span className="text-danger">
                            {errors.Phonenumber && 'Phonenumber is required.'}
                        </span><br />
                        {employeedetails.index === null ? <Button variant="primary" type="submit">Submit</Button> : <Button variant="info" type="submit">Update</Button>}
                    </form>
                </div>
                <div className="col-md-10 pt-5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Email ID</th>
                                <th>Address</th>
                                <th>Phonenumber</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.student.length > 0 && props.student.map((item, i) => {
                                    return <tr id={`tr${i}`} key={i}>
                                        <td onDoubleClick={clickEventName}> {isName ?

                                            <input type="text" name="name" value={props.student[i].name} ref={register({ required: true })}
                                                onChange={(e) => handleChange(e)} onClick={() => nameUpdate(i)} /> : <p>{item.name} </p>}</td>

                                        <td onDoubleClick={clickEventemail}> {isEmail ?
                                            <input type="text" name="email" value={props.student[i].email} ref={register({ required: true })}
                                                onChange={(e) => handleChange(e)} onClick={() => nameUpdate(i)} /> : <p>{item.email} </p>}</td>

                                        <td onDoubleClick={clickEventAdress}>{isAdress ?
                                            <input type="text" name="Adress" value={props.student[i].Adress} ref={register({ required: true })}
                                                onChange={(e) => handleChange(e)} onClick={() => nameUpdate(i)} /> : <p>{item.Adress} </p>}</td>

                                        <td onDoubleClick={clickEventPhonenumber}>{isPhno ?
                                            <input type="text" name="Phonenumber" value={props.student[i].Phonenumber} ref={register({ required: true })}
                                                onChange={(e) => handleChange(e)} onClick={() => nameUpdate(i)} /> : <p>{item.Phonenumber} </p>}</td>

                                        <td>  <Button variant="info" onClick={() => employeedetailsUpdate(i)}>Update</Button></td>
                                        <td>  <Button variant="danger" onClick={() => employeedetailsDelete(i)}>Delete</Button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return { student: state.ReduxformData }
};

export default connect(mapStateToProps)(Reduxform)

