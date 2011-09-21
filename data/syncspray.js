function startBrowsing() {
  let url = document.getElementById("browseURL").value;
  self.port.emit("startBrowsing", url);
}

document.getElementById("browseStart").onclick = startBrowsing;
