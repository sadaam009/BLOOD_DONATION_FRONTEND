import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adddrequest = () => {
  let navigate = useNavigate();
  const [request, setRequest] = useState({
    name: '',
    age: '',
    bloodgroup: '',
    number: '',
    hospital: '',
    Tariikh: ''
});

  const onInputChange = (e) => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  }

  const Addrequest = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9090/adddonation", request);
    toast.success("Successfully Adding User ✔✔✔👍  ");
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };

  return (
    <div className="bg-gray-100 w-full h-[85vh] mt-[3rem] relative">
    <ToastContainer position="top-center" />
   <div className="absolute top-[8rem] right-[14rem] max-w-4xl mx-auto p-6 pt-[3rem] bg-white shadow-md rounded-lg">
     <h2 className="text-2xl font-bold mb-6 text-center">Blood Request Form</h2>
     <form onSubmit={Addrequest} className="space-y-5">
       <div className="flex flex-wrap -mx-2 my-6 items-center">
         <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
           <label className="block text-sm font-semibold font-Far text-gray-700 mb-1">Name</label>
           <input
             type="text"
             name="name"
             value={request.name}
             onChange={onInputChange}
             className="w-full px-3 py-2 border border-gray-300 rounded-md"
             required
           />
         </div>
         <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0">
           <label className="block text-sm font-semibold font-Far text-gray-700 mb-1">Age</label>
           <input
             type="number"
             name="age"
             value={request.age}
             onChange={onInputChange}
             className="w-full px-3 py-2 border border-gray-300 rounded-md"
             required
           />
         </div>
         <div className="w-full md:w-1/6 px-2 mb-4 md:mb-0">
           <label className="block text-sm font-semibold font-Far text-gray-700 mb-1">Blood Group</label>
           <select
             name="bloodgroup"
             value={request.bloodgroup}
             onChange={onInputChange}
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
             value={request.number}
             onChange={onInputChange}
             className="w-full px-3 py-2 font-semibold font-Far border border-gray-300 rounded-md"
             required
           />
         </div>
         <div className="w-full md:w-1/2 px-2">
           <label className="block text-sm font-semibold font-Far text-gray-700 mb-1">Hospital</label>
           <input
             type="text"
             name="hospital"
             value={request.hospital}
             onChange={onInputChange}
             className="w-full px-3 py-2 border border-gray-300 rounded-md"
             required
           />
         </div>
         <div className="w-full md:w-1/2 px-2">
           <label className="block text-sm font-semibold font-Far text-gray-700 mb-1">Date</label>
           <input
             type="date"
             name="Tariikh"
             value={request.Tariikh}
             onChange={onInputChange}
             className="w-full px-3 py-2 border border-gray-300 rounded-md"
             required
           />
         </div>
       </div>
       <div className="text-center flex justify-center space-x-3">
       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            request Now
          </button> <br />
          <Link to="/Donations" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline">
            Cancel
          </Link>
       </div>
     </form>
   </div>
 </div>
  );
};

export default Adddrequest;
