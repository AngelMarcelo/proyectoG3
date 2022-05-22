let arregloAutos = [];

cargarInicial();

function cargarInicial() {
  arregloAutos = JSON.parse(localStorage.getItem("listaArregloAutos")) || [];

  if (arregloAutos.length > 0) {
    arregloAutos.forEach((itemAutos) => {
      crearColumna(itemAutos);
    });
  }
}



function crearColumna(itemAuto) {
  let cardAutos = document.querySelector("#cardAutos");
  cardAutos.innerHTML += `<div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">${itemAuto.modelo}</h5>
    <p class="card-text">${itemAuto.descripcion}</p>
    <a href="#" class="btn btn-primary">Ver Mas</a>
  </div>
</div>`}