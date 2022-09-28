import React from "react";
const Titulo = prop => <h1>{prop.titulo}</h1>
export const ItemListContainer = (props) => {
    return <div class="text-center fs-4">
        <Titulo titulo={"Esta pagina se esta desarrollando"}/>
    </div>
}