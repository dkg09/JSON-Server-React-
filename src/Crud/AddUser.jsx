import React, { useState } from 'react'
import { addUser } from './Api'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        password: "",
        city: "",
        state: "",
        dob: ""
    }

    const [user, setUser] = useState(initialValues)
    const [error, setError] = useState({})
    const navigate=useNavigate()

    const validation = () => {
        let error = {}

        if (!user.name) {
            error.name = "** Name is Required"
        }

        if (!user.email) {
            error.email = "** Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }

        if (!user.phone) {
            error.phone = "**Phone number is required"
        }

        if (!user.password) {
            error.password = "**Password is required"
        } else if (user.password.length < 8) {
            error.password = "**Password should be 8 characters long... "
        }

        if (!user.city) {
            error.city = "**City is Required"
        }

        if (!user.state) {
            error.state = "**State is Required"
        }

        if (!user.dob) {
            error.dob = "**Date of Birth is Required"
        }

        return error
    }


    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value


        setUser({ ...user, [name]: value })

        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is Required" })
                setUser({ ...user, name: "" })
            } else {
                setError({ ...error, name: "" })
                setUser({ ...user, name: value })
            }
        }
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "@Email is Required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }

        if (name === "phone") {
            if (value.length === 0) {
                setError({ ...error, phone: "@Phone is Required" })
                setUser({ ...user, phone: "" })
            } else {
                setError({ ...error, phone: "" })
                setUser({ ...user, phone: value })
            }
        }

        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "@Password Line One is required" })
                setUser({ ...user, password: "" })
            } else {
                setError({ ...error, password: "" })
                setUser({ ...user, password: value })
            }
        }

        if (name === "city") {
            if (value.length === 0) {
                setError({ ...error, city: "@City is Required" })
                setUser({ ...user, city: "" })
            } else {
                setError({ ...error, city: "" })
                setUser({ ...user, city: value })
            }
        }

        if (name === "state") {
            if (value.length === 0) {
                setError({ ...error, state: "@State is Required" })
                setUser({ ...user, state: "" })
            } else {
                setError({ ...error, state: "" })
                setUser({ ...user, state: value })
            }
        }

        if (name === "dob") {
            if (value.length === 0) {
                setError({ ...error, dob: "@Date of Birth is Required" })
                setUser({ ...user, dob: "" })
            } else {
                setError({ ...error, dob: "" })
                setUser({ ...user, dob: value })
            }
        }
    }

    const SubmitInfo = async(e) => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())
        if(Object.keys(ErrorList).length===0){
            await addUser(user)
            navigate('/')
         }

    }

    return (
        <>
            <div className="container">
                <h1>Add User</h1>

                <form onSubmit={SubmitInfo} className="container mt-5">
                    <h4> Add User </h4>
                    <div>
                        <label> Name </label>
                        <input type="text" className="form-control" name="name" value={user.name} onChange={e => postUserData(e)} />
                        <span style={{ color: "red", marginLeft: "24px" }}> {error.name} </span>
                    </div>
                    <div>
                        <label> Email </label>
                        <input type="email" className="form-control" name="email" value={user.email} onChange={e => postUserData(e)} />
                        <span style={{ color: "red", marginLeft: "24px" }}> {error.email} </span>
                    </div>
                    <div>
                        <label> Phone </label>
                        <input type="number" className="form-control" name="phone" value={user.phone} onChange={e => postUserData(e)} />
                        <span style={{ color: "red", marginLeft: "24px" }}> {error.phone} </span>
                    </div>
                    <div>
                        <label> Password </label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={e => postUserData(e)} />
                        <span style={{ color: "red", marginLeft: "24px" }}> {error.password} </span>
                    </div>
                    <div>
                        <label> City </label>
                        <input type="text" className="form-control" name="city" value={user.city} onChange={e => postUserData(e)} />
                        <span style={{ color: "red", marginLeft: "24px" }}> {error.city} </span>
                    </div>
                    <div>
                        <label> State </label>
                        <input type="text" className="form-control" name="state" value={user.state} onChange={e => postUserData(e)} />
                        <span style={{ color: "red", marginLeft: "24px" }}> {error.state} </span>
                    </div>
                    <div>
                        <label> Date of Birth </label>
                        <input type="date" className="form-control" placeholder="dd-mm-yyyy" name="dob" value={user.dob} onChange={e => postUserData(e)} />
                        <span style={{ color: "red", marginLeft: "24px" }}> {error.dob} </span>
                    </div>

                    <div>
                        <button type="submit" className="btn btn-success px-4 py-2"> Add User </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddUser