document
  .getElementById("calendario-icon")
  .addEventListener("click", abrirCalendario(), function (event) {
    let inputData = document.getElementById("calendario-input");
    inputData.showPicker(event); // Exibe o calendário nativo do navegador
  });
