document
  .getElementById("calendario-icon")
  .addEventListener("click", function () {
    let inputData = document.getElementById("calendario-input");
    inputData.showPicker(); // Exibe o calendário nativo do navegador
  });
