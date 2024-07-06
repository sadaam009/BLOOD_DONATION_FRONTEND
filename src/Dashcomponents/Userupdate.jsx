import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

import { useParams } from 'react-router-dom'
const Userupdate = () => {
 

    let navigate=useNavigate()
    const[user,setuser]=useState({
   
      name:"",
      address:"",
      email:"",
      password:""
      
    })
    const{name,address,email,password}=user
const{id} =useParams()
const oninputchange=(e)=>{
  setuser({...user,[e.target.name]:e.target.value})
}

   useEffect(()=>{
    
    loaduser()
  
 },[])
 
 const userupdate = async (e) => {
  e.preventDefault();
  
  await axios.put(`http://localhost:9090/update/${id}`,user)
 alert("successfull update")
  
  navigate(-1)
};
const loaduser=async ()=>{
  const result =await axios.get(`http://localhost:9090/singleuserid/${id}`);
  setuser(result.data)
  // console.log(result.data)
  
}



  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      {/* <ToastContainer/> */}
      <div className="bg-white p-4 rounded shadow-sm w-100" style={{ maxWidth: '400px' }}>
        <h2 className="mb-4 text-center">Add User</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
           onChange={(e)=> oninputchange(e)}
            className="form-control"
            required
          />
        </div>



        <div className="mb-3">
          <label htmlFor="name" className="form-label">Address</label>
          <input
            type="text"
            name="name"
            id="name"
            value={address}
            onChange={(e)=> oninputchange(e)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">email</label>
          <input
            type="text"
            name="username"
            id="username"
            value={email}
            onChange={(e)=> oninputchange(e)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">password</label>
          <input
            type="email"
            name="email"
            id="email"
            value={password}
            onChange={(e)=> oninputchange(e)}
            className="form-control"
            required
          />
        </div>
        <div className="d-grid">
          <button onClick={userupdate}  className="btn btn-primary">
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userupdate;
