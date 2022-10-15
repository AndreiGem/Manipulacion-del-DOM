const h1 = document.querySelector('h1');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const calculo = document.querySelector('.btnCalcular');
const pResult = document.querySelector('.resultado');

function btnOnClick() {
  const sumaInputs = Number(input1.value) + Number(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;

}