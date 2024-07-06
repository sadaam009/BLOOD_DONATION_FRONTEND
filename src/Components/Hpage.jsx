import React from 'react'
import land from '../assets/blood.png'
import { Link } from 'react-router-dom'
export default function Hpage() {
  return (
    <div className='flex justify-between mx-[5rem] items-center mt-[5rem]  '>

        <div className="   space-y-6 ">
            <h1 className=' text-[2.5rem] font-Far font-semibold text-[#333333]  '> Donate Blood, Save a Life </h1> 
            <p className=' font-Far text-[1rem]  text-[#003366]  '>Welcome to our Blood Donation Center, where every donation
                 brings hope and healing. Donating blood is a simple, safe, and selfless 
                act that has a profound impact on
                   </p>
           <div className=" space-x-2">
           <button className='py-2 px-5 text-white bg-[#DC143C] rounded font-semibold  '>Donate Now</button>
           <Link to='back'>
           <button className='py-2 px-5  text-[#003366] border-2 border-[#DC143C] 
           rounded  hover:bg-[#DC143C] font-semibold hover:text-white hover:transition hover:duration-300 hover:ease-in-out '>More Info </button>
           
           </Link>
           </div>
        </div>
        <img src={land} alt="" />
    </div>
  )
}
