document.addEventListener("DOMContentLoaded", () => {
  const state = stateManager.getState(); // Agora pode acessar o stateManager

  if (state) {
    console.log(state);

    // Exibe o loading
    const loadingElement = document.getElementById("loading");
    const tableElement = document.getElementById("dataTable");
    loadingElement.style.display = "block";
    tableElement.style.display = "none";

    // Busca os dados
    fetch(
      `https://api-aneel-reclamacoes.vercel.app/api/concessionarias/uf/${state}`
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.SigUF === state);
        populateTable(filteredData);

        // Esconde o loading e mostra a tabela
        loadingElement.style.display = "none";
        tableElement.style.display = "table";
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        loadingElement.style.display = "none";
      });
  } else {
    console.error("Nenhum estado foi selecionado.");
  }
});

function populateTable(data) {
  const tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = "";

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.SigAgente}</td>
            <td>${item.NomMunicipio}</td>
            <td>${item.DescReclamacao}</td>
            <td>${item.QtdReclamacoesProcedentes}</td>
            <td>${item.NumPrazoMedioSolucao}</td>
        `;
    tableBody.appendChild(row);
  });
}
