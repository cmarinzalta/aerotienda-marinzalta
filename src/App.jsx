import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { ItemListContainer } from './componentes/ItemListContainer'
import { NavBar } from './componentes/NavBar/NavBar'
import { CarritoPage } from './componentes/Pages/CarritoPage/CarritoPage'
import { ItemDetailContainer } from './componentes/Pages/itemDetailContainer/itemDetailContainer'
import { NotFound404 } from './componentes/NotFound/NotFound404'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<CarritoPage />} />
        <Route path='/404' element={<NotFound404 />} />

        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
