import React from 'react'

export const ItemDetail = ({ productos = {
  id: "1",
  nombre: "Lego Air Plane",
  stock: "1",
  categoria: "Coleccion",
  precio: "25000",
  descuento: "0",
  img: "src/componentes/img/legoplane.png",
} }) => {
  return (
    <div>
      <div className="card mb-3" style="max-width: 540px;">
        <div clasNames="row g-0">
          <div className="col-md-4">
            <img
              src={props.producto.imagen}
              class="img-fluid rounded-start" 
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.producto.nombre}</h5>
              <p className="card-text">stock: {props.producto.stock}</p>
              <p className="card-text"><small className="text-muted">precio: $ {props.producto.precio}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
