import calcularImc from "./function.js";
import input from 'readline-sync';

const peso = parseFloat(input.question('Qual seu peso? (kg) '));
const altura = parseFloat(input.question('Qual sua altura? (metros) '));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  console.log('Valores inválidos. Digite números maiores que zero.');
} else {
  const resultado = calcularImc(peso, altura);
  if (resultado <= 18.5) {
    console.log(`Seu IMC é ${resultado}`);
    console.log('Você está abaixo do peso ideal');

  } else if (resultado > 18.5 && resultado <= 24.9) {
    console.log(`Seu IMC é ${resultado}`);
    console.log('Você está no peso ideal');
  } else if (resultado > 24.9 && resultado <= 29.9) {
    console.log(`Seu IMC é ${resultado}`);
    console.log('Você está com sobrepeso');
  } else if (resultado > 29.9 && resultado <= 34.9) {
    console.log(`Seu IMC é ${resultado}`);
    console.log('Você está com obesidade grau 1');
  } else if (resultado > 34.9 && resultado <= 39.9) {
    console.log(`Seu IMC é ${resultado}`);
    console.log('Você está com obesidade grau 2');
  } else if (resultado > 39.9) {
    console.log(`Seu IMC é ${resultado}`);
    console.log('Você está com obesidade grau 3');
  } else
    console.log("Valores inválidos. Digite números maiores que zero.");
}
