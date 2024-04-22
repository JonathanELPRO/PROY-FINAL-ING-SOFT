import datosFormulariosSonValidos from "./moduloProyectos";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const proyectosForm = document.querySelector("#proyectos-form");
const botonRegresar = document.querySelector("#boton-regresar");

proyectosForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const contenidoTitulo = titulo.value;
  const contenidoDescripcion = descripcion.value;
  if(typeof(datosFormulariosSonValidos(contenidoTitulo, contenidoDescripcion))=='object')
  {
      window.location.href = "index.html";
  }
  
});
botonRegresar.addEventListener("click", function() {
  window.location.href = "index.html"; 
});