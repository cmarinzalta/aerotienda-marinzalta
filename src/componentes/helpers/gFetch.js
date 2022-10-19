
const productos =[
    {id:"1" , nombre:"Aceite reconstructor" , stock: 6 ,categoria: "Capilar" ,precio:5000, descuento:0, img:"https://img.freepik.com/psd-gratis/frasco-gotero-vidrio-ambar-maqueta-caja_358694-1339.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729" },
    {id:"2" , nombre:"Anti-freez" , stock: 3 ,categoria: "Capilar" ,precio:1800, descuento:5, img:"https://img.freepik.com/psd-gratis/maqueta-caja-botella-spray-cosmetico-vidrio-ambar_358694-1316.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729" },
    {id:"3" , nombre:"Sellador de puntas" , stock: 4 ,categoria: "Capilar" ,precio:800, descuento:0, img:"https://img.freepik.com/psd-gratis/maqueta-frasco-gotero-caja_358694-525.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729" },
    {id:"4" , nombre:"Shampoo Nutricion Extrema" , stock: 7 ,categoria: "Capilar" ,precio:3000, descuento:15, img:"https://img.freepik.com/psd-premium/maqueta-botella-cosmetica-caja-exhibicion_358694-2811.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729"},
    {id:"5" , nombre:"Acondicionador Nutricion Extrema" , stock: 3 ,categoria: "Capilar" ,precio:3100, descuento:"15", img:"https://img.freepik.com/psd-gratis/maqueta-botella-cosmetica-caja-exhibicion_358694-2806.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729"},
    {id:"6" , nombre:"Mascarilla facial" , stock: 4 ,categoria: "Corporal" ,precio:1600, descuento:0, img:"https://img.freepik.com/psd-gratis/maqueta-embalaje-tarro-crema-cosmetica-plastico-brillante_439185-13213.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729" },
    {id:"7" , nombre:"Contorno anti-Age" , stock: 7 ,categoria: "Corporal" ,precio:2300, descuento:10, img:"https://img.freepik.com/psd-gratis/maqueta-marca-botella-spray-cosmetico-brillante_439185-13229.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729"},
    {id:"8" , nombre:"Balsamo corporal" , stock: 2 ,categoria: "Corporal" ,precio:800, descuento:0, img:"https://img.freepik.com/psd-premium/maqueta-marca-botella-bomba-locion-cosmetica-plastico-brillante_439185-13164.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729"},
    {id:"9" , nombre:"Balsamo de manos" , stock: 20 ,categoria: "Corporal" ,precio:300, descuento:0, img:"https://img.freepik.com/psd-gratis/maqueta-empaque-tubo-cosmetico-brillante_439185-13187.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729"},
    {id:"10" , nombre:"Talco" , stock: 10 ,categoria: "Corporal" ,precio:200, descuento:0, img:"https://img.freepik.com/psd-gratis/maqueta-marca-botella-desodorante-plastico-brillante_439185-13084.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729"},
    {id:"11" , nombre:"White" , stock: 3 ,categoria: "Combos" ,precio:20000, descuento:25, img:"https://img.freepik.com/psd-premium/maqueta-paquete-cosmetico_134542-264.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729"},
    {id:"12" , nombre:"Black" , stock: 3 ,categoria: "Combos" ,precio:20000, descuento:25, img:"https://img.freepik.com/psd-gratis/escena-maqueta-marca-cosmetica_358694-3409.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729"},
    {id:"13" , nombre:"Rouse" , stock: 3 ,categoria: "Combos" ,precio:20000, descuento:25, img:"https://img.freepik.com/psd-gratis/producto-maqueta-base_23-2149738376.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729"},
    {id:"14" , nombre:"L-Blue" , stock: 3 ,categoria: "Combos" ,precio:20000, descuento:25, img:"https://img.freepik.com/psd-gratis/surtido-productos-cosmeticos-envases_23-2149150196.jpg?size=626&ext=jpg&ga=GA1.2.87316767.1652732729"},
]

export const gFetch = (id) => {
    return new Promise ((res, rej) => {
        setTimeout(()=>{
            res (id ? productos.find(prod=>prod.id == id) : productos)
        }, 3000)
        
    })
}