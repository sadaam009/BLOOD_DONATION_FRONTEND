
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Dashboard from '../Components/Dashboard';
import axios from 'axios';


export default function Bloodrequest() {
  const{id}=useParams
    const[data,setdata]=useState([])
  const getdonations= async()=>{
    try{
     const res= await axios.get("http://localhost:9090/alldonations")
      setdata(res.data)
      console.log(res.data)
    } catch(error) {
   console.log(error)
    }

   };
   useEffect(()=>{
    getdonations()
   })


  return (
    <div className=' flex'>
      <Dashboard/>
      <div className="w-full">
      <table class="table mx-[1rem]  ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">bloodgroup</th>
      <th scope="col">number</th>
      <th scope="col">hospital</th>
      <th scope="col">Tariikh</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>

   {data.map((xog, index) => (
    <tr >
  
    <th scope="row"> {index+1} </th>
    <td>{xog.name} </td>
    <td>{xog.age} </td>
    <td>{xog.bloodgroup} </td>
    <td>{xog.number} </td>
    <td>{xog.hospital} </td>
    <td>{xog.Tariikh} </td>
    <td className='space-x-2'>
                  <button type="button" className="btn btn-primary py-2 px-3">Edit</button>
                  <button type="button" className="btn btn-outline-primary py-2 px-3">View</button>
                  <button  type="button" className="btn btn-danger py-2 px-3">Delete</button>
                </td>
  </tr>
     

  ))}

   
  </tbody>
</table>
      </div>
    

    </div>
  )
}
