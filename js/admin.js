import { autos } from "./autoClass.js";

// se agregan variales
let  marca = getElementById("#marca") ;
let modelo = getElementById("#modelo");
let codigo = getElementById("#codigo");
let descripcion = getElementById("#descripcion");
let imagen = getElementById("#imagenUrl");
let formulario = getElementById("#formularioAutos");
let arregloAutos= [];


function agregarAuto(){
    // se agrega un nuevo vehiculo
    let autoNuevo = new autos (
        marca.value,
        modelo.value,
        codigo.value,
        descripcion.value,
        imagen.value,
 );
    console.log(autoNuevo);
    //agregar datos del auto al arreglo
    arregloAutos.push(autoNuevo);
    console.log(arregloAutos);
    //guardar datos en el localStorage
    localStorage.setItem("", JSON.stringify(arregloAutos));
    // se debe limpiar el formulario
    limpiarFormulario();
    // se debe cargar los datos en la tabla

    // mostar mensaje al usuario, indicando que se agregó correcctamente

};

function limpiarFormulario(){
    formulario.reset();
    marca.className = "form-control";
    modelo.className = "form-control";
    codigo.className ="form-control";
    descripcion.className = "form-control";
    imagen.className = "form-control";
    

}

