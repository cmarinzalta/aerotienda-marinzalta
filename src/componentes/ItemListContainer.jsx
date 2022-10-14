import React, { useEffect, useState } from "react";
import { Cards } from "./Cards";
import { gFetch } from "./helpers/gFetch";



export const ItemListContainer = ({ greeting, titulo }) => {
    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState([true])

    useEffect(() => {
        gFetch()
            .then(resSgte => setProductos(resSgte))
            .catch(err => colsole.log(err))
            .finally(() => setloading(false))
    }, [])

    console.log(productos)
    return (
        <>
            <section className="d-flex justify-content-sm-around mt-2 pt-2">
            {loading ?
                <h2>cargando...</h2>
                :
                productos.map(producto => <Cards  key={producto.id} producto={producto}/>
               )
            }
            </section>
        </>
    )
} 