import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Userupdate = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        address: "",
        email: "",
        password: ""
    });

    const { id } = useParams();

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadUser();
    }, []);

    const userUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9090/update/${id}`, user);
        toast.success("Successfully Upadate✔✔✔👍😁  ");
        setTimeout(() => {
            navigate(-1);
        }, 3000);
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9090/singleuserid/${id}`);
        setUser(result.data);
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
          <ToastContainer position="top-center" />
            <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '400px' }}>
                <h2 className="mb-4 text-center">Update User</h2>
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
                <div className="d-grid space-y-2">
                    <button onClick={userUpdate} className="btn btn-primary font-bold py-2 px-4">
                        Update User
                    </button>
                    <Link to="/users"  className="btn btn-danger font-bold py-2 px-4">
                   Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Userupdate;
