import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adddoner = () => {
  let navigate = useNavigate();
  const [doners, setDoners] = useState({
    name: "",
    email: "",
    phone: "",
    bloodtype: "",
    Tariikh: "",
    message: ""
  });

  const onInputChange = (e) => {
    setDoners({ ...doners, [e.target.name]: e.target.value });
  }

  const Adddoner = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9090/adddonate", doners);
    toast.success("Successfully Adding User ✔✔✔👍😁  ");
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer position="top-center" />
      <form className="bg-white p-8 rounded shadow-md w-full max-w-2xl" onSubmit={Adddoner}>
        <h2 className="mb-6 text-center text-2xl font-bold">Add Doners</h2>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={doners.name}
              onChange={onInputChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={doners.email}
              onChange={onInputChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={doners.phone}
              onChange={onInputChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="bloodtype" className="block text-gray-700 text-sm font-bold mb-2">Blood Type</label>
            <select
              id="bloodtype"
              name="bloodtype"
              value={doners.bloodtype}
              onChange={onInputChange}
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label htmlFor="lastDonationDate" className="block text-gray-700 text-sm font-bold mb-2">Last Donation Date</label>
            <input
              type="date"
              id="Tariikh"
              name="Tariikh"
              value={doners.Tariikh}
              onChange={onInputChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={doners.message}
              onChange={onInputChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className=" flex justify-center space-x-2">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Donate Now
          </button> <br />
          <Link to="/users" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Adddoner;
