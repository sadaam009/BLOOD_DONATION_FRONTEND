
import { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Donate() {
    const [doners, setdoners] = useState({
        name: '',
        email: '',
        phone: '',
        bloodtype: '',
        Tariikh: '',
        message: ''
      });
      const navigate = useNavigate();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setdoners({
          ...doners,
          [name]: value
        });
      };
      const Register = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:9090/adddonate", doners);
         setdoners(res.data);
         toast.success("Successfully Blood Doner");

         setTimeout(() => {
           navigate('/');
         }, 2000);
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div className=' flex  bg-[#F5F5F5] w-[100vw] h-[110vh]  justify-center mt-[3rem] '>



        <div className="mt-[2rem] space-y-2   ">
        <ToastContainer position="top-center" />
        <h1 className=' text-center text-[2.5rem] font-semibold  '><span className='text-[#DC143C] space-y-3  '>Donation</span> Form</h1>
        <form onSubmit={Register} className=" bg-white  w-[40vw] rounded shadow-md mt-3 px-6 py-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={doners.name}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={doners.email}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={doners.phone}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bloodType">
          Blood Type:
        </label>
        <select
          id="bloodtype"
          name="bloodtype"
          value={doners.bloodtype}
          onChange={handleChange}
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
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastDonationDate">
          Last Donation Date:
        </label>
        <input
          type="date"
          id="lastDonationDate"
          name="lastDonationDate"
          value={doners.lastDonationDate}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={doners.message}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
     <div className="flex justify-center">
     <button
        type="submit"
        className="bg-[#DC143C] text-white font-Far font-bold py-2 px-[6rem] rounded focus:outline-none focus:shadow-outline"
      >
        Donate Now
      </button>
     </div>
    </form>
        </div>
    </div>
  )
}
