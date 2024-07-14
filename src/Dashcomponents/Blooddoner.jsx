import React, { useEffect, useState } from 'react';
import Dashboard from '../Components/Dashboard';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Dashheader from './Dashheader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function() { 
    const { id } = useParams();
    const [doner, setDoner] = useState([]);

    const getAllDoners = async () => {
        await axios.get("http://localhost:9090/donars")
            .then((res) => {
                setDoner(res.data);
                // console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllDoners();
    }, []);

    const deleteDoner = async (id) => {
      try {
          await axios.delete(`http://localhost:9090/donerDelete/${id}`);
          toast.success("Successfully Delete Doner ✔✔✔👍  ");
          getAllDoners();
      } catch (error) {
          console.log(error);
      }
  };

    return (
        <div className='flex'>
            <ToastContainer position="top-center" />
            <Dashboard />
            <div className="w-full mx-2">
                <div className="mb-[7rem]">
                    <Dashheader />
                </div>
                <Link to="/adddoner" className='absolute right-[2rem] font-bold bg-blue-600 text-white py-2 px-4 rounded-md top-[10rem]'>
                    Add User
                </Link>
                <table className="table table-striped">
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
                            doner.map((dnor, index) => (
                                <tr key={dnor.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{dnor.name}</td>
                                    <td>{dnor.email}</td>
                                    <td>{dnor.phone}</td>
                                    <td>{dnor.bloodtype}</td>
                                    <td>{dnor.message}</td>
                                    <td>{dnor.Tariikh}</td>
                                    <td className='space-x-2'>

                                        <Link to={`/Editdoners/${dnor.id}  `} type="button" className="btn btn-primary py-2 px-3">Edit</Link>
                                        <Link to={`/viwdoner/${dnor.id}  `} type="button" className="btn btn-outline-primary py-2 px-3">Veiw</Link>
                                        <button onClick={() => deleteDoner(dnor.id)} type="button" className="btn btn-danger py-2 px-3">Delete</button>
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
