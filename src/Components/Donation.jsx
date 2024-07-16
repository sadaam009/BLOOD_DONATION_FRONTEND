import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Donation = () => {
  const [bloodrequest, setbloodrequest] = useState({
    name: '',
    age: '',
    bloodgroup: '',
    number: '',
    hospital: '',
    Tariikh: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setbloodrequest({
      ...bloodrequest,
      [name]: value,
    });
  };

  const Register = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:9090/adddonation", bloodrequest);
      console.log(res.data);
      toast.success("Successfully Blood Request 👍");

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 w-full h-[85vh] mt-[3rem] relative">
       <ToastContainer position="top-center" />
      <div className="absolute top-[8rem] right-[14rem] max-w-4xl mx-auto p-6 pt-[3rem] bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Blood Request Form</h2>
        <form onSubmit={Register} className="space-y-5">
          <div className="flex flex-wrap -mx-2 my-6 items-center">
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <label className="block text-sm font-semibold font-Far text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={bloodrequest.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0">
              <label className="block text-sm font-semibold font-Far text-gray-700 mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={bloodrequest.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0">
              <label className="block text-sm font-semibold font-Far text-gray-700 mb-1">Blood Group</label>
              <select
                name="bloodgroup"
                value={bloodrequest.bloodgroup}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className="w-full md:w-1/3 px-2">
              <label className="block text-sm font-semibold font-Far text-gray-700 mb-1">Number</label>
              <input
                type="text"
                name="number"
                value={bloodrequest.number}
                onChange={handleChange}
                className="w-full px-3 py-2 font-semibold font-Far border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label className="block text-sm font-semibold font-Far text-gray-700 mb-1">Hospital</label>
              <input
                type="text"
                name="hospital"
                value={bloodrequest.hospital}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label className="block text-sm font-semibold font-Far text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="Tariikh"
                value={bloodrequest.Tariikh}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 font-Far bg-[#f33c61] hover:bg-[#DC143C] text-white font-medium rounded-md"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donation;
