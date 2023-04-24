

 alert("ingresa numero del producto, para salir ingrese 0");
let seleccioneProducto = parseInt(prompt("1=buzo $45.000,   2=jean $55.000,  3=tenis $220.000,  4=gorra $ 23.500"));
let seleccioneCantidad;
const iva =x => x * 0.21;
let total= 0;
let validacionCiclo = true;

const cantidad = (cant, precio) => {
    return cant * precio
}

while(validacionCiclo) {
    switch(seleccioneProducto) {
        case 1: 
           seleccioneCantidad = parseInt(prompt("el producto de su eleccion es buzo, indique la cantidad"))
                    total += cantidad(seleccioneCantidad, 45000)
        break;  
        case 2: 
           seleccioneCantidad = parseInt(prompt("el producto de su eleccion es jean, indique la cantidad"))
                    total += cantidad(seleccioneCantidad, 55000)
        break;            
        case 3: 
           seleccioneCantidad =parseInt(prompt("el producto de su eleccion es tenis, indique la cantidad"))
                    total += cantidad(seleccioneCantidad, 220000)
        break;            
        case 4: 
            seleccioneCantidad = parseInt(prompt("el producto de su eleccion es gorra, indique la cantidad"))
                    total += cantidad(seleccioneCantidad, 23500)
        break;   
        case 0:
            validacionCiclo=false;


         default: prompt("producto no encontrado")
         break;           
    }
    seleccioneProducto = parseInt(prompt("1=buzo $45.000 2=jean $55.000 3=tenis $220.000 4=gorra $ 23.500"));
}



alert("el total de su compra es : "  + (iva(total) + total));


