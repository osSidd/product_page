import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/home'
import Bag from './pages/bag'
import Sneakers from './pages/sneakers'
import Belt from './pages/belt'
import Contact from './pages/contact'
import Cart from './pages/cart'
import Error from './pages/error'

export default function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bag' element={<Bag/>}/>
        <Route path='/sneakers' element={<Sneakers/>}/>
        <Route path='/belt' element={<Belt/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>      
    </BrowserRouter>
  )
}