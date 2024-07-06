import React from 'react'
import profile from '../assets/imgs.jpg'
import chart from '../assets/Chart.png'
import Dashboard from '../Components/Dashboard'
import Dashheader from './Dashheader'


export default function Dash() {
  return (
    <div className=' relative'>

        <div className="flex">
         <Dashboard/>
          <div className="">
            <Dashheader/>
          </div>
          
          {/* Top Cards */}
          <div className=" absolute top-[7rem] right-[2rem]  ">
          
            <div className="flex gap-3">
 
              <div className="w-[330px] h-[200px] rounded bg-[#C5DCFF] space-y-7 pt-4    ">
                {/* left side */}
                <div className="   ">
               
                 <div className="flex items-center  justify-between mx-6  ">
                 <h1 className=' text-[2rem]  font-bold text-[#5483CA] '>Request</h1>
                 <p className=' font-semibold '>01 March 2024</p>
                 </div>
                </div>
                {/* left side */}

                {/* right side */}
               
                <div className=" flex  justify-between mx-5 items-center ">
                <div>  <p className='text-[1.2rem] font-semibold text-[#5483CA]  '>Total</p>
                <h1 className=' text-[2.4rem] font-bold text-[#5483CA]  '>20</h1></div>
                   <div className=" flex space-x-2 ">
                   
                   <div className=" w-[38px] h-[70px] bg-white ">
                    <span className='bg-[#ADC2E1] font-semibold py-2 px-[0.6rem] rounded-[0.7rem] text-white  '>B+</span>
                    <h1 className='text-2xl text-[#ADC2E1] text-center pt-1  '>8</h1>
                    </div>
                   <div className=" w-[38px] h-[70px] bg-white ">
                   <span className='bg-[#ADC2E1] font-semibold py-2 px-[0.6rem] rounded-[0.7rem] text-white  '>O+</span>
                   <h1 className='text-2xl text-[#ADC2E1] text-center pt-1  '>8</h1>
                   </div>
                   <div className=" w-[38px] h-[70px] bg-white ">
                   <span className='bg-[#ADC2E1] font-semibold py-2 px-[0.6rem] rounded-[0.7rem] text-white  '>A+</span>
                   <h1 className='text-2xl text-[#ADC2E1] text-center pt-1  '>4</h1>
                   </div>
                   </div>
                </div>

                {/* right side */}
              </div>




              <div className="w-[330px] h-[200px] rounded bg-[#FFC5DA] space-y-7 pt-4  ">
              <div className="   ">
               
               <div className="flex items-center  justify-between mx-6  ">
               <h1 className=' text-[2rem]  font-bold text-[#CA5462] '>Received</h1>
               <p className=' font-semibold text-[#CA5462] '>01 March 2024</p>
               </div>
              </div>
              {/* left side */}

              {/* right side */}
             
              <div className=" flex  justify-between mx-5 items-center ">
              <div>  <p className='text-[1.2rem] font-semibold text-[#CA5462]  '>Total</p>
              <h1 className=' text-[2.4rem] font-bold text-[#CA5462]  '>20</h1></div>
                 <div className=" flex space-x-2 ">
                 
                 <div className=" w-[38px] h-[70px] bg-white ">
                  <span className='bg-[#E1ADBC] font-semibold py-2 px-[0.6rem] rounded-[0.7rem] text-white  '>B+</span>
                  <h1 className='text-2xl text-[#E1ADBC] text-center pt-1  '>8</h1>
                  </div>
                 <div className=" w-[38px] h-[70px] bg-white ">
                 <span className='bg-[#E1ADBC] font-semibold py-2 px-[0.6rem] rounded-[0.7rem] text-white  '>O+</span>
                 <h1 className='text-2xl text-[#E1ADBC] text-center pt-1  '>8</h1>
                 </div>
                 <div className=" w-[38px] h-[70px] bg-white ">
                 <span className='bg-[#E1ADBC] font-semibold py-2 px-[0.6rem] rounded-[0.7rem] text-white  '>A+</span>
                 <h1 className='text-2xl text-[#E1ADBC] text-center pt-1  '>4</h1>
                 </div>
                 </div>
              </div>

                
              </div>
              <div className="w-[330px] h-[200px] rounded bg-[#CDFFC5] space-y-5 pt-4 ">
              <div className="   ">
               
               <div className="flex items-center  justify-between mx-6  ">
               <h1 className=' text-[2rem]  font-bold text-[#54CA8A] '>In Stock</h1>
               <p className=' font-semibold text-[#54CA8A] '>01 March 2024</p>
               </div>
              </div>
              {/* left side */}

              {/* right side */}
             
              <div className=" flex  justify-between mx-5 items-center ">
              <div>  <p className='text-[1.2rem] font-semibold text-[#54CA8A]  '>Total</p>
              <h1 className=' text-[2.4rem] font-bold text-[#54CA8A]  '>20</h1></div>
                 <div className=" flex space-x-2 ">
                 
                 <div className=" w-[38px] h-[70px] bg-white ">
                  <span className='bg-[#ADE1BB] font-semibold py-2 px-[0.6rem] rounded-[0.7rem] text-white  '>B+</span>
                  <h1 className='text-2xl text-[#ADE1BB] text-center pt-1  '>8</h1>
                  </div>
                 <div className=" w-[38px] h-[70px] bg-white ">
                 <span className='bg-[#ADE1BB] font-semibold py-2 px-[0.6rem] rounded-[0.7rem] text-white  '>O+</span>
                 <h1 className='text-2xl text-[#ADE1BB] text-center pt-1  '>8</h1>
                 </div>
                 <div className=" w-[38px] h-[70px] bg-white ">
                 <span className='bg-[#ADE1BB] font-semibold py-2 px-[0.6rem] rounded-[0.7rem] text-white  '>A+</span>
                 <h1 className='text-2xl text-[#ADE1BB] text-center pt-1  '>4</h1>
                 </div>
                 </div>
              </div>
                
              </div>
            </div>
          </div>
         {/* Top Cards */}

          {/* Button Cards */}
          <div className=" absolute bottom-[6rem] left-[22rem]  ">

            {/* Left */}
            <div className=" space-y-4">
              <h1 className=' text-[1.2rem] font-semibold  '>Recent Donations</h1>
              <div className=" flex justify-between  items-center w-[500px] px-[2rem] h-[80px] bg-gray-100 rounded  ">
             
                <div className=" flex space-x-6">
                <img className='w-[4vw] h-[8vh] rounded-[50%] border-2 border-gray-600  ' src={profile} alt="" />
                  <div className=" space-y-1">
                  <h1 className=' text-[1.1rem] font-semibold  '>Faarax</h1>
                  <p className=' font-semibold'>01-june-2024</p>
                  </div>
                </div>
                <h1 className=' bg-red-300 py-2 px-2  text-red-700 font-semibold rounded-[50%]  '>B+</h1>
              </div>

              <div className=" flex justify-between  items-center w-[500px] h-[80px] bg-gray-100 rounded px-[2rem]  ">
              <div className=" flex space-x-6">
                <img className='w-[4vw] h-[8vh] rounded-[50%] border-2 border-gray-600  ' src={profile} alt="" />
                  <div className=" space-y-1">
                  <h1 className=' text-[1.1rem] font-semibold  '>Jamaal</h1>
                  <p className=' font-semibold'>01-june-2024</p>
                  </div>
                </div>
                <h1 className=' bg-red-300 py-2 px-2  text-red-700 font-semibold rounded-[50%]  '>A+</h1>
              </div>
              
              <div className=" flex justify-between  items-center w-[500px] h-[80px] bg-gray-100 rounded  px-[2rem]  ">
              <div className=" flex space-x-6">
                <img className='w-[4vw] h-[8vh] rounded-[50%] border-2 border-gray-600  ' src={profile} alt="" />
                  <div className=" space-y-1">
                  <h1 className=' text-[1.1rem] font-semibold  '>Gedow</h1>
                  <p className=' font-semibold'>01-june-2024</p>
                  </div>
                </div>
                <h1 className=' bg-red-300 py-2 px-2  text-red-700 font-semibold rounded-[50%]  '>B-</h1>
                <h1 className='text-[1.2rem] font-semibold absolute left-[34rem] top-0  '>Analysis</h1>
                <img className=' absolute  left-[34rem] bottom-[0.01rem]  ' src={chart} alt="" />
              </div>
            
            </div>
       
             {/* Left */}
             

          </div>
           {/* Button Cards */}
         
        </div>
      
    </div>
  )
}
