import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Doneredit = () => {
    let navigate = useNavigate();
    const [editdoner, setEdit] = useState({
        name: '',
        email: '',
        phone: '',
        bloodtype: '',
        Tariikh: '',
        message: ''
    });

    const { id } = useParams();

    const onInputChange = (e) => {
        setEdit({ ...editdoner, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadDoners();
    }, []);

    const donerUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9090/updater/${id}`, editdoner);
        toast.success("Successfully Updated ✔✔✔👍😁");
        setTimeout(() => {
            navigate(-1);
        }, 3000);
    };

    const loadDoners = async () => {
        const result = await axios.get(`http://localhost:9090/singledoner/${id}`);
        setEdit(result.data);
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <ToastContainer position="top-center" />
            <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '600px' }}>
                <h2 className="mb-4 text-center">Update DonerBlood</h2>
                <form onSubmit={donerUpdate}>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="name" className="form-label me-3" style={{ width: '150px' }}>Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={editdoner.name}
                            onChange={onInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="email" className="form-label me-3" style={{ width: '150px' }}>Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={editdoner.email}
                            onChange={onInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="phone" className="form-label me-3" style={{ width: '150px' }}>Email</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={editdoner.phone}
                            onChange={onInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3  d-flex align-items-center">
        <label className=" text-gray-700 text-sm font-semibold mb-2" htmlFor="bloodType">
          Blood Type:
        </label>
        <select
          id="bloodtype"
          name="bloodtype"
          value={editdoner.bloodtype}
          onChange={onInputChange}
          required
          className="appearance-none border ml-[4.5rem] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="Tariikh" className="form-label me-3" style={{ width: '150px' }}>Date</label>
                        <input
                            type="date"
                            name="Tariikh"
                            id="Tariikh"
                            value={editdoner.Tariikh}
                            onChange={onInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="message" className="form-label me-3" style={{ width: '150px' }}>Message</label>
                        <input
                            type="text"
                            name="message"
                            id="message"
                            value={editdoner.message}
                            onChange={onInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary font-bold py-2 px-4">Update User</button>
                        <Link to="/users" className="btn btn-danger font-bold py-2 px-4">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Doneredit;
