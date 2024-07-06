import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data to the console
    console.log('Form Data:', formData);
    // You can also send the data to a server here
  };

  return (
    <div className=" h-[90vh] bg-[#F5F5F5] mt-[3rem] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          
        
        </div>
        <h2 className="text-2xl font-bold mb-8 text-center font-Far">Get in touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
  className="shadow appearance-none border hover:border-2 hover:border-green-500 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  id="name"
  type="text"
  name="name"
  placeholder="Name"
  value={formData.name}
  onChange={handleChange}
/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow hover:border-2 hover:border-green-500 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow hover:border-2 hover:border-green-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className=" bg-red-500 text-white font-bold font-Far py-2 px-[4rem] rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
