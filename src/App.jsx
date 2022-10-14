import { useState } from 'react'
import './App.css'

import { ItemListContainer } from './componentes/ItemListContainer'
import { NavBar } from './componentes/NavBar/NavBar'

function App() {
  return (<>
    <NavBar />
    <ItemListContainer /> 

  </>
  )
}

export default App
