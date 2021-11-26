const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const separa = document.getElementById('Separa');
const fondo = document.getElementById('fondo');

// Escuchamos elemento
separa.addEventListener('input',cambiarColor)
// creamos la funcion 
function cambiarColor(){
    fondo.style.background=`linear-gradient(to right,${color1.value} ${separa.value}%, ${color2.value})`
}