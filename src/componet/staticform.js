import React, { useEffect, useState } from "react";
import { Alert, Button, FormControl, InputGroup, Table } from "react-bootstrap";
import useForm from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/action/counterAction';

const Staticform = () => {

    const count = useSelector(state => state.Counter);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    const [employeedetails, setEmployeedetails] = useState({
        name: '',
        email: '',
        Adress: '',
        Phonenumber: '',
        index: null
    })

    const { register, handleSubmit, errors } = useForm()
    const [userData, setUserData] = useState([]);
    const [isAlert, setAlert] = useState(false);
    const [isName, setName] = useState(false);
    const [isAdress, setAdress] = useState(false);
    const [isEmail, setEmail] = useState(false);
    const [isPhno, setPhno] = useState(false);

    const insertData = () => {
        if (employeedetails.index !== null) {
            var data = [...userData];
            data[employeedetails.index] = employeedetails;
            setUserData([
                ...data
            ])
            setEmployeedetails({
                employeedetails,
                index: null
            });
        } else {
            if (userData.filter(x => x.email === employeedetails.email).length > 0) {
                return setAlert(true)
            }
            setUserData([
                ...userData,
                employeedetails,
            ])
            setEmployeedetails({
                employeedetails,
                index: null
            });
        }
    }

    const handleChange = e => {

        setEmployeedetails({
            ...employeedetails,
            [e.target.name]: e.target.value,
        });
    }

    const employeedetailsDelete = index => {
        var data = [...userData]
        data.splice(index, 1);
        setUserData([
            ...data
        ])
    }

    const employeedetailsUpdate = (index) => {
        var updateData = userData[index];
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

    return (
        <>
            <div className="headings">
                <h1>Static Form</h1>
                <hr/>
            </div>
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Button variant="outline-secondary mr-4" onClick={() => dispatch(increment(100))}>Increment</Button>
                        <Button variant="outline-danger" onClick={() => dispatch(decrement(10))}>Decrement</Button>
                    </div>
                </div>
                <div className="ml-2 mt-3" style={{ fontSize: 30 }}>{count}</div>
            </div>
            <div className="row pt-5">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit(insertData)}>
                        Name:
                        <InputGroup>
                            <FormControl
                                name="name"
                                ref={register({ required: true })}
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
                                ref={register({ required: true })}
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
                                ref={register({ required: true })}
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
                                type="number"
                                ref={register({ required: true })}
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
                                userData.map((item, i) => {
                                    return <tr id={`tr${i}`} key={i}>

                                        <td onDoubleClick={clickEventName}> {isName ?

                                            <input type="text" name="name" value={userData[i].name} ref={register({ required: true })}
                                                onChange={(e) => handleChange(e)} onClick={() => nameUpdate(i)} /> : <p>{item.name} </p>}</td>

                                        <td onDoubleClick={clickEventemail}> {isEmail ?
                                            <input type="text" name="email" value={userData[i].email} ref={register({ required: true })}
                                                onChange={(e) => handleChange(e)} onClick={() => nameUpdate(i)} /> : <p>{item.email} </p>}</td>

                                        <td onDoubleClick={clickEventAdress}>{isAdress ?
                                            <input type="text" name="Adress" value={userData[i].Adress} ref={register({ required: true })}
                                                onChange={(e) => handleChange(e)} onClick={() => nameUpdate(i)} /> : <p>{item.Adress} </p>}</td>

                                        <td onDoubleClick={clickEventPhonenumber}>{isPhno ?
                                            <input type="text" name="Phonenumber" value={userData[i].Phonenumber} ref={register({ required: true })}
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

export default Staticform

