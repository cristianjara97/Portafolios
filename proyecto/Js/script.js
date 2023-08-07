const botonIzq = document.querySelector(".boton-izq"),
    botonDer= document.querySelector(".boton-der"),
    slider= document.querySelector("#slider"),
    sliderSection= document.querySelectorAll(".slider-section");

botonIzq.addEventListener("click", e => moverIzq())
botonDer.addEventListener("click", e => moverDer())

let contador = 0;

setInterval(()=>{
    moverDer()
},3000
);

function moverDer() {
  if (contador < 66.6) {
    contador = contador + 33.3;
    slider.style.transform = `translate(-${contador}%)`;
  } else {
    contador = 0;
    slider.style.transform = `translate(0%)`;
  }
}


function moverIzq(){ 
    if (contador > 0) {
    contador = contador - 33.3;
    slider.style.transform = `translate(-${contador}%)`;
  } else {
    contador = 0;
    slider.style.transform = `translate(0%)`;
  }
}