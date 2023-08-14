const { ipcRenderer } = require("electron");

function optionss() {
  document.getElementById("openOptions").addEventListener("click", () => {
    ipcRenderer.send("open-options");
  });
}
