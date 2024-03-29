import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Catalog } from './Components/Catalog'
import FlowerInf from './Components/FlowerInf'
import ShopCart from './Components/ShopCart'
import Footer from './Components/Footer'
import Services from './Components/Services'
import Contacts from './Components/Contacts'

function App() {
  const [items,setItems] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
  },[items]);


  
  const addItem = (data) => {
      setOpen(!open);
      setItems(prevItems => {
        const item = prevItems.find(item => item.id === data.id);
    
        if (item) {
          return prevItems.map(item => 
            item.id === data.id ? {
              ...item, quantity: item.quantity + 1,
              subTotal: (item.price * (item.quantity + 1))
            } : item
          );
        } else {
          return [...prevItems, data];
        }
      });
      
  };

  return (
    <BrowserRouter>
    <section>
      <Header items={items} />
      
      <Routes>
        <Route 
          path="/"
          element={<Navigate to='/GardenBloom' />}>
        </Route>

        <Route 
          path="/GardenBloom" 
          element={<Home 
          items={items}
          open={open}
          setOpen={setOpen}
          addItem={addItem}
          />}> 
        </Route>

        <Route path="/Home" 
          element={<Navigate to='/GardenBloom' />} > 
        </Route>

        <Route 
          path="/Catalog" 
          element={<Catalog 
          items={items}
          addItem={addItem}
          open={open}
          setOpen={setOpen}
           />} > 
        </Route>

        <Route 
          path="/About_Us" > 
        </Route>

        <Route 
          path="/Contacts"
          element={<Contacts />}
          > 
        </Route>

        <Route 
          path="/Catalog/:name/:id" 
          element={<FlowerInf 
          addItem={addItem}
          open={open}
          setOpen={setOpen}
          items={items}/>}> 
        </Route>

        <Route
          path='/Services'
          element={<Services />}
        >

        </Route>

        <Route 
          path='/Catalog/shopcart' 
          element={<ShopCart items={items} addItem={addItem} setItems={setItems} />}>
        </Route>

        

      </Routes>
      <Footer />
    </section> 
    </BrowserRouter>
  )
}

export default App
