import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LandingPage from './component/LandingPage'
import NavBar from './component/NavBar'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/navbar' element={<LandingPage/>}/>

    </Routes>
    </>
  )
}

export default App