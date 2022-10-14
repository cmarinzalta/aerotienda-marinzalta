
const productos =[
    {id:"1" , nombre:"Lego Air Plane" , stock: "1" ,categoria: "Coleccion" ,precio:"25000", descuento:"0", img:"src/componentes/img/legoplane.png" },
    {id:"2" , nombre:"Sacapuntas" , stock: "3" ,categoria: "Coleccion" ,precio:"1500", descuento:"5", img:"src/componentes/img/sacapuntas.png" },
    {id:"3" , nombre:"Lampara acrilica" , stock: "1" ,categoria: "Coleccion" ,precio:"300", descuento:"15", img:"src/componentes/img/lampara.png" },
    {id:"4" , nombre:"Maqueta Hercules" , stock: "1" ,categoria: "Coleccion" ,precio:"300", descuento:"15", img:"src/componentes/img/maquetahercules.png" }
]

export const gFetch = () => {
    return new Promise ((res, rej) => {
        setTimeout(()=>{
            res (productos)
        }, 3000)
        
    })
}