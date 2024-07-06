
import { useState } from 'react'

export default function Donate() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bloodType: '',
        lastDonationDate: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Here you can add code to send formData to a server or API endpoint
      };
  return (
    <div className=' flex  bg-[#F5F5F5] w-[100vw] h-[110vh]  justify-center mt-[3rem] '>

  

        <div className="mt-[2rem] space-y-2   ">
        <h1 className=' text-center text-[2.5rem] font-semibold  '><span className='text-[#DC143C] space-y-3  '>Donation</span> Form</h1>
        <form onSubmit={handleSubmit} className=" bg-white  w-[40vw] rounded shadow-md mt-3 px-6 py-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
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
          value={formData.email}
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
          value={formData.phone}
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
          id="bloodType"
          name="bloodType"
          value={formData.bloodType}
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
          value={formData.lastDonationDate}
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
          value={formData.message}
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
