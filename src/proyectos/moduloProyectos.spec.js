import datosFormulariosSonValidos from "./moduloProyectos";

describe("formularioProyectos", () => {
  it("Deberia ver  el mensaje Llene todos los campos si no se lleno el campo de titulo", () => {
    expect(datosFormulariosSonValidos("","descripcion1")).toEqual("Llene todos los campos");
  });
  it("Deberia ver  el mensaje Llene todos los campos si no se lleno el campo de descripcion", () => {
    expect(datosFormulariosSonValidos("titulo1","")).toEqual("Llene todos los campos");
  });
});
