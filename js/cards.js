let arregloAutos = [];

cargarInicial();

function cargarInicial() {

  arregloAutos = JSON.parse(localStorage.getItem("listaArregloAutos")) || [];

  if (arregloAutos.length > 0){
      arregloAutos.forEach(itemAutos => {
      crearColumna(itemAutos);
    });
  }
};

function crearColumna(automovil) {
  let cardAuto = document.querySelector("#cardAuto");
  cardAuto.innerHTML += `<div class="col-sm-12 col-md-4 col-lg-3 mb-3">
    <div class="card">
        <img src="${automovil.imagenUrl}" class="card-img-top" alt="${automovil.marca}">
        <div class="card-body">
          <h5 class="card-title">${automovil.modelo}</h5>
          <p class="card-text">${automovil.descripcion}</p>
        </div>
      </div>
    </div>`;
};