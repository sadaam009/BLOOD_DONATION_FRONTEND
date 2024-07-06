import React, { useEffect, useState } from 'react'
import Dashboard from '../Components/Dashboard'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Dashheader from './Dashheader'
export default function() { 
    const{id}=useParams
    const[doner,setdoner]=useState([])
    const getalldoners=async ()=>{
await axios.get("http://localhost:9090/donars").then((res)=>{
    setdoner(res.data)
    // console.log(res.data)
}).catch((error)=>{
    console.log(error)
})

    }
    useEffect(()=>{
        getalldoners()
    })
 
  return (
    <div className=' flex'>
        <Dashboard/>
   
        <div className=" w-full  mx-2  ">
        <div className=" mb-[7rem]  ">
      <Dashheader/>
      </div>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th scope="col">BloodType</th>
      <th scope="col">Message</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>
  
    </tr>
  </thead>
  <tbody>
    {
        doner.map((dnor,index)=>
 <tr>
   
      <th scope="row" key={id}> {index+1} </th>
      <td> {dnor.name} </td>
      <td>{dnor.email}</td>
      <td>{dnor.phone}</td>
      <td>{dnor.bloodtype}</td>
      <td>{dnor.message}</td>
      <td>{dnor.Tariikh}</td>
      <td className=' space-x-2 '>
     <button type="button" class="btn btn-primary py-2 px-3">Edit</button>
     <button type="button" class="btn btn-outline-primary py-2 px-3">View</button>
     <button type="button" class="btn btn-danger py-2 px-3">Delete</button>
     </td>
    </tr>
    )
    }
   
   
  </tbody>
</table>
        </div>
    </div>
  )
}
