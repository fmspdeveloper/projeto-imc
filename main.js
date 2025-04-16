import calcularImc from "./function.js";
import input from 'readline-sync';

const peso = parseFloat(input.question('Qual seu peso? (kg) '));
const altura = parseFloat(input.question('Qual sua altura? (metros) '));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  console.log('Valores inválidos. Digite números maiores que zero.');
} else {
  const resultado = calcularImc(peso, altura);
  console.log(`Seu IMC é ${resultado}`);
}
