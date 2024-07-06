import React from 'react'
import brand from '../assets/home.png'

export default function About() {
  return (
    <div className=' mt-[3rem] w-full  '>
      <h1 className=' text-[3rem] pt-5 font-Far text-center text-[#333333] '>Our <span className='text-[#DC143C]  '> Mission</span> </h1>
       
       <div className="flex justify-between  items-center mt-[1.9rem] mx-[1rem]  ">

       <div className="  space-y-6 mx-[4rem]   ">
            <h1 className=' text-[#333333] text-[2.5rem] font-Far font-semibold  '>Saving Lives Together</h1>
            <p>
At LifeBlood, our mission is to provide a reliable and accessible source
of blood to those in need. We believe that every donation is a beacon of hope
capable of saving lives and bringing communities closer. Our organization is committed to
ensuring the safety, health, and well-being of both our </p>
<button className='py-2 px-5  text-[#003366] border-2 border-[#DC143C] 
           rounded  hover:bg-[#DC143C] font-semibold hover:text-white
            hover:transition hover:duration-300 hover:ease-in-out font-Far '>Join Our Mission </button>
        </div>

<img src={brand} alt="" />

       </div>
    </div>
  )
}
