import React from "react";
import "./sass/cards.scss";
export const Cards = (props) => {
    console.log(props)
    return (
        
        <div
        className="card"
    >
        
        <div className="card-body">
        <img
            src={props.producto.img}
            className="card-img-top "
            
        />
            <h5 className="card-title">{props.producto.nombre}</h5>
            <p className="card-text">${props.producto.precio}</p>
            <a href="#" className="btn btn-primary">Detalle</a>
        </div>
    </div>
    )
}