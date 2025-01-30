import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LeadCreate from './pages/LeadCreate'
import LeadList from './pages/LeadList'
import LeadEdit from './pages/Leadedit'
import SiginIn from './pages/SiginIn'

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='leadcreate' element={<LeadCreate></LeadCreate>} ></Route>
        <Route path="leadlist" element={<LeadList></LeadList>}></Route>
        <Route path="/leadedit/:id" element={<LeadEdit></LeadEdit>}></Route>
        <Route path="/" element={<SiginIn></SiginIn>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App