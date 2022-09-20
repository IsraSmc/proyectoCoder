let carrito = [];
let cantDeCarteraV;
localStorage.setItem('miCarrito', JSON.stringify(carrito));

mostrarCarrito();

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
            enviarDatos(carrito);
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
            enviarDatos(carrito);
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
            enviarDatos(carrito);
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
    enviarDatos(carrito);
}

//mostrar carrito
function mostrarCarrito(){
    let precioFinal = 0;
    carrito.forEach((productoDeCarrito) => {
            let carritoTable = document.createElement("tr");
            carritoTable.id = `fila${productoDeCarrito.nombreDelProducto}`;
            carritoTable.innerHTML += `
                <td>${productoDeCarrito.nombreDelProducto}</td>
                <td><input id="cantidad-producto-${productoDeCarrito.nombreDelProducto}" type="number" value="${productoDeCarrito.cantidad}" min="1" max="50" step="1" </td>
                <td>${productoDeCarrito.color}</td>
                <td>${productoDeCarrito.precio}</td>`

            precioFinal += productoDeCarrito.precio;
            }
    );
}

function enviarDatos(lista){
    const enviarAURL = "https://jsonplaceholder.typicode.com/posts";
    const nuevoPost = {
        userId:1,
        id: 2,
        tittle:"Lista de carrito",
        body: JSON.stringify(lista)
    }
    fetch(enviarAURL,{
        method:'POST',
        body: JSON.stringify(nuevoPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(respuesta => respuesta.json())
    .then(datos => {
        Swal.fire("Datos enviados");
    })
}
/*
[{"nombre":"Cartera V","cantidadDeCarteras":0,"colorDeCarteras":null,"precioDeCarteras":0}]
*/