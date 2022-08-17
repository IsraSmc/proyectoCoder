let carrito = [];


//Agregado de carrito seccion mujer
function agregarCarteraVAlCarrito(){
    let productoV;
    let nombreDelProducto = "Cartera V";
    let cantidad = document.getElementById("cantidadCarteraV");
    let color = document.getElementById("colorCarteraV");
    let precio = 4000*cantidad;
    productoV = [nombreDelProducto, cantidad, color, precio];
    carrito.push(productoV);
    sessionStorage.setItem(carrito);
}

function agregarCarteraWaffleAlCarrito(){
    let productoV;
    let nombreDelProducto = "Cartera Waffle";
    let cantidad = document.getElementById("cantidadCarteraWaffle");
    let color = document.getElementById("colorCarteraWaffle");
    let precio = 3900*cantidad;
    productoV = [nombreDelProducto, cantidad, color, precio];
    carrito.push(productoV);
    sessionStorage.setItem(carrito);
}

function agregarCarteraCiervoAlCarrito(){
    let productoV;
    let nombreDelProducto = "Cartera Ciervo";
    let cantidad = document.getElementById("cantidadCarteraCiervo");
    let color = document.getElementById("colorCarteraCiervo");
    let precio = 4100*cantidad;
    productoV = [nombreDelProducto, cantidad, color, precio];
    carrito.push(productoV);
    sessionStorage.setItem(carrito);
}

function agregarCarteraCuadroAlCarrito(){
    let productoV;
    let nombreDelProducto = "Cartera Cuadros";
    let cantidad = document.getElementById("cantidadCarteraCuadros");
    let color = document.getElementById("colorCarteraCuadros");
    let precio = 4000*cantidad;
    productoV = [nombreDelProducto, cantidad, color, precio];
    carrito.push(productoV);
    sessionStorage.setItem(carrito);
}

//mostrar carrito
function mostrarCarrito(){
    let productoa = localStorage.getItem(carrito);
    for(i=0; i <= productoa.length; i++){
        let productoX = productoa[i];
        for(x=0; x <= productoX.length; x++){
            alert(productoX[x]);
        }
    }
}
