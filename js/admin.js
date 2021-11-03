import { autos } from "./autoClass.js";
import {
  validacionTexto,
  validacionCodigo,
  validacionFormulario,
  validacionUrlImagen,
} from "./validaciones.js";

// se agregan variales
let marca = document.querySelector("#marca");
let modelo = document.querySelector("#modelo");
let codigo = document.querySelector("#codigo");
let descripcion = document.querySelector("#descripcion");
let imagenUrl = document.querySelector("#imagenUrl");
let formulario = document.querySelector("#formulario");
let arregloAutos = [];
let editarAuto = false;
let btnAgregarAuto = document.querySelector("#btnAgregarAuto");

cargarInicial();

marca.addEventListener('blur', () => {
  validacionTexto(marca);
})
modelo.addEventListener('blur', () => {
  validacionTexto(modelo);
})
codigo.addEventListener('blur', () => {
  validacionCodigo(codigo);
})
descripcion.addEventListener('blur', () => {
  validacionTexto(descripcion);
})
imagenUrl.addEventListener('blur', () => {
  validacionUrlImagen(imagenUrl);
})
formulario.addEventListener("submit", guardarAuto);
btnAgregarAuto.addEventListener("click", limpiarFormulario);


function guardarAuto(e) {
  e.preventDefault();
  // se verifica que pase las validaciones de los imputs
  if (validacionFormulario()) {
    // se pregunta el estado de variable editarAuto
    // aun se desconoc el nombre correcto de la funcion
    if (editarAuto === false) {
      // crear el producto
      console.log("crear el producto");
      agregarAuto();
    } else {
      // modificar el auto
      console.log("aqui puedo modificar el auto");
      // aqui falta funcion actualizar producto!!
      actualizarAuto();
    }
  } else {
    // no debe realizar nada
    console.log("no deberia pasar nada")
  }

};


function agregarAuto() {
  // se agrega un nuevo vehiculo
  let autoNuevo = new autos(
    marca.value,
    modelo.value,
    codigo.value,
    descripcion.value,
    imagenUrl.value
  );
  //agregar datos del auto al arreglo
  arregloAutos.push(autoNuevo);
  console.log(arregloAutos);
  //guardar datos en el localStorage
  localStorage.setItem("listaArregloAutos", JSON.stringify(arregloAutos));
  // se debe limpiar el formulario
  limpiarFormulario();
  // se debe cargar los datos en la tabla
  crearFilasTabla(autoNuevo);
  // mostar mensaje al usuario, indicando que se agregó correcctamente
  Swal.fire("Auto cargado!", "El auto fue cargado con exito", "success"
  );
};

function limpiarFormulario() {
  formulario.reset();
  marca.className = "form-control";
  modelo.className = "form-control";
  codigo.className = "form-control";
  descripcion.className = "form-control";
  imagenUrl.className = "form-control";
  // a continuacion se necesita la funcion editar
  editarAuto = false;
};

function cargarInicial() {
  // traer los productos del localstorage si existieran sino dejar el arreglo vacio.
  arregloAutos = JSON.parse(localStorage.getItem("listaArregloAutos")) || [];
  // si hay productos dentro del arreglo entonces los muestro en la tabla
  arregloAutos.forEach((itemAuto) => {
    // codigo que se ejecuta por cada el elemento del arreglo
    crearFilasTabla(itemAuto);
  });
}


function crearFilasTabla(itemAuto) {
  let tabla = document.querySelector("#tablaAuto");
  console.log(itemAuto);
  tabla.innerHTML += `<tr>
         <th scope="row">${itemAuto.marca}</th>
         <td>${itemAuto.modelo}</td>
         <td>${itemAuto.codigo}</td>
         <td>${itemAuto.descripcion}</td>
          <td>${itemAuto.imagenUrl}</td>
          <td>
           <button class="btn btn-secondary mb-2" onclick="prepararEdicion('${itemAuto.codigo}')">Editar</button>
            <button class="btn btn-danger" onclick="eliminarAutos('${itemAuto.codigo}')" >Borrar</button>
          </td>     
    </tr>`;
};
window.prepararEdicion = (codigoAuto) => {
  console.log(codigoAuto);
  // buscar el objeto
  let autoBuscado = arregloAutos.find((itemAuto) => {
    return itemAuto.codigo == codigoAuto;
  });
  console.log(autoBuscado);
  // mostrarlo en el formulario
  marca.value = autoBuscado.marca;
  modelo.value = autoBuscado.modelo;
  codigo.value = autoBuscado.codigo;
  descripcion.value = autoBuscado.descripcion;
  imagenUrl.value = autoBuscado.imagenUrl;
  // cambio el valor de la variable productoExistente
  editarAuto = true;
};

function actualizarAuto() {
  // buscar la posicion del elemento a editar dentro del arreglo
  let posicionAuto = arregloAutos.findIndex((itemAuto) => {
    return itemAuto.codigo == codigo.value;
  });
  console.log(posicionAuto);
  // modificar los datos de esa posicion del arreglo
  arregloAutos[posicionAuto].marca = marca.value;
  arregloAutos[posicionAuto].modelo = modelo.value;
  arregloAutos[posicionAuto].descripcion = descripcion.value;
  arregloAutos[posicionAuto].imagenUrl = imagenUrl.value;
  // modificar el localstorage
  localStorage.setItem("listaArregloAutos", JSON.stringify(arregloAutos));
  // volver a dibujar la tabla
  borrarFilasAutos();
  arregloAutos.forEach((itemAuto) => {
    crearFilasTabla(itemAuto);
  });
  // limpiar formulario
  limpiarFormulario();
  //  mostrar mensaje al usuario
  Swal.fire(
    "Usted modifico el auto cargado",
    "El auto fue modificado y cargado con exito",
    "success"
  );
}


function borrarFilasAutos() {
  let tabla = document.querySelector("#tablaAuto");
  tabla.innerHTML = "";
};

window.eliminarAutos = (codigo) => {
  Swal.fire({
    title: "¿Esta seguro que desea eliminar el auto?",
    text: "Una vez eliminado no se puede volver a recuperar",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#000",
    cancelButtonColor: "#dc3545",
    confirmButtonText: "Borrar auto",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {

      let filtrarAutos = arregloAutos.filter((itemAutos) => {
        return itemAutos.codigo != codigo;
      });

      arregloAutos = filtrarAutos;

      localStorage.setItem("listaArregloAutos", JSON.stringify(arregloAutos));

      borrarFilasAutos();
      arregloAutos.forEach((itemAutos) => {
        crearFilasTabla(itemAutos);
      });
      Swal.fire(
        "El auto fue eliminado",
        "Se elimino correctamente el auto",
        "success"
      );
    }
  });
};
