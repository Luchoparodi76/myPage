// script.js

function ampliarImagen(elemento) {
  // Crear un elemento div para mostrar la imagen ampliada
  var overlay = document.createElement("div");
  overlay.classList.add("overlay");

  // Crear la imagen ampliada
  var imagenAmpliada = document.createElement("img");
  imagenAmpliada.src = elemento.src;
  imagenAmpliada.alt = elemento.alt;

  // Agregar la imagen ampliada al overlay
  overlay.appendChild(imagenAmpliada);

  // Agregar el overlay al cuerpo del documento
  document.body.appendChild(overlay);

  // Permitir cerrar el overlay al hacer clic fuera de la imagen
  overlay.addEventListener("click", function () {
    document.body.removeChild(overlay);
  });
}
