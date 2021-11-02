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

function crearColumna(itemAuto) {
  let cardAutos = document.querySelector("#cardAutos");
  cardAutos.innerHTML += `<div class="col-sm-12 col-md-4 col-lg-3 mb-3">
    <div class="card">
        <img src="${itemAuto.imagenUrl}" class="card-img-top" alt="${itemAuto.marca}">
        <div class="card-body">
          <h5 class="card-title">${itemAuto.modelo}</h5>
          <p class="card-text">${itemAuto.descripcion}</p>
        </div>
      </div>
    </div>`;
};