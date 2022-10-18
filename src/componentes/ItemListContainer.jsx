import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards } from "./Cards";
import { gFetch } from "./helpers/gFetch";



export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState(true)

    const { idCategoria } = useParams()
    console.log (idCategoria)

    const filtrarCategoria = (productosData) => {
        console.log(productosData)
        return productosData.filter(producto=> producto.categoria.toLowerCase() === idCategoria)
    }
    useEffect(() => {
        if (idCategoria){
            gFetch()
            .then(resSgte => setProductos(filtrarCategoria(resSgte)))
                      
            .finally(() => setloading(false))
            console.log(productos)
        } else {
            gFetch()
            .then(resSgte => setProductos(resSgte))

            .finally(() => setloading(false))
            console.log(productos)
       
        }
        
    }, [idCategoria])

    return (
        <>
            <section className="d-flex flex-wrap justify-content mt-2 pt-2">
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