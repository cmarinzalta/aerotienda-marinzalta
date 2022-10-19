import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../Loading/Loading";
import { gFetch } from "../../helpers/gFetch";
import { ItemDetail } from "../../ItemDetail/itemDetail";

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [loading, setLoading] = useState (true)
    const {idProducto} = useParams()
    useEffect (()=> {
        gFetch(idProducto)
        .then(resp => setProducto(resp))
        .finally(()=> setLoading(false))
    }, [idProducto])
    return (
      <> 
        <section>
              {loading ?
                 <Loading/>
                :
                <ItemDetail producto={producto} /> 
              } 
        </section>
        {console.log(idProducto)}
        {console.log(producto)}
    </> 
    )
    
}