import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Catalog } from './Components/Catalog'
import FlowerInf from './Components/FlowerInf'
import ShopCard from './Components/ShopCard'

function App() {
  const [items,setItems] = useState([]);

  useEffect(() => {
    console.log(items)
  },[items])

  return (
    <BrowserRouter>
    <section>
      <Header items={items.length} />
      <Routes>
        <Route path="/" element={<Navigate to='/GardenBloom' />}></Route>
        <Route path="/GardenBloom" element={<Home/>}> </Route>
        <Route path="/Home" element={<Navigate to='/GardenBloom' />} > </Route>
        <Route path="/Catalog/:type?" element={<Catalog setItems={setItems} items={items} />} > </Route>
        <Route path="/About_Us" > </Route>
        <Route path="/Contacts" > </Route>
        <Route path="/Catalog/:name/:id" element={<FlowerInf key={window.location.pathname} />} > </Route>
        <Route path='/Catalog/shopcard' element={<ShopCard items={items} setItems={setItems} />}></Route>
      </Routes>
    </section> 
    </BrowserRouter>
  )
}

export default App
