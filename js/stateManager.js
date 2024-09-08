// stateManager.js

let stateManager = (function () {
  let globalState = null;

  function setState(value) {
    globalState = value;
    localStorage.setItem("appState", value); // Persistir no localStorage
  }

  function getState() {
    if (!globalState) {
      globalState = localStorage.getItem("appState"); // Recupera do storage
    }
    return globalState;
  }

  return {
    setState: setState,
    getState: getState,
  };
})();
