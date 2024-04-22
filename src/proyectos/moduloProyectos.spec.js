import datosFormulariosSonValidos from "./moduloProyectos";
const div = document.createElement("div");
div.id = "resultado-div";
document.body.appendChild(div);

describe("formularioProyectos", () => {
  it("Deberia retornar el mensaje Llene todos los campos si no se lleno ningun campo", () => {
    expect(datosFormulariosSonValidos("","")).toEqual("Llene todos los campos");
  });
  it("Deberia retornar el mensaje Llene todos los campos si no se lleno el campo de titulo", () => {
    expect(datosFormulariosSonValidos("","descripcion1")).toEqual("Llene todos los campos");
  });
  it("Deberia retornar el mensaje Llene todos los campos si no se lleno el campo de descripcion", () => {
    expect(datosFormulariosSonValidos("titulo1","")).toEqual("Llene todos los campos");
  });
  it("Deberia retornar un bjeto javascript con los datos que acabamos de mandar si es que se mandaron bien", () => {
    expect(datosFormulariosSonValidos("titulo","descripcion")).toEqual({titulo: "titulo",descripcion: "descripcion"});
  });
});
