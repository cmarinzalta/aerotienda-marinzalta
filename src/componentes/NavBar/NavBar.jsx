import React from "react";
import { CartWidget } from "./CartWidget";
import "../sass/Header.scss";
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-opacity-25">
            <div className="container-fluid">
                <a className="navbar-brand fs-3 ps-5" href="#">AeroTienda</a>
                <div id="navbarNav ">
                    <ul className="navbar-nav pe-5">
                        <li className="nav-item fs-6 px-2">
                            <a className="nav-link " href="#">Inicio</a>
                        </li>
                        <li className="nav-item fs-6 px-2">
                            <a className="nav-link" href="#">Accesorios</a>
                        </li>
                        <li className="nav-item fs-6 px-2">
                            <a className="nav-link " href="#">Coleccionables</a>
                        </li>
                        <li className="nav-item fs-6 px-2">
                            <a className="nav-link " href="#"><CartWidget /></a>
                        </li>
                    </ul>
                </div>
            </div>     
        </nav>

    )
}