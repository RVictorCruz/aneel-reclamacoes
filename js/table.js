document.addEventListener("DOMContentLoaded", () => {
  const state = stateManager.getState(); // Agora pode acessar o stateManager

  if (state) {
    console.log(state);
    fetch(
      `https://api-aneel-reclamacoes.vercel.app/api/concessionarias/uf/${state}`
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.SigUF === state);
        populateTable(filteredData);
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
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
