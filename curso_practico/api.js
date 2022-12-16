/*const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Este es un titulo <br> partido en dos";
console.log(h1.getAttribute("class"));
h1.setAttribute("class", "rojo");

h1.classList.add("rojo");
h1.classList.remove("verde");

input.value = 456;

const img = document.createElement("img");
img.setAttribute("src", "https://lh3.googleusercontent.com/ogw/AOh-ky29tMrmO5JS5xmVT1wzR8oabUlvadUPK30efWejcA=s32-c-mo");
console.log(img);

pid.append(img);*/

const h1 = document.querySelector("h1");
const calculo1 = document.querySelector("#calculo1");
const calculo2 = document.querySelector("#calculo2");
const btnCalcular = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const form= document.querySelector("#formulario");
let num1 = 0;
let num2 = 0;

form.addEventListener("submit", sumar);

function sumar(event){
    event.preventDefault();
    num1 = Number(calculo1.value);
    num2 = Number(calculo2.value);
    console.log(num1 + num2);
    pResult.innerHTML = "Resultado: " + (num1 + num2);
}