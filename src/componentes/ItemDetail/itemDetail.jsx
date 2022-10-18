import React from 'react'

export const ItemDetail = ({productos = {
    id:"1" , 
    nombre:"Lego Air Plane" ,
     stock: "1" ,
     categoria: "Coleccion" ,
     precio:"25000", 
     descuento:"0", 
     img:"src/componentes/img/legoplane.png",
}}) => {
  return (
    <div>itemDetail</div>
  )
}
