// formatos suportados:
// -- em branco -> data atual
// (2019, 3, 15) // a, m, d, h, M, s, ms
// string -> '2019-04-20'
const data = new Date('2019-04-20 20:15:59');

console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1); // mes começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0- domingo

console.log(Date.now());

function zeroAEsquerda (num) {
  return num >=10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}/${min}/${seg}`
}

const dataParaFormatar = new Date();
const dataBrasil = formataData(dataParaFormatar);
console.log(dataBrasil);