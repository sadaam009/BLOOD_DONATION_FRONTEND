import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Donate from './Components/Donate'
import Header from './Components/Header'

import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Components/About'
import Contact from './Components/Contect'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Donation from './Components/Donation'

import Dash from './Dashcomponents/Dash'

import Dashboard from './Components/Dashboard'
import User from './Dashcomponents/User'
import Blooddoner from './Dashcomponents/Blooddoner'
import Bloodrequest from './Dashcomponents/Bloodrequest'
import Userupdate from './Dashcomponents/Userupdate'
import Viewuser from './Dashcomponents/Viewuser'
import Adduser from './Dashcomponents/Adduser'
import Adddoner from './Dashcomponents/Adddoner'
import Doneredit from './Dashcomponents/Doneredit'
import Donerveiw from './Dashcomponents/Donerveiw'
import Requestupdate from './Dashcomponents/Requestupdate'
import Requestveiw from './Dashcomponents/Requestveiw'
import Adddrequest from './Dashcomponents/Addrequest'
import Pagegoals from './Pages/Pagegoals'
import Pagedonate from './Pages/Pagedonate'
import Pagedonation from './Pages/Pagedonation'



function App() {
  useEffect(()=>{
    document.body.style.backgroundColor="white"

  },[])
 

  return (
    <>
     <div className=" ">
 <Router>
 {/* <Header/> */}
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<Pagegoals/>}/>
   <Route path='/donate' element={<Pagedonate/>}/>
   <Route path='/contect' element={<Dashboard/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/login' element={<Login/>}/>
   {/* <Route path='/logins' element={<Login/>}/> */}
    <Route path='/dashb' element={<Dash/>}/>
   <Route path='/donation' element={<Pagedonation/>}/>

   {/* <Route path="*" element={<NotFound />} /> */}

   {/* Dashboard Routers */}

   <Route path='/users' element={<User/>}/>
   <Route path='/donates' element={<Blooddoner/>}/>
   <Route path='/donations' element={<Bloodrequest/>}/>
   <Route path='/updateuser/:id' element={<Userupdate/>}/>
   <Route path='/Edituser/:id' element={<Viewuser/>}/>
   <Route path='/Kudaruser' element={<Adduser/>}/>
   <Route path='/adddoner' element={<Adddoner/>}/>
   <Route path='/editdoners/:id' element={<Doneredit/>}/>
   <Route path='/viwdoner/:id' element={<Donerveiw/>}/>
   <Route path='/updaterequest/:id' element={<Requestupdate/>}/>
   <Route path='/Veiwdonations/:id' element={<Requestveiw/>}/>
   <Route path='/Add_Blood_Request' element={<Adddrequest/>}/>
   
      {/* Dashboard Routers */}
   

  </Routes>
{/* <Footer/> */}

 </Router>



</div>
    </>
  
  )
}

export default App
