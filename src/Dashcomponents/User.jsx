import React, { useEffect, useState } from 'react'
import Dashboard from '../Components/Dashboard'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Dashheader from './Dashheader';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      toast.success("Successfully User Delete");

      getAllUsers();
    } catch (error) {
      console.log(error);
    }
  };
  // const userupdate = async (e) => {
  //   e.preventDefault();
    
  //   await axios.put(`http://localhost:8080/update/${id}`,users)
  //  alert("Successfull update")
  // };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className='flex relative'>
       <ToastContainer position="top-center" />
      <Dashboard />
   
      
      <div className="w-full ml-3   ">
      <div className=" mb-[10rem]  ">
   <Dashheader   />
      </div>
      <Link to="/Kudaruser" className=' absolute right-[2rem] font-bold bg-blue-600 text-white py-2
       px-4 rounded-md top-[10rem]  '>Add User</Link>
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
                <td className='space-x-1'>
                <Link to={`/updateuser/${user.id}  `}  >  <button className='btn btn-primary mx-2'>Edit</button></Link>
                <Link to={`/Edituser/${user.id}  `}  >  <button className='btn btn-outline-primary mx-2'>View</button></Link>
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
