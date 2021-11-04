let email = document.getElementById('email');
let contrasena = document.getElementById('contrasena');
let btnIngresar = document.getElementById('ingresar');
const error = 'error404.html';



email.addEventListener('blur', () =>{validacionEmail(email)});
contrasena.addEventListener('blur', ()=> {validacionContrasena(contrasena)});
btnIngresar.addEventListener('click', validacionLogin);

function validacionEmail (input){
    // expresion regular
    let email = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    if(email.test(input.value)){
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }; 
  
  function validacionContrasena(input){
    // expresion regular
    let contrasena = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    // Entre 8 y 10 caracteres, por lo menos un digito y un alfanumérico, y no puede contener caracteres espaciales
    if(input.value.trim() != ''){
      input.className = "form-control is valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  };
  
  function validacionLogin (){
  
    if(validacionEmail(email) && validacionContrasena(contrasena)){
    // aquí debe ingresar a la web
    return res.redirect('/error404.html');
    }else{
    // no deberia hacer nada
    console.log("no debería hacer nada")
   }
  };