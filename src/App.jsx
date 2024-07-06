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



function App() {
  useEffect(()=>{
    document.body.style.backgroundColor="white"

  },[])
 

  return (
    <>
     <div className=" ">
 <Router>
 <Header/>
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/donate' element={<Donate/>}/>
   <Route path='/contect' element={<Dashboard/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/login' element={<Login/>}/>
    <Route path='/dashb' element={<Dash/>}/>
   <Route path='/donation' element={<Donation/>}/>

   {/* <Route path="*" element={<NotFound />} /> */}

   {/* Dashboard Routers */}

   <Route path='/users' element={<User/>}/>
   <Route path='/donates' element={<Blooddoner/>}/>
   <Route path='/donations' element={<Bloodrequest/>}/>
   
      {/* Dashboard Routers */}
   

  </Routes>
<Footer/>

 </Router>



</div>
    </>
  
  )
}

export default App
