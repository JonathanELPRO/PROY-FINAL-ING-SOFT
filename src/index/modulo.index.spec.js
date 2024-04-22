// Importar la función que se va a probar
import {crearProyecto,agregarProyectoAProyectos,mostrarProyectos} from "./moduloIndex.js"
import Proyecto from "./Proyecto.js";


describe("crearProyecto", () => {
  it("Si no se capturo bien el titulo en el formulario deberia obtener un null en crear proyecto", () => {
    expect(crearProyecto(null,"descrip")).toEqual(null)
  });
  it("Si no se capturo bien la descripcion en el formulario deberia obtener un null en crear proyecto", () => {
    expect(crearProyecto("titulo",null)).toEqual(null)
  });
  it("Si se capturaron bien todos los datos, debería crear un nuevo objeto Proyecto con el título y la descripción proporcionados", () => {
    const titulo = "Título del proyecto";
    const descripcion = "Descripción del proyecto";
    const proyecto = crearProyecto(titulo, descripcion);
    expect(proyecto).toBeInstanceOf(Proyecto);
    expect(proyecto.titulo).toBe(titulo);
    expect(proyecto.descripcion).toBe(descripcion);
  });
  it("Si el proyecto que se trata de anadir a los proyectos es null deberia ver el mensaje", () => {
    expect(agregarProyectoAProyectos(null)).toEqual("No se puede agregar a proyectos algo no existente")
  });
  it("Si el proyecto que se trata de anadir a los proyectos no es null deberia ver el mensaje", () => {
    expect(agregarProyectoAProyectos(new Proyecto('titulo','descripcion'))).toEqual("Se agrego el proyecto con exito")
  });
  it("Se deberia mostrar el mensaje No tiene ningún proyecto creado si efectivamente no se tiene ninguno", () => {
    expect(mostrarProyectos([])).toEqual("No tiene ningún proyecto creado")
  });
  it("Se deberia mostrar el mensaje Se mostro los proyectos de forma correcta si efectivamente se tienen proyectos", () => {
    expect(mostrarProyectos([{titulo: "Mi proyecto",descripcion: "Descripción de mi proyecto"}])).toEqual("Se mostro los proyectos de forma correcta")
  });

});