import React from "react";
import { CartWidget } from "./CartWidget";
import "../sass/Header.scss";
import { Link } from "react-router-dom";
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg 5">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand fs-3 ps-5">CosmetyC</Link>
                <div id="navbarNav ">
                    <ul className="navbar-nav pe-5">
                        <li className="nav-item fs-6 px-2 fw-bold">
                            <Link to='/categoria/corporal' className="nav-link">Corporal</Link>
                        </li>
                        <li className="nav-item fs-6 px-2 fw-bold">
                            <Link to='/categoria/capilar' className="nav-link ">Capilar</Link>
                        </li>
                        <li className="nav-item fs-6 px-2 fw-bold">
                            <Link to='/categoria/combos' className="nav-link ">Combos</Link>
                        </li>
                        <li className="nav-item fs-6 px-2 fw-bold">
                            <Link to='/carrito' className="nav-link"><CartWidget /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}