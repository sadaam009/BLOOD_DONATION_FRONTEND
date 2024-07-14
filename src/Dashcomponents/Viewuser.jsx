import axios from 'axios'
import React,{useState,useEffect} from 'react'

import { useParams,Link } from 'react-router-dom'

export default function Viewuser() {
    const[user,setuser]=useState({
        name:"",
         address:"",
         email:"",
         password:""
         
       })
    //    const{name,username,email}=user
       const{id}=useParams()
       useEffect(()=>{
    
        loaduser()
      
     },[])
     const loaduser=async()=>{
        const result =await axios.get(`http://localhost:9090/singleuserid/${id}`);
        setuser(result.data)
     }
  return (
    <div className="container mt-[4rem] w-50 my-10 mx-auto   ">
       
    <div className="card shadow-lg h-[60vh]" style={{ }}>
      <div className="card-body ">
      <h1 className=' text-center font-bold text-4xl my-3'>User Info</h1>
      
      <div className=" list-none text-2xl font-bold bg-gray-200 py-6 px-10 rounded-lg space-y-2">
      
        <li className='bg-white py-2  rounded-lg px-7 '>
            <label className='' htmlFor="">   Name:</label>
            <span className=' pl-20 text-left '>
             
                {user.name}
            </span>
        </li>
        <li className='bg-white py-2   rounded-lg px-7'>
            <label htmlFor="">  Address:</label>
            <span className='pl-[3.6rem] '>
             
                {user.address}
            </span>
        </li>
        <li className='bg-white py-2  rounded-lg px-7 '>
            <label htmlFor="">  Email:</label>
            <span className=' tex  pl-[5rem] '>
             
                {user.email}
            </span>
        </li>
        <li className='bg-white py-2  rounded-lg px-7 '>
            <label className='p-0' htmlFor=""> Password:</label>
            <span className=' text-center pl-10'>
             
                {user.password}
            </span>
      
        </li>
      </div>
      <Link className='py-2 px-10 bg-red-500 font-semibold rounded absolute right-[18rem]
       text-white bottom-1  ' to="/users"> Cancel</Link>
      </div>
      
    </div>
  </div>
  )
}
