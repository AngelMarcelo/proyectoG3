let marca = document.querySelector('#marca');
let modelo = document.querySelector('#modelo');
let codigo = document.querySelector('#codigo');
let descripcion = document.querySelector('#descripcion');
let imagenUrl = document.querySelector('#imagenUrl');
let alerta = document.querySelector('#alerta');
let formulario = document.querySelector('#formulario');



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



function validacionTexto(input){
    if (input.value.trim().length > 0){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

function validacionCodigo(input){
    let codigoUnico = /^[1-9]{3}$/;
    if (codigoUnico.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
      } else {
        input.className = "form-control is-invalid";
        return false;
      }
}

function validacionUrlImagen(input) {
    let urlImagen = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if (input.value.trim().length > 0 && urlImagen.test(input.value.trim())) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }

function validacionFormulario (){
    if (validacionTexto(marca)&&validacionTexto(modelo)&&validacionCodigo(codigo)&&validacionTexto(descripcion)&&validacionUrlImagen(imagenUrl)){
        alerta.className = 'alert alert-danger d-flex align-items-center';

    }else{
        alerta.className = 'alert alert-danger d-flex align-items-center d-none';
    }
}
