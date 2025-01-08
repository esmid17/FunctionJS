//Inventario productos
const inventarioProductos = Object.seal({
    producto1: {nombre: "Huevos", precio: 3.25, cantidad: 10},
    producto2: {nombre: "Arroz", precio: 50, cantidad: 7},
    producto3: {nombre: "Leche", precio: 1, cantidad: 12},
    producto4: {nombre: "Mantequilla", precio: 2.50, cantidad: 13}
});

//Función para vender productos
function venderProducto(nombreProducto, cantidadVenta) {
    let encontrado = false;

    for (let clave in inventarioProductos) {
        const producto = inventarioProductos[clave];
        if (producto.nombre === nombreProducto) {
            encontrado = true;
            if (producto.cantidad >= cantidadVenta) {
                producto.cantidad -= cantidadVenta;
                console.log(`Se vendieron: ${cantidadVenta} cantidades de ${nombreProducto}`);
            } else {
                console.log(`Error: No hay suficiente stock de ${nombreProducto}.`);
            }
            break;
        }
    }

    if (!encontrado) {
        console.log(`Error: No disponemos de este producto.`);
    }
}

//Función descuento del 10%
function aplicarDescuento(porcentaje) {
    Object.values(inventarioProductos).forEach(producto => {
        const descuento = (producto.precio * porcentaje) / 100;

        //Validar precio
        producto.precio = Math.max(0, producto.precio - descuento);
    });

    console.log(`Descuento del ${porcentaje}%.`);
}

//Venta de productos
venderProducto("Huevos", 5);
venderProducto("Arroz", 8);
venderProducto("Leche", 10);
venderProducto("Mantequilla", 2);
venderProducto("Carne", 3);

//Descuento 10%
aplicarDescuento(10);

//Imprimir resultados
console.log("Inventario final:", inventarioProductos);

  