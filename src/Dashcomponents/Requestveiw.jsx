import axios from 'axios'
import React,{useState,useEffect} from 'react'

import { useParams,Link } from 'react-router-dom'

export default function Requestveiw() {
    const [request, setRequest] = useState({
        name: '',
        age: '',
        bloodgroup: '',
        number: '',
        hospital: '',
        Tariikh: ''
    });
    //    const{name,username,email}=user
       const{id}=useParams()
       useEffect(()=>{
    
        loadDonations()
      
     },[])
     const loadDonations = async () => {
        const result = await axios.get(`http://localhost:9090/single/${id}`);
        setRequest(result.data);
    };
  return (
    <div className="container mt-[2rem] w-50 my-10 mx-auto   ">
       
    <div className="card shadow-lg h-[80vh]" style={{ }}>
      <div className="card-body ">
      <h1 className=' text-center font-bold text-4xl my-3'>Request Info</h1>
      
      <div className=" list-none text-2xl font-bold bg-gray-200 py-6 px-10 rounded-lg space-y-2">
      
        <li className='bg-white py-2  rounded-lg px-7 '>
            <label className='' htmlFor="">   Name:</label>
            <span className=' pl-[5.3rem] text-left '>
             
                {request.name}
            </span>
        </li>
        <li className='bg-white py-2   rounded-lg px-7'>
            <label htmlFor="">  Age:</label>
            <span className='pl-[6.8rem] '>
             
                {request.age}
            </span>
        </li>
        <li className='bg-white py-2  rounded-lg px-7 '>
            <label htmlFor="">  Number:</label>
            <span className=' tex  pl-[4rem] '>
             
                {request.number}
            </span>
        </li>
        <li className='bg-white py-2  rounded-lg px-7 '>
            <label className='p-0' htmlFor=""> BloodType:</label>
            <span className=' text-center pl-10'>
             
                {request.bloodgroup}
            </span>
      
        </li>
        <li className='bg-white py-2  rounded-lg px-7 '>
            <label className='p-0' htmlFor=""> Date:</label>
            <span className=' text-center pl-[6.3rem]  '>
             
                {request.Tariikh}
            </span>
      
        </li>
        <li className='bg-white py-2  rounded-lg px-7 '>
            <label className='p-0' htmlFor=""> Hospital:</label>
            <span className=' text-center pl-[4rem]  '>
             
                {request.hospital}
            </span>
      
        </li>
      </div>
      <Link className='py-2 px-10 bg-red-500 font-semibold rounded absolute right-[18rem]
       text-white bottom-3  ' to="/donations"> Cancel</Link>
      </div>
      
    </div>
  </div>
  )
}
