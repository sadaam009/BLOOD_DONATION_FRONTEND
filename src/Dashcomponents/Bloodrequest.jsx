import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Bloodrequest() {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  const getdonations = async () => {
    try {
      const res = await axios.get("http://localhost:9090/alldonations");
      setInfo(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deteledonation = async (id) => {
    try {
      await axios.delete(`http://localhost:9090/donDelete/${id}`);
      getdonations();  // Refresh the data after deletion
      toast.success("Successfully Delete");

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdonations();
  }, []);

  return (
    <div className='flex relative'>
       <ToastContainer position="top-center" />
      <Dashboard />
      <div className="w-full mt-11">
        <div className="">
          <Link to="/Add_Blood_Request" className='absolute right-11 bg-blue-500 py-2 px-3 rounded-md text-white font-semibold'>Add Blood Request</Link>
        </div>
        <table className="table mx-[1rem] mt-[4rem]">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Blood Group</th>
              <th scope="col">Number</th>
              <th scope="col">Hospital</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              info.map((xog, index) => (
                <tr key={xog.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{xog.name}</td>
                  <td>{xog.age}</td>
                  <td>{xog.bloodgroup}</td>
                  <td>{xog.number}</td>
                  <td>{xog.hospital}</td>
                  <td>{xog.Tariikh}</td>
                  <td className='space-x-2'>
                    <Link to={`/updaterequest/${xog.id}`} type="button" className="btn btn-primary py-2 px-3">Edit</Link>
                    <Link to={`/Veiwdonations/${xog.id}`} type="button" className="btn btn-outline-primary py-2 px-3">View</Link>
                    <button onClick={() => deteledonation(xog.id)} type="button" className="btn btn-danger py-2 px-3">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
