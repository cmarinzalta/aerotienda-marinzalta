import React from "react";
import { CartWidget } from "./CartWidget";
import "../sass/Header.scss";
export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand fs-3" href="#">AeroTienda</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item fs-6">
                            <a class="nav-link " href="#">Inicio</a>
                        </li>
                        <li class="nav-item fs-6">
                            <a class="nav-link" href="#">Accesorios</a>
                        </li>
                        <li class="nav-item fs-6">
                            <a class="nav-link " href="#">Coleccionables</a>
                        </li>
                        <li class="nav-item fs-6">
                            <a class="nav-link " href="#"><CartWidget /></a>
                        </li>
                    </ul>
                </div>
            </div>            
        </nav>

    )
}