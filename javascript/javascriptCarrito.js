let carrito = [];
let cantDeCarteraV;
localStorage.setItem('miCarrito', JSON.stringify(carrito));

//Agregado de carrito seccion mujer
function agregarCarteraVAlCarrito(){
    let nombreDelProducto = "Cartera V";
    let c = document.getElementById("cantidadCarteraV");
    let cantidad = c.options[c.selectedIndex].innerText;
    let colour = document.getElementById("colorCarteraV");
    let color = colour.options[colour.selectedIndex].innerText;
    let precio = 4000*cantidad;
    var productoV = { 
        nombre: nombreDelProducto,
        cantidadDeCarteras: cantidad,
        colorDeCarteras: color,
        precioDeCarteras: precio
    };

    carrito.push(productoV); 
    localStorage.setItem('miCarrito', JSON.stringify(carrito));
} 
/* 
[{"nombre":"Cartera V","colorDeCarteras":{"0":{},"1":{},"2":{},"3":{}},"precioDeCarteras":null}]
*/

function agregarCarteraWaffleAlCarrito(){
    let nombreDelProducto = "Cartera Waffle";
    let c = document.getElementById("cantidadCarteraWaffle");
    let cantidad = c.options[c.selectedIndex].innerText;
    let colour = document.getElementById("colorCarteraWaffle");
    let color = colour.options[colour.selectedIndex].innerText;
    let precio = 3900*cantidad;
    var productoV = { 
        nombre: nombreDelProducto,
        cantidadDeCarteras: cantidad,
        colorDeCarteras: color,
        precioDeCarteras: precio
    };

    carrito.push(productoV);
    localStorage.setItem('miCarrito', JSON.stringify(carrito));
}

function agregarCarteraCiervoAlCarrito(){
    let nombreDelProducto = "Cartera Ciervo";
    let c = document.getElementById("cantidadCarteraCiervo");
    let cantidad = c.options[c.selectedIndex].innerText;
    let colour = document.getElementById("colorCarteraCiervo");
    let color = colour.options[colour.selectedIndex].innerText;
    let precio = 4100*cantidad;
    var productoV = { 
        nombre: nombreDelProducto,
        cantidadDeCarteras: cantidad,
        colorDeCarteras: color,
        precioDeCarteras: precio
    };

    carrito.push(productoV);
    localStorage.setItem('miCarrito', JSON.stringify(carrito));
}

function agregarCarteraCuadroAlCarrito(){
    
    let nombreDelProducto = "Cartera Cuadros";
    let c = document.getElementById("cantidadCarteraCuadro");
    let cantidad = c.options[c.selectedIndex].innerText;
    let colour = document.getElementById("colorCarteraCuadro");
    let color = colour.options[colour.selectedIndex].innerText;
    let precio = 4000*cantidad;
    var productoV = { 
        nombre: nombreDelProducto,
        cantidadDeCarteras: cantidad,
        colorDeCarteras: color,
        precioDeCarteras: precio
    };

    carrito.push(productoV);
    localStorage.setItem('miCarrito', JSON.stringify(carrito));
}

//mostrar carrito
function mostrarCarrito(){
    let productoa = [];
    let stringDeCarrito = document.getElementById("carrito");
    productoa = localStorage.getItem('miCarrito');
    productoa = JSON.parse(productoa);
    for(i=0; i <= productoa.length; i++){
        stringDeCarrito.innerText = productoa[i].nombre + " Cantidad: " +
        productoa[i].cantidadDeCarteras + " Color: " + 
        productoa[i].colorDeCarteras + " Precio: " + 
        productoa[i].precioDeCarteras;
    }
}
/*
[{"nombre":"Cartera V","cantidadDeCarteras":0,"colorDeCarteras":null,"precioDeCarteras":0}]
*/