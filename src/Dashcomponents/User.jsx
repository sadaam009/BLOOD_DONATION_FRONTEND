import React, { useEffect, useState } from 'react'
import Dashboard from '../Components/Dashboard'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Dashheader from './Dashheader';

export default function User() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const res = await axios.get("http://localhost:9090/getallusers");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:9090/userDelete/${id}`);
      getAllUsers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className='flex'>
      <Dashboard />
   
      
      <div className="w-full ml-3   ">
      <div className=" mb-[7rem]  ">
   <Dashheader   />
      </div>
    
        <table className="table table-striped">
          <thead>
            <tr className='ml-6'>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td className='space-x-2'>
                  <button type="button" className="btn btn-primary py-2 px-3">Edit</button>
                  <button type="button" className="btn btn-outline-primary py-2 px-3">View</button>
                  <button onClick={() => deleteUser(user.id)} type="button" className="btn btn-danger py-2 px-3">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
