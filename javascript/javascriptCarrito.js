let carrito = [];
sessionStorage.setItem('micarrito', JSON.stringify(carrito));

//Agregado de carrito seccion mujer
function agregarCarteraVAlCarrito(){
    let nombreDelProducto = "Cartera V";

    let cantidad = document.getElementById("cantidadCarteraV").onselect;
    let color = document.getElementById("colorCarteraV").onselect;
    let precio = 4000*cantidad;
    var productoV = { 
        nombre: nombreDelProducto,
        cantidadDeCarteras: cantidad,
        colorDeCarteras: color,
        precioDeCarteras: precio
    };

    //probando objeto
    sessionStorage.setItem('unObjeto', JSON.stringify(productoV));
    //

    carrito.push(productoV);
    sessionStorage.setItem('micarrito', JSON.stringify(carrito));
}

function agregarCarteraWaffleAlCarrito(){
    let nombreDelProducto = "Cartera Waffle";
    let cantidad = document.getElementById("cantidadCarteraWaffle").onselect;
    let color = document.getElementById("colorCarteraWaffle").onselect;
    let precio = 3900*cantidad;
    var productoV = { 
        nombre: nombreDelProducto,
        cantidadDeCarteras: cantidad,
        colorDeCarteras: color,
        precioDeCarteras: precio
    };

    carrito.push(productoV);
    sessionStorage.setItem(carrito);
}

function agregarCarteraCiervoAlCarrito(){
    let nombreDelProducto = "Cartera Ciervo";
    let cantidad = document.getElementById("cantidadCarteraCiervo").onselect;
    let color = document.getElementById("colorCarteraCiervo").onselect;
    let precio = 4100*cantidad;
    var productoV = { 
        nombre: nombreDelProducto,
        cantidadDeCarteras: cantidad,
        colorDeCarteras: color,
        precioDeCarteras: precio
    };

    carrito.push(productoV);
    sessionStorage.setItem(carrito);
}

function agregarCarteraCuadroAlCarrito(){
    
    let nombreDelProducto = "Cartera Cuadros";
    let cantidad = document.getElementById("cantidadCarteraCuadros").onselect;
    let color = document.getElementById("colorCarteraCuadros").onselect;
    let precio = 4000*cantidad;
    var productoV = { 
        nombre: nombreDelProducto,
        cantidadDeCarteras: cantidad,
        colorDeCarteras: color,
        precioDeCarteras: precio
    };

    carrito.push(productoV);
    sessionStorage.setItem(carrito);
}

//mostrar carrito
function mostrarCarrito(){
    let productoa = localStorage.getItem('miCarrito');
    productoa = JSON.parse(productoa);
    for(i=0; i <= productoa.length; i++){
        let productoX = productoa[i];
        for(x=0; x <= productoX.length; x++){
            alert(productoX[x]);
        }
    }
}
