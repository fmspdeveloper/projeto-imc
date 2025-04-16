# Calculadora de IMC

[![JavaScript](https://img.shields.io/badge/JavaScript-Node.js-yellow?logo=javascript)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

Um programa em JavaScript que calcula o Índice de Massa Corporal (IMC) e
classifica o resultado de acordo com os padrões da Organização Mundial da
Saúde (OMS).

## 📌 Funcionalidades

- 🧮 Cálculo preciso do IMC
- 📈 Classificação automática do resultado
- ✅ Validação de entradas numéricas
- 🔢 Formatação com 2 casas decimais
- 💬 Feedback nutricional personalizado

## 🚀 Como Usar

```bash

node main.js
Siga as instruções:

Digite seu peso em quilogramas (ex: 70)

Digite sua altura em metros (ex: 1.75)
```

## 📋 Estrutura do Projeto

```bash
calculadora-imc/
├── main.js          # Interface do usuário e lógica de classificação
├── function.js      # Cálculo do IMC
├── scripts.js       # Formatação do resultado
├── package.json     # Configuração do projeto
└── README.md        # Este arquivo
```

## 📊 Classificação do IMC

O programa classifica o resultado de acordo com a tabela da OMS:

```bash
IMC	Classificação
Abaixo de 18.5	Abaixo do peso
18.5 - 24.9	Peso ideal
25 - 29.9	Sobrepeso
30 - 34.9	Obesidade grau 1
35 - 39.9	Obesidade grau 2
Acima de 40	Obesidade grau 3
```

## 🛠️ Validações Implementadas
Verifica se os valores são números válidos

Garante que peso e altura sejam maiores que zero

Previne erros de entrada inválida

Formata o resultado corretamente

## 💡 Exemplo de Uso

```bash

$ node main.js
Qual seu peso? (kg) 70
Qual sua altura? (metros) 1.75
Seu IMC é 22.86
Você está no peso ideal
```

## 🤝 Como Contribuir
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/nova-feature)

Commit suas mudanças (git commit -m 'Adiciona nova feature')

Push para a branch (git push origin feature/nova-feature)

Abra um Pull Request

### Desenvolvido com ❤️ por FM Developer - https://github.com/fmspdeveloper
