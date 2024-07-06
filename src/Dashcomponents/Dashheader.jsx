import React from 'react'
import{
    Settings,
    BellRing ,
    Search
  } from"lucide-react"
export default function Dashheader() {
    
  return (
    <div className=' flex justify-between mx-[4rem] mt-[1rem]  items-center '>
        <h1 className=' text-[2rem] font-semibold  '>Dashboard</h1>
<div style={{ zIndex:1}} className=" absolute right-[13.6rem]  ">  <Search className=''/></div>
         <div className="flex absolute right-[3rem]  space-x-6  items-center ">
          <input className=' bg-gray-200 w-[300px] h-[50px] rounded-md px-2 ' type="text" />
        
          <div className=" bg-gray-200 py-3 px-3 rounded-[50%]  "> <BellRing /></div>
          <div className="bg-gray-200 py-3 px-3 rounded-[50%]"> <Settings/></div>
            
         </div>
        
    </div>
  )
}
