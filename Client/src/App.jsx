import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
import { Home } from './Components/Home'

function App() {

  return (
    <BrowserRouter>
    <section>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to='/GardenBloom' />}></Route>
        <Route path="/GardenBloom" element={<Home/>}> </Route>
      </Routes>
    </section> 
    </BrowserRouter>
  )
}

export default App