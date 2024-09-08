document.addEventListener("DOMContentLoaded", () => {
  const state = stateManager.getState();

  if (state) {
    // Mostrar o loading
    document.getElementById("loading").style.display = "flex";

    console.log(state);
    fetch(
      `https://api-aneel-reclamacoes.vercel.app/api/concessionarias/uf/${state}`
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.SigUF === state);
        generateCharts(filteredData);
        // Ocultar o loading após os gráficos serem gerados
        document.getElementById("loading").style.display = "none";
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        // Ocultar o loading em caso de erro
        document.getElementById("loading").style.display = "none";
      });
  }

  function generateCharts(data) {
    const labels = data.map((item) => item.NomMunicipio);
    const receivedData = data.map((item) =>
      parseInt(item.QtdReclamacoesRecebidas)
    );
    const procedentData = data.map((item) =>
      parseInt(item.QtdReclamacoesProcedentes)
    );

    // Gráfico de Barras
    const ctxBar = document.getElementById("barChart").getContext("2d");
    new Chart(ctxBar, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Reclamações Recebidas",
            data: receivedData,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
          {
            label: "Reclamações Procedentes",
            data: procedentData,
            backgroundColor: "rgba(153, 102, 255, 0.6)",
          },
        ],
      },
    });

    // Gráfico de Pizza
    const ctxPie = document.getElementById("pieChart").getContext("2d");
    new Chart(ctxPie, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Reclamações Recebidas",
            data: receivedData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
          },
        ],
      },
    });

    // Gráfico de Rosquinha
    const ctxDoughnut = document
      .getElementById("doughnutChart")
      .getContext("2d");
    new Chart(ctxDoughnut, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Reclamações Procedentes",
            data: procedentData,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
          },
        ],
      },
    });

    // Gráfico de Linha
    const ctxLine = document.getElementById("lineChart").getContext("2d");
    new Chart(ctxLine, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Tendência de Reclamações Recebidas",
            data: receivedData,
            borderColor: "rgba(75, 192, 192, 1)",
            fill: false,
          },
          {
            label: "Tendência de Reclamações Procedentes",
            data: procedentData,
            borderColor: "rgba(153, 102, 255, 1)",
            fill: false,
          },
        ],
      },
    });
  }
});
