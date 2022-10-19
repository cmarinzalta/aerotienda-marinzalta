import React from 'react'
import { CartWidget } from '../NavBar/CartWidget'


export const ItemDetail = ({ producto }) => {
  return (
    <section className='d-flex '>
      <div className='m-1 justify-content-center'>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={producto.img}
                className="img-fluid rounded m-3"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title-detail">{producto.nombre} </h5>
                <p className="card-text-detail mb-2">stock: {producto.stock}</p>
                <h6 className='card-text-detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi cum ad consequuntur distinctio eum, maiores quidem. Voluptatibus deleniti suscipit nisi, esse obcaecati quo sapiente, ratione maiores doloribus ducimus illo est.</h6>
                <h5 className="card-title-detail"><small className="text-muted">$ {producto.precio}</small></h5>
                <button className="btn btn-secondary card-text fs-6 m-2"> <CartWidget /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
