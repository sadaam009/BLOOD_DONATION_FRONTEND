import React from 'react'

export default function 
() {
  return (
    <div className='flex justify-center mt-[5rem] '>
      <div className=" text-center space-y-4">
      <h1 className=' text-[3rem] font-Far text-[#333333] font-semibold  '>By the <span className='text-[#DC143C]  '> Numbers</span></h1>
        <p className=' text-[1.1rem] text-[#333333] font-semibold  '>Our data highlights the incredible impact our donors have made
           <br />  through their commitment and generosity.</p>

             <div className="bg-[#DC143C] shadow-lg w-[1250px] h-[200px] rounded flex
               justify-center space-x-[10rem] items-center  ">

                <div className="  space-y-2">
                <h1 className=' text-[2.6rem] font-bold text-[#fff]  '>200,000</h1>
                    <p className=' text-[1.2rem] text-[#fff]  '>Lives Saved</p>
                </div>
                <div className=" space-y-2">
                <h1 className=' text-[2.6rem] font-bold text-[#ffff]  '>300,000</h1>
                <p className=' text-[1.2rem] text-[#ffff]'>Donations Made</p>
                </div>
                <div className=" space-y-2">
                <h1 className=' text-[2.7rem] font-bold text-[#ffff]  '>100</h1>
                <p className=' text-[1.2rem] text-[#ffff] '>Countries Served</p>
                </div>
             </div>
      </div>
    </div>
  )
}
