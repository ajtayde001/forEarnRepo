import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Addinternship from '../../pages/recruitments/Addinternship'
import Showintenship from '../../pages/recruitments/Showintenship'
import AddSkills from '../../pages/recruitments/AddSkills'

function Mainroute() {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/add-intern' element={<Addinternship/>}/>
        <Route path='/show-intern' element={<Showintenship/>}/>
        <Route path='/add-skill' element={<AddSkills/>}/>
    </Routes>
  )
}

export default Mainroute
