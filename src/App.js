import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import AdminDashboard from './component/AdminDashboard'
import Dashboard from './component/Dashboard'
import LandingPage from './component/LandingPage'
import NavBar from './component/NavBar'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'
import SignUps from './component/SignUps'
import Test from './component/Test'

const App = () => {
  const token = localStorage.token
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signups' element={<SignUps/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/dashboard' element={token?<Dashboard/>:<Navigate to ='/signin'/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      
      

    </Routes>
    </>
  )
}

export default App