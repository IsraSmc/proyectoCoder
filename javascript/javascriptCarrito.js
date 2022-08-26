let carrito = [];
let cantDeCarteraV;
localStorage.setItem('miCarrito', JSON.stringify(carrito));

//Agregado de carrito seccion mujer
function agregarCarteraVAlCarrito(){
    let nombreDelProducto = "Cartera V";
    let c = document.getElementById("cantidadCarteraV");
    if(c.options[c.selectedIndex].index == 0){
        Swal.fire("Error","Seleccione una cantidad", "error");
    }
    else{
        let cantidad = c.options[c.selectedIndex].innerText;
        let colour = document.getElementById("colorCarteraV");
        if(colour.options[colour.selectedIndex].index == 0){
            Swal.fire("Error","Seleccione un color", "error");
        }
        else{
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
    }
}

function agregarCarteraWaffleAlCarrito(){
    let nombreDelProducto = "Cartera Waffle";
    let c = document.getElementById("cantidadCarteraWaffle");
    if(c.options[c.selectedIndex].index == 0){
        Swal.fire("Error","Seleccione una cantidad", "error");
    }
    else{
        let cantidad = c.options[c.selectedIndex].innerText;
        let colour = document.getElementById("colorCarteraWaffle");
        if(colour.options[colour.selectedIndex].index == 0){
            Swal.fire("Error","Seleccione un color", "error");
        }
        else{
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
    }
}

function agregarCarteraCiervoAlCarrito(){
    let nombreDelProducto = "Cartera Ciervo";
    let c = document.getElementById("cantidadCarteraCiervo");
    if(c.options[c.selectedIndex].index == 0){
        Swal.fire("Error","Seleccione una cantidad", "error");
    }
    else{
        let cantidad = c.options[c.selectedIndex].innerText;
        let colour = document.getElementById("colorCarteraCiervo");
        if(colour.options[colour.selectedIndex].index == 0){
            Swal.fire("Error","Seleccione un color", "error");
        }
        else{
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
    }
}

function agregarCarteraCuadroAlCarrito(){
    
    let nombreDelProducto = "Cartera Cuadros";
    let c = document.getElementById("cantidadCarteraCuadro");
    if(c.options[c.selectedIndex].index == 0){
        Swal.fire("Error","Seleccione una cantidad", "error");
    }
    else{
        let cantidad = c.options[c.selectedIndex].innerText;
        let colour = document.getElementById("colorCarteraCuadro");
        if(colour.options[colour.selectedIndex].index == 0){
            Swal.fire("Error","Seleccione un color", "error");
        }
        else{
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
    }

    carrito.push(productoV);
    localStorage.setItem('miCarrito', JSON.stringify(carrito));
}

//mostrar carrito
function mostrarCarrito(){
    carrito = localStorage.getItem('miCarrito');
    let stringDeCarrito = document.getElementById('carrito');
    for(i=0; i <= carrito.length; i++){
        stringDeCarrito.innerText = carrito[i].nombre + " Cantidad: " +
        carrito[i].cantidadDeCarteras + " Color: " + 
        carrito[i].colorDeCarteras + " Precio: " + 
        carrito[i].precioDeCarteras + "\n";
    }

}
/*
[{"nombre":"Cartera V","cantidadDeCarteras":0,"colorDeCarteras":null,"precioDeCarteras":0}]
*/