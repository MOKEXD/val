const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");
const mensaje = document.getElementById("mensaje");
const area = document.querySelector(".area");


function moverNo() {
    const ancho = area.clientWidth - botonNo.offsetWidth;
    const alto = area.clientHeight - botonNo.offsetHeight;

    const x = Math.random() * ancho;
    const y = Math.random() * alto;

    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";

    mensaje.innerHTML = "Aqui te quedas hasta que me disculpes";
}

botonNo.addEventListener("touchstart", moverNo);
botonNo.addEventListener("mouseover", moverNo);

// Ir a la segunda página
botonSi.addEventListener("click", function() {
    window.location.href = "./html/x.html";
});
