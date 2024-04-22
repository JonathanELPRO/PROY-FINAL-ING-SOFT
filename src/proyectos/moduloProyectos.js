function datosFormulariosSonValidos(titulo, descripcion) {
  const div = document.querySelector("#resultado-div");
  if (titulo == "" && descripcion == "") {
      div.innerHTML = "<p>" + "Llene todos los campos" + "</p>";
      return div.textContent;
} else if (titulo == "") {
      div.innerHTML = "<p>" + "Llene todos los campos" + "</p>";
      return div.textContent;
} else if (descripcion == "") {
      div.innerHTML = "<p>" + "Llene todos los campos" + "</p>";
      return div.textContent;
} else {
    sessionStorage.setItem("titulo", titulo);
    sessionStorage.setItem("descripcion", descripcion);
    const objetoRetorno = {
        titulo: sessionStorage.getItem("titulo"),
        descripcion: sessionStorage.getItem("descripcion")
    };
    return objetoRetorno;
}
    
}

export default datosFormulariosSonValidos;
