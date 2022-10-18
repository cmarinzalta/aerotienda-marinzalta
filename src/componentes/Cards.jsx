import React from "react";
import { Link } from "react-router-dom";
export const Cards = (props) => {
    console.log(props)
    return (
        
        <div className="card">        
        <div className="card-body">
        <img
            src={props.producto.img}
            className="card-img-top "
        />
            <h5 className="card-title">{props.producto.nombre}</h5>
            <p className="card-text">${props.producto.precio}</p>
            <Link to= {`/detalle/${props.producto.id}`} className="btn btn-primary">Detalle</Link>
        </div>
    </div>
    )
}