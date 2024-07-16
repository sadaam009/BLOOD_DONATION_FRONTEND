import React,{useState} from 'react'
import logo from '../assets/dropblood.png'

import { Link } from 'react-router-dom'
import{
  LayoutDashboard,
  Users2Icon,
  List,
  ListChecks,
  Settings
} from"lucide-react"


export default function Dashboard() {
  const[active,setactive]=useState(0)
  const Navlink=[
    {
      name:<Link to="/dashb">Dashboard</Link>,
      icone:LayoutDashboard,
    },
    {
      name:<Link to="/users">Users</Link>,
      icone:Users2Icon,
    },
    {
      name:<Link to="/donates">Donate</Link>,
      icone:List,
    },
    {
      name:<Link to="/donations">Donation</Link>,
      icone:ListChecks,
    },
    {
      name:<Link to="/">Logout</Link>,
      icone:Settings,
    },
  ]
  return (
    <>
    <div>
       
        <div className="bg-[#F6F4F5] w-[22vw] h-[117vh] shadow-black  ">

        <div className=" flex space-x-2 items-center ml-8 py-7">
     <img className=' w-[50px]  ' src={logo} alt="" />
     <h1 className=' text-[2rem] font-Far '>Save <span className=' text-red-500'>Life</span></h1>
     </div>
     <hr className='border-[0.01rem] border-gray-400' />
         
         <div className=" space-y-6 flex flex-col text-[1.4rem] mt-[5rem] ml-5 "> 

          {Navlink.map((item,index)=>   <div key={index} className={" flex space-x-3 items-center"
             +(active === index ? " bg-red-400 p-2 mr-7 text-white font-semibold rounded": "")} onClick={()=>setactive(index) }>
            <item.icone/>
            <span>{item.name}  </span>
          </div> )}
         </div>
        
        </div>
    </div>
   
    </>
  )
}
