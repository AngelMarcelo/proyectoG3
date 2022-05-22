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



export function validacionFormulario() {
  if (
    validacionTexto(marca) &&
    validacionTexto(modelo) &&
    validacionCodigo(codigo) &&
    validacionTexto(descripcion)
  ) {
    alerta.className = 'alert alert-danger mt-4 d-none';
    return true;
  } else {
    alerta.className = 'alert alert-danger mt-4';
    return false;
  }
}

