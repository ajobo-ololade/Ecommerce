import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LandingPage from './component/LandingPage'
import NavBar from './component/NavBar'
import SignIn from './component/SignIn'
import SignUp from './component/SignUp'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/navbar' element={<LandingPage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>

    </Routes>
    </>
  )
}

export default App