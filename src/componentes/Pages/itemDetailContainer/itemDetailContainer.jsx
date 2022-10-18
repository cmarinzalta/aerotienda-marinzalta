import React from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../ItemDetail/itemDetail";

export const ItemDetailContainer = () => {
    const {idProductos} = useParams()
    console.log (idProductos)
    return (
        <div>
            <ItemDetail/>
        </div>
    )
}