import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { BountyProvider } from './context/BountyContext'
import WizardPage from './pages/WizardPage'
import Confirmation from './pages/Confirmation'
import Result from './pages/Result'

export default function App(){
  return (
    <BountyProvider>
      <Routes>
        <Route path='/' element={<Navigate to='/create' replace />} />
        <Route path='/create/*' element={<WizardPage/>} />
        <Route path='/confirmation' element={<Confirmation/>} />
        <Route path='/result' element={<Result/>} />
      </Routes>
    </BountyProvider>
  )
}
