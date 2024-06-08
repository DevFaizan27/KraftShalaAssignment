import React from 'react'
import Layout from './Pages/Layout'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Forecast from './Components/Forecast'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index={true} path='' element={<Home/>}/>
      <Route path='forecast' element={<Forecast/>}/>
      </Route>
     </Routes>
      <Toaster/>
    </>
  )
}

export default App