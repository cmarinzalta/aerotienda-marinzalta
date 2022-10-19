import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "./NavBar/CartWidget";
import "./sass/Header.scss";
export const Cards = (props) => {
    console.log(props)
    return (

        <div className="card row m-4 w-25 ">

            <div className="card-body ">
                <img
                    src={props.producto.img}
                    className="card-img-top rounded-2 "
                />
                <h5 className="card-title mt-2 fs-4">{props.producto.nombre}</h5>
                <p className="card-text fs-4 fw-bold m-2">${props.producto.precio}</p>
                <Link to={`/detalle/${props.producto.id}`} className="btn btn-secondary card-text fs-6 m-2">Detalle</Link>
               <button className="btn btn-secondary card-text fs-6 m-2"> <CartWidget /></button>
            </div>
        </div>
    )
}