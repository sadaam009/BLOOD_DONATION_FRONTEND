import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adduser = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        address: "",
        email: "",
        password: ""
    });


    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    const Adduser = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:9090/adduser", user);
        toast.success("Successfully Adding User ✔✔✔👍😁  ");
        setTimeout(() => {
            navigate(-1);
        }, 3000);
    };

    // const loadUser = async () => {
    //     const result = await axios.get(`http://localhost:9090/singleuserid/${id}`);
    //     setUser(result.data);
    // };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
          <ToastContainer position="top-center" />
            <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '400px' }}>
                <h2 className="mb-4 text-center font-bold">Update User</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={user.name}
                        onChange={onInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={user.address}
                        onChange={onInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={onInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={onInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="d-grid  space-y-2">
                    <button onClick={Adduser} className="btn btn-primary py-2 font-bold px-4">
                   Add User
                    </button>
                    <Link to="/users"  className="btn btn-danger font-bold py-2 px-4">
                   Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Adduser;
