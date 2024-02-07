let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, ...resto] = numeros;
console.log(um, tres);
console.log(resto);

const numerosEmArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [ , [ , , seis]] = numerosEmArray;

console.log(seis)