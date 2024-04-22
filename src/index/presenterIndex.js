import {crearProyecto,agregarProyectoAProyectos,mostrarProyectos} from "./moduloIndex.js"
const botonAgregarProyecto = document.querySelector("#boton-agregar-proyecto");


const titulo = sessionStorage.getItem("titulo");
const descripcion = sessionStorage.getItem("descripcion");
let nuevoProyecto=crearProyecto(titulo, descripcion);
agregarProyectoAProyectos(nuevoProyecto);
let proyectosActualizados = JSON.parse(sessionStorage.getItem("proyectos")) || [];
mostrarProyectos(proyectosActualizados);
sessionStorage.removeItem("titulo");
sessionStorage.removeItem("descripcion");
botonAgregarProyecto.addEventListener("click", function() {
    window.location.href = "proyectos.html"; 
});