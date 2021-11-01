import { autos } from "./autoClass.js";
import { 
    validacionTexto,
    validacionCodigo,
    validacionFormulario,
    validacionUrlImagen,
} from "./validaciones.js";

// se agregan variales
let marca = document.querySelector('#marca');
let modelo = document.querySelector('#modelo');
let codigo = document.querySelector('#codigo');
let descripcion = document.querySelector('#descripcion');
let imagenUrl = document.querySelector('#imagenUrl');
let formulario = document.querySelector('#formulario');
let arregloAutos= [];

marca.addEventListener('blur', () => {
    validacionTexto(marca);
})
modelo.addEventListener('blur', () =>{
    validacionTexto(modelo);
})
codigo.addEventListener('blur', () =>{
    validacionCodigo(codigo);
})
descripcion.addEventListener('blur', () =>{
    validacionTexto(descripcion);
})
imagenUrl.addEventListener('blur', () =>{
    validacionUrlImagen(imagenUrl);
})
formulario.addEventListener("submit", );//colocar despues de la "coma" el nombre de la funcion que guardara el producto

function borrarFilasAutos () {
    let tabla = document.querySelector("#tablaProducto");
    tabla.innerHTML = "";
};
  
  window.eliminarAutos = (codigo) => {
    Swal.fire({
      title: "¿Esta seguro que desea eliminar este producto?",
      text: "Una vez eliminado el producto no se puede volver a recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar producto",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        
        let filtrarAutos = listaAutos.filter((itemAutos) => {
          return itemAutos.codigo != codigo;
        });
  
        console.log(filtrarAutos);
        
        listaAutos = filtrarAutos;
        
        localStorage.setItem("arregloAutos", JSON.stringify(listaAutos));
        
        borrarFilas();
        listaAutos.forEach((itemAutos) => {
          crearFilas(itemAutos);
        });
        Swal.fire(
          "Producto eliminado",
          "El producto se elimino correctamente",
          "success"
        );
      }
    });
  };