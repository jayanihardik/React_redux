import React, { useEffect, useState } from 'react';
import { Alert, Button, FormControl, InputGroup, Table } from "react-bootstrap";
import useForm from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Delete, Insert, Insert_Call_Api, Update } from '../Redux/action/todolistAction';
import { HttpGetReq } from '../services/httpservice';

const TodoList = () => {
    const ApiData = useSelector(state => state.TodoList);
    const { register, handleSubmit, errors } = useForm()
    const [employeedetails, setEmployeedetails] = useState({
        userId: '',
        id: '',
        title: '',
        body: '',
        index: null
    })
    const [isAlert, setAlert] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const serializedState = localStorage.getItem('state');
        if (serializedState != null && JSON.parse(serializedState).TodoList.length <= 0) {
            getApiData();
        } else if (serializedState === null) {
            getApiData();
        }
    }, [])

    const getApiData = () => {
        const ResData = []
        HttpGetReq('posts').then(res => ResData.push(...res.data))
        setTimeout(() => {
            dispatch(Insert_Call_Api(ResData))
        }, 800);
    }

    const insertData = () => {
        if (employeedetails.index === null) {
            if (ApiData.length > 0 && ApiData.filter(x => x.id === JSON.parse(employeedetails.id)).length > 0) {
                return setAlert(true)
            }
            dispatch(Insert(employeedetails))
            setEmployeedetails({
                employeedetails,
                index: null
            })
        } else {
            dispatch(Update(employeedetails))
            setEmployeedetails({
                employeedetails,
                index: null
            })
        }
    }

    const Deleterecords = (index) => {
        dispatch(Delete(index))
        if (employeedetails.index !== null) {
            setEmployeedetails({
                employeedetails,
                index: null
            })
        }
    }

    const handleChange = (e) => {
        setAlert(false)
        setEmployeedetails({
            ...employeedetails,
            [e.target.name]: e.target.value,
        });
    }


    const UpdateData = (index) => {
        var updateData = ApiData[index];
        setEmployeedetails({
            userId: updateData.userId,
            id: updateData.id,
            title: updateData.title,
            body: updateData.body,
            index: index,
        });
    }

    return (
        <div>
            <div className="headings">
                <h1>Todo List Using Redux</h1>
                <hr />
            </div>
            <div className="col-md-8">
                <form onSubmit={handleSubmit(insertData)}>
                    userId:
                        <InputGroup>
                        <FormControl
                            name="userId"
                            type="text"
                            ref={register({
                                required: 'userId equired',
                                pattern: {
                                    value: /^[0-9\b]+$/,
                                    message: "Enter only number"
                                }
                            })}
                            placeholder="Enter userId"
                            onChange={handleChange}
                            value={employeedetails.userId || ''}
                        />
                    </InputGroup>
                    <span className="text-danger">
                        {errors.userId && errors.userId.message}
                    </span> <br />
                    id:
                        <InputGroup>
                        <FormControl
                            name="id"
                            type="text"
                            placeholder="Enter id"
                            ref={register({
                                required: 'Required',
                                pattern: {
                                    value: /^[0-9\b]+$/,
                                    message: "Enter only number"
                                }
                            })}
                            onChange={handleChange}
                            value={employeedetails.id || ''}
                        />
                    </InputGroup>
                    {isAlert ? <Alert variant="danger"> Id already exist </Alert> : ''}
                    <span className="text-danger">
                        {errors.id && errors.id.message}
                    </span> <br />
                    title:
                        <InputGroup>
                        <FormControl
                            name="title"
                            ref={register({ required: true })}
                            placeholder="Enter your title"
                            onChange={handleChange}
                            value={employeedetails.title || ''}
                        />
                    </InputGroup>
                    <span className="text-danger">
                        {errors.title && 'title is required.'}
                    </span><br />
                    body:
                        <InputGroup>
                        <FormControl
                            name="body"
                            type="text"
                            ref={register({ required: true })}
                            placeholder="Enter your body"
                            onChange={handleChange}
                            value={employeedetails.body || ''}
                        />
                    </InputGroup>
                    <span className="text-danger">
                        {errors.body && 'body is required.'}
                    </span><br />
                    {employeedetails.index === null ? <Button variant="primary" type="submit">Submit</Button> : <Button variant="info" type="submit">Update</Button>}
                </form>
            </div>

            <div className="col-md-10 pt-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ApiData.length > 0 && ApiData.map((item, i) => {
                                return <tr id={`tr${i}`} key={i}>
                                    <td>{item.userId}</td>
                                    <td>{item.id} </td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td>  <Button variant="info" onClick={() => UpdateData(i)}>Update</Button></td>
                                    <td>  <Button variant="danger" onClick={() => Deleterecords(i)}>Delete</Button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default TodoList
