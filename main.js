let datoNombre = prompt("Ingrese su nombre");
while (datoNombre === "") {
    alert("Nombre requerido!");
datoNombre = prompt("Ingrese su nombre");
}
    alert("Bien!! ");
let datoApellido = prompt("Ingrese su apellido");
while (datoApellido === ""){
    alert("Apellido requerido!")
  datoApellido = prompt("Ingrese su apellido");
}
    alert("Bien!!")
    alert(`¡Hola ${datoNombre} ${datoApellido}!`)
    alert("Bienvendio a mi tienda online!!") 
    alert("Tenemos los siguintes productos..");
const calsaNegra = {
        precio: 5000,
        stock:10,
        talle:"XL L M S"
    }
const buzoRustico ={
        precio: 8000,
        stock:10,
        talle:"XL L M"
    }
const conjuntoDeportivo ={
        precio:10000,
        stock:5,
        talle:"XL L M S"
    }
const camisaUno ={
        precio:7000,
        stock:10,
        talle:"XL L M S"
    }
    alert(`Calsa Negra: $${calsaNegra.precio}`);
    alert(`Buzo: $${buzoRustico.precio}`);
    alert(`Conjunto Deportivo: $${conjuntoDeportivo.precio}`);
    alert(`Camisa: $${camisaUno.precio}`);
    alert("Tenemos en stock..");
    alert(`Calsa Negra: ${calsaNegra.stock} unidades`);
    alert(`Buzo: ${buzoRustico.stock} unidades`);
    alert(`Conjunto Deportivo: ${conjuntoDeportivo.stock} unidades`);
    alert(`Camisa: ${camisaUno.stock} unidades`);
    alert("Estan los siguientes talles..");
    alert(`Calsa Negra: ${calsaNegra.talle}`);
    alert(`Buzo: ${buzoRustico.talle}`);
    alert(`Conjunto Deportivo: ${conjuntoDeportivo.talle}`);
    alert(`Camisa: ${camisaUno.talle}`);
const productosStock = [
        {id: 1, nombre: "Calsa Negra", precio: 5000},
        {id: 2, nombre: "Buzo", precio: 8000},
        {id: 3, nombre: "Conjunto Deportivo", precio: 10000},
        {id: 4, nombre: "Camisa", precio: 7000},
    ] 
let productoInfo = prompt("Ingrese el nombre del producto al consultar");
let indumentaria;
    for (const ropa of productosStock){
        if (ropa.nombre === productoInfo){
        indumentaria = ropa;
    }
}
    if (indumentaria){
let mensaje =`
    ID: ${indumentaria.id}
    Nombre: ${indumentaria.nombre}
    $${indumentaria.precio}`;
    alert(mensaje);
} else {
    alert("El nombre del producto no se encuentra en la lista")
    alert("Tenemos los siguintes productos..");
    alert(`Calsa Negra: $${calsaNegra.precio}`);
    alert(`Buzo: $${buzoRustico.precio}`);
    alert(`Conjunto Deportivo: $${conjuntoDeportivo.precio}`);
    alert(`Camisa: $${camisaUno.precio}`);
}
    alert("ingrese el precio del producto")
let precioElegido = parseFloat(prompt("Ingrese el precio del producto"));
let cantidadProductos = parseFloat(prompt("Ingrese la cantidad"));
let descuentoPrincipal = 0.20;
const calculoUno = (a,b) => a * b ;
const calculoDos = (a,b) => a - b ;
let resultadoMultiplicacion = calculoUno (precioElegido,cantidadProductos );
let resultadoDescuento = calculoUno (resultadoMultiplicacion,descuentoPrincipal);
let resultadoFinal = calculoDos (resultadoMultiplicacion,resultadoDescuento)
    alert(`Su total a pagar es:$${resultadoMultiplicacion}`);
    alert("tenemos un descuento del 20%");
    alert(`Su total a pagar con el descuento es:$${resultadoFinal}`);
    alert("¡Gracias por su compra!")