import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Addinternship from '../../pages/recruitments/Addinternship'
import Showintenship from '../../pages/recruitments/Showintenship'
import AddSkills from '../../pages/recruitments/AddSkills'
import ShowProject from '../../pages/Projects/ShowProject'
import AddTask from '../../pages/Projects/AddTask'
import AddProject from '../../pages/Projects/AddProject'
import Maincard from '../Cards/Maincard'
import Taskmain from '../../pages/Tasks/Taskmain'
import Progresstask from '../../pages/Tasks/Progresstask'

function Mainroute() {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/add-intern' element={<Addinternship/>}/>
        <Route path='/show-intern' element={<Showintenship/>}/>
        <Route path='/add-skill' element={<AddSkills/>}/>
        <Route path='/show-project' element={<ShowProject/>}/>
        <Route path='/add-task' element={<AddTask/>}/>
        <Route path='/add-project' element={<AddProject/>}/>
        <Route path='/hire-all' element={<Maincard/>}/>
        <Route path='/show-task' element={<Taskmain/>}/>
        <Route path='/progress-task' element={<Progresstask/>}/>
    </Routes>
  )
}

export default Mainroute
