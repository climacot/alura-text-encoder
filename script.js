var encriptar = document.getElementById("button-left");
var textArea = document.querySelector("textarea");
var bicho = document.getElementById("bicho");

encriptar.onclick = encriptarTexto;
textArea.onchange = noVisible;

function noVisible() {
  var textArea = document.querySelector("textarea");

  if (textArea.value.length > 0) {
    bicho.style.display = "none";
  } else {
    bicho.style.display = "block";
  }
}

function encriptarTexto() {
  alert(textArea.value);
}
