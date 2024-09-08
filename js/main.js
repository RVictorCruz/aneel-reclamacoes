function navigateToTable() {
  const state = document.getElementById("stateSelect").value;
  if (state) {
    console.log(state);
    stateManager.setState(state); // Armazena o estado globalmente
    window.location.href = "table.html"; // Redireciona para a página da tabela
  } else {
    alert("Por favor, selecione um estado."); // Alerta caso nenhum estado seja selecionado
  }
}
