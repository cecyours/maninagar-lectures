

document.getElementById("btnCounter").onclick = function () {
  var counter = parseInt(document.getElementById("counterValue").innerText);
  counter++;
  document.getElementById("counterValue").innerText = counter;
};



document.getElementById("btnResetCounter").onclick = function () {
  document.getElementById("counterValue").innerText = -6;
};
