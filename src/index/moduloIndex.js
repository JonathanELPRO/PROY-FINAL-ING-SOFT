import Proyecto from "./Proyecto.js";
function crearProyecto(titulo, descripcion) {
    if (titulo==null)
    {
        return null
    }
    else if (descripcion==null)
    {
        return null
    }
    else if (descripcion!=null){
        let nuevoProyecto = new Proyecto(titulo, descripcion);
        return nuevoProyecto
    }
}

function agregarProyectoAProyectos(proyecto)
{
    if(proyecto==null)
    {
        return "No se puede agregar a proyectos algo no existente"
    }
    else if(proyecto!=null){
        let proyectos = JSON.parse(sessionStorage.getItem("proyectos")) || [];
        proyectos.push(proyecto);
        sessionStorage.setItem("proyectos", JSON.stringify(proyectos));
        return "Se agrego el proyecto con exito"
    }
    
}

function mostrarProyectos(proyectos) {
    if (proyectos.length === 0) {
        return "No tiene ningún proyecto creado";
    } else if (proyectos.length >= 0){
        const proyectosContainer = document.createElement("div");
        proyectos.forEach(proyecto => {
          const proyectoElement = document.createElement("div");
          proyectoElement.innerHTML = `<h2>${proyecto.titulo}</h2><p>${proyecto.descripcion}</p>`;
          proyectosContainer.appendChild(proyectoElement);
        });
        document.body.appendChild(proyectosContainer);
        return "Se mostro los proyectos de forma correcta"
    }
}

export {crearProyecto,agregarProyectoAProyectos,mostrarProyectos}