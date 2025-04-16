import tratarImc from './scripts.js';

function calcularImc(peso, altura) {
  const imc = peso / (altura * altura);
  return tratarImc(imc);
}


export default calcularImc;
