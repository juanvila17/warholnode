const listaDeBuzos = [
  {
    id: 1,
    nombre: "Buzo Warhol blanco",
    precio: 1190,
    imagen: "/Imagenes/Prendas/Buzos/BUZO-GOTICO-BLANCO.jpg",
  },

  {
    id: 2,
    nombre: "Buzo Warhol Negro",
    precio: 1190,
    imagen: "/Imagenes/Prendas/Buzos/BUZO-GOTICO-NEGRO.jpg",
  },

  {
    id: 3,
    nombre: "Buzo AKWarhol blanco",
    precio: 1190,
    imagen: "/Imagenes/Prendas/Buzos/BUZO-AKWARHOL-BLANCO.jpg",
  },

  {
    id: 4,
    nombre: "Buzo AKWarhol Negro",
    precio: 1190,
    imagen: "/Imagenes/Prendas/Buzos/BUZO-AKWARHOL-NEGRO.jpg",
  },
];

const listaDeRemeras = [
  {
    id: 1,
    nombre: "Remera Warhol Blanca",
    precio: 790,
    imagen: "",
  },
  {
    id: 2,
    nombre: "Remera Warhol Negra",
    precio: 790,
    imagen: "",
  },
  {
    id: 3,
    nombre: "Remera Warhol Gotica Blanca",
    precio: 790,
    imagen: "",
  },
  {
    id: 4,
    nombre: "Remera AKWarhol Blanca",
    precio: 790,
    imagen: "",
  },
  {
    id: 5,
    nombre: "Remera AKWarhol Negra",
    precio: 790,
    imagen: "",
  },
];

const listaDeGorros = [
  {
    id: 1,
    nombre: "Gorro AK-Warhol Gris",
    precio: 420,
    imagen: "",
  },
  {
    id: 2,
    nombre: "Gorro AK-Warhol Negro",
    precio: 420,
    imagen: "",
  },
];

const listaDeGorras = [
  {
    id: 1,
    nombre: "Gorra Warhol Amarillo",
    precio: 550,
    imagen: "/Imagenes/Prendas/Gorras/Gorra-Warhol-Amarillo.jpg",
  },
  {
    id: 2,
    nombre: "Gorra Warhol Azul y Rojo",
    precio: 550,
    imagen: "/Imagenes/Prendas/Gorras/Gorra-Warhol-Azul-y-Rojo.jpg",
  },
  {
    id: 3,
    nombre: "Gorra Warhol Blanco",
    precio: 550,
    imagen: "/Imagenes/Prendas/Gorras/Gorra-Warhol-Blanco.jpg",
  },
  {
    id: 4,
    nombre: "Gorra Warhol Rojo y Naranja",
    precio: 550,
    imagen: "/Imagenes/Prendas/Gorras/Gorra-WRHL-Rojo-Naranja.jpg",
  },
  {
    id: 5,
    nombre: "Gorra Warhol Rosa",
    precio: 550,
    imagen: "/Imagenes/Prendas/Gorras/Gorra-WRHL-rosa.jpg",
  },
  {
    id: 6,
    nombre: "Gorra W Blanco",
    precio: 550,
    imagen: "/Imagenes/Prendas/Gorras/Gorra-W-Blanca.jpg",
  },
];

function crearTarjetaBuzo(buzo) {
  const contenedorDiv = document.createElement("div");
  const imagenImg = document.createElement("img");
  const nombreH4 = document.createElement("h4");
  const precioH5 = document.createElement("h5");

  imagenImg.src = buzo.imagen;
  nombreH4.textContent = buzo.nombre;
  precioH5.textContent = "$" + buzo.precio;

  imagenImg.classList.add("img-tarjeta");
  contenedorDiv.classList.add("wrhl-tarjeta");

  contenedorDiv.appendChild(imagenImg);
  contenedorDiv.appendChild(nombreH4);
  contenedorDiv.appendChild(precioH5);

  const miDiv = document.getElementById("catalogo-buzos");

  miDiv.appendChild(contenedorDiv);
}

listaDeBuzos.map(function (buzoDeLaLista) {
  crearTarjetaBuzo(buzoDeLaLista);
});

function crearTarjetaRemera(remera) {
  const contenedorDiv = document.createElement("div");
  const imagenImg = document.createElement("img");
  const nombreH4 = document.createElement("h4");
  const precioH5 = document.createElement("h5");

  imagenImg.src = remera.imagen;
  nombreH4.textContent = remera.nombre;
  precioH5.textContent = "$" + remera.precio;

  imagenImg.classList.add("img-tarjeta");
  contenedorDiv.classList.add("wrhl-tarjeta");

  contenedorDiv.appendChild(imagenImg);
  contenedorDiv.appendChild(nombreH4);
  contenedorDiv.appendChild(precioH5);

  const miDiv = document.getElementById("catalogo-remeras");

  miDiv.appendChild(contenedorDiv);
}

listaDeRemeras.map(function (remeraDeLaLista) {
  crearTarjetaRemera(remeraDeLaLista);
});

function crearTarjetaGorro(gorro) {
  const contenedorDiv = document.createElement("div");
  const imagenImg = document.createElement("img");
  const nombreH4 = document.createElement("h4");
  const precioH5 = document.createElement("h5");

  imagenImg.src = gorro.imagen;
  nombreH4.textContent = gorro.nombre;
  precioH5.textContent = "$" + gorro.precio;

  imagenImg.classList.add("img-tarjeta");
  contenedorDiv.classList.add("wrhl-tarjeta");

  contenedorDiv.appendChild(imagenImg);
  contenedorDiv.appendChild(nombreH4);
  contenedorDiv.appendChild(precioH5);

  const miDiv = document.getElementById("catalogo-gorros");

  miDiv.appendChild(contenedorDiv);
}

listaDeGorros.map(function (gorroDeLaLista) {
  crearTarjetaGorro(gorroDeLaLista);
});

function crearTarjetaGorra(gorra) {
  const contenedorDiv = document.createElement("div");
  const imagenImg = document.createElement("img");
  const nombreH4 = document.createElement("h4");
  const precioH5 = document.createElement("h5");

  imagenImg.src = gorra.imagen;
  nombreH4.textContent = gorra.nombre;
  precioH5.textContent = "$" + gorra.precio;

  imagenImg.classList.add("img-tarjeta");
  contenedorDiv.classList.add("wrhl-tarjeta");

  contenedorDiv.appendChild(imagenImg);
  contenedorDiv.appendChild(nombreH4);
  contenedorDiv.appendChild(precioH5);

  const miDiv = document.getElementById("catalogo-gorras");

  miDiv.appendChild(contenedorDiv);
}

listaDeGorras.map(function (gorraDeLaLista) {
  crearTarjetaGorra(gorraDeLaLista);
});
