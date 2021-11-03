export function validacionTexto(input) {
  if (input.value.trim().length > 0) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validacionCodigo(input) {
  let codigoUnico = /^[1-9]{3}$/;
  if (codigoUnico.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validacionUrlImagen(input) {
  let imagenUrl = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  
  if (input.value.trim() != '' && imagenUrl.test(input.value.trim())) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validacionFormulario() {
  if (
    validacionTexto(marca) &&
    validacionTexto(modelo) &&
    validacionCodigo(codigo) &&
    validacionTexto(descripcion) &&
    validacionUrlImagen(imagenUrl)
  ) {
    alerta.className = 'alert alert-danger mt-4 d-none';
    return true;
  } else {
    alerta.className = 'alert alert-danger mt-4';
    return false;
  }
}

function validacionEmail (email){
  // expresion regular
  let email = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
  if(email.test(email.value)){
    email.className = "form-control is-valid";
    return true;
  } else {
    email.className = "form-control is-invalid";
    return false;
  }
}; 

function validacionContraseña(input){
  // expresion regular
  let contraseña = ^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$;
  // Entre 8 y 10 caracteres, por lo menos un digito y un alfanumérico, y no puede contener caracteres espaciales
  if(input.value.trim() != ''){
    input.className = "form-control is valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};

function validacionLogin ()