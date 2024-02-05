const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso').value;
  const inputAltura = e.target.querySelector('#altura').value;

  const peso = Number(inputPeso);
  const altura = Number(inputAltura);
  if(!peso) {
    setResultado('Peso inválido', false);
    return;
  }
  if(!altura){
    setResultado('Altura invádia', false);
    return;
  }

  let imc = calcularImc(peso, altura);
  const mensagem = validarResultadoDoImc(imc);
  setResultado(mensagem, true);
});

function setResultado(mensagem, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  const paragrafo = document.createElement('p');
  paragrafo.innerHTML = mensagem;

  if(isValid) {
    paragrafo.classList.add('resultado-valido');
  } else {
    paragrafo.classList.add('resultado-invalido');
  }
  resultado.appendChild(paragrafo);
}

function calcularImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validarResultadoDoImc(imc) {
  if(imc >= 40) return `Seu imc é ${imc}, obesidade grau 3`
  if(imc > 35) return `Seu imc é ${imc}, obesidade grau 2`
  if(imc > 30) return `Seu imc é ${imc}, obesidade grau 1`
  if(imc > 25) return `Seu imc é ${imc}, sobrepeso`
  if(imc > 18.5) return `Seu imc é ${imc}, peso normal`
  if(imc < 18.5) return `Seu imc é ${imc}, abaixo do peso`
}