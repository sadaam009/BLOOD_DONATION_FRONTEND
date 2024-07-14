import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Requestupdate = () => {
    let navigate = useNavigate();
    const [request, setRequest] = useState({
        name: '',
        age: '',
        bloodgroup: '',
        number: '',
        hospital: '',
        Tariikh: ''
    });

    const { id } = useParams();

    const onInputChange = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        loadDonations();
    }, []);

    const donationUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9090/isbadal/${id}`, request);
        toast.success("Successfully Updated ✔✔✔👍😁");
        setTimeout(() => {
            navigate(-1);
        }, 3000);
    };

    const loadDonations = async () => {
        const result = await axios.get(`http://localhost:9090/single/${id}`);
        setRequest(result.data);
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <ToastContainer position="top-center" />
            <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '600px' }}>
                <h2 className="mb-4 text-center">Update DonerBlood</h2>
                <form onSubmit={donationUpdate}>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="name" className="form-label me-3" style={{ width: '150px' }}>Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={request.name}
                            onChange={onInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="age" className="form-label me-3" style={{ width: '150px' }}>Age</label>
                        <input
                            type="text"
                            name="age"
                            id="age"
                            value={request.age}
                            onChange={onInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="number" className="form-label me-3" style={{ width: '150px' }}>Number</label>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            value={request.number}
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
          id="bloodgroup"
          name="bloodgroup"
          value={request.bloodgroup}
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
                            value={request.Tariikh}
                            onChange={onInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <label htmlFor="hospital" className="form-label me-3" style={{ width: '150px' }}>Hospital</label>
                        <input
                            type="text"
                            name="hospital"
                            id="hospital"
                            value={request.hospital}
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

export default Requestupdate;
