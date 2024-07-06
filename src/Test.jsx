import React from 'react'
import Dashboard from './Components/Dashboard'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dash from './Dashcomponents/Dash';
import User from './Dashcomponents/User';

export default function Test() {
  return (
    <div>
        <Router>
        <Dashboard/>
        <Routes>
        <Route path='dash' element={<Dash/>}/>
        <Route path='user' element={<User/>}/>
    </Routes>

        </Router>
      
        
    </div>
  )
}
