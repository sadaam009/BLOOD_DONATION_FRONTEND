import React from 'react'
import logo from '../assets/dropblood.png'
export default function Footer() {
  return (
    <>
    <div className=' flex justify-between px-[5rem] items-center  mt-[7rem] bg-gray-50 '>

        <div className="space-y-4">
        <div className=" flex space-x-2 items-center">
     <img className=' w-[50px]  ' src={logo} alt="" />
     <h1 className=' text-[2rem] font-Far '>Save <span className=' text-red-500'>Life</span></h1>
     </div>
            <div className=" space-x-3 ml-3 text-red-400">
            <i class="fa-brands fa-facebook fa-2xl"></i>
            <i class="fa-brands fa-twitter fa-2xl"></i>
            <i class="fa-brands fa-instagram fa-2xl"></i>
          
            </div>
          <p className=' ml-3 mt-4'>2024 Life Blood</p>
        </div>
        

      <div className="flex space-x-[4rem] my-6">
      <div className=" space-y-2">
            <h1 className=' text-[1.1rem] font-Far font-semibold'>Features</h1>
            <li className=' list-none'>Something Great</li>
            <li className=' list-none'>Another Thing</li>
            <li className=' list-none'>Soo Many Features </li>
            <li className=' list-none'>Its Amazing</li>
            
        </div>

        <div className="space-y-2">
            <h1 className=' text-[1.1rem] font-Far font-semibold'>Company</h1>
            <li className=' list-none'>Home</li>
            <li className=' list-none'>About Us</li>
            <li className=' list-none'>Donate Now </li>
            <li className=' list-none'>More Info</li>
            
        </div>

        <div className="space-y-2">
            <h1 className=' text-[1.1rem] font-Far font-semibold '>Legal</h1>
            <li className=' list-none'>Privacy Policy</li>
            <li className=' list-none'>Terms Of Use</li>
            <li className=' list-none'>Cookia Policy </li>
          
            
        </div>
      </div>

    </div>
   
   </>
  )
}
