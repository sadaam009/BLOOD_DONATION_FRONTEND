import React from 'react'
import logo from '../assets/dropblood.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className=' flex justify-between mx-[5rem] items-center relative mt-[1rem]   '>
     <div className=" flex space-x-2 items-center">
     <img className=' w-[50px]  ' src={logo} alt="" />
     <h1 className=' text-[2rem] font-Far '>Save <span className=' text-red-500'>Life</span></h1>
     </div>
        <div className=" flex space-x-6 justify-center">
            {/* <li className=' list-none   '><a href="">Home</a></li>
            <li className=' list-none text-[1.1rem] text-[#003366] font-semibold hover:bg-red-500 hover:py-1 hover:px-4 rounded hover:text-white  '><a href="">About Us</a></li>
            <li className=' list-none   '><a href="">Donate Now</a></li>
            <li className=' list-none text-[1.1rem] text-[#003366] font-semibold hover:bg-red-500 hover:py-1 hover:px-4 rounded hover:text-white  '><a href="">More Info</a></li> */}
            <Link className='text-[1.1rem] text-[#003366] font-semibold border-b-2 border-red-500
             hover:bg-red-500 hover:py-1 hover:px-5 hover:rounded hover:text-white' to="/">Home</Link>
            <Link className='text-[1.1rem] text-[#003366] font-semibold hover:bg-red-500 hover:py-1 hover:px-4 rounded hover:text-white' to="/about">Goals</Link>
            <Link className='text-[1.1rem] text-[#003366] font-semibold hover:bg-red-500 hover:py-1 hover:px-4 rounded hover:text-white' to="/donate">Donate Now</Link>
            <Link className='text-[1.1rem] text-[#003366] font-semibold hover:bg-red-500 hover:py-1 hover:px-4 rounded hover:text-white' to="/donation">Donation</Link>
            <Link className='text-[1.1rem] text-[#003366] font-semibold hover:bg-red-500 hover:py-1 hover:px-4 rounded hover:text-white' to="/contect">Dashboard</Link>
          
        </div>
        <div className="flex space-x-2">
          <Link to="signup">  <button className='py-2 px-7  font-semibold border-2 border-[#DC143C] rounded
            hover:bg-[#DC143C] hover:text-white hover:transition hover:duration-300 hover:ease-in-out  '>SignUp</button></Link>
           <Link to="login"> <button className='py-2 px-7 text-white bg-[#DC143C] rounded font-semibold  '>LogIn </button></Link>
         </div>
    </div>
  )
}
