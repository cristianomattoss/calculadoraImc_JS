# 🧮 Calculadora de IMC

Uma aplicação web desenvolvida com **HTML, CSS e JavaScript** para calcular o Índice de Massa Corporal (IMC). O projeto realiza a validação dos dados informados, exibe a classificação correspondente e gera dinamicamente a tabela de classificações utilizando JavaScript.

## 🚀 Funcionalidades

- Cálculo do IMC.
- Validação dos dados informados pelo usuário.
- Exibição da classificação de acordo com o resultado.
- Alteração da cor do resultado conforme a classificação.
- Geração dinâmica da tabela de classificações.
- Navegação entre a tela de formulário e a tela de resultado.
- Organização do código utilizando **ES Modules** (`import` e `export`).

## 📸 Preview

![Preview da aplicação](IMG/preview.png)

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## 📂 Estrutura do projeto

```text
calculadoraImc_JS/
│
├── CSS/
│   ├── styles.css
│   └── resultado.css
│
├── JS/
│   ├── script.js
│   └── classification.js
│
├── index.html
└── README.md
```

## 📚 Conceitos praticados

- Manipulação do DOM
- Eventos
- Arrow Functions
- Arrays de Objetos
- Criação dinâmica de elementos
- Manipulação de classes (`classList`)
- Validação de dados
- ES Modules (`import` e `export`)
- Organização de código em módulos
- Flexbox

## ▶️ Como executar

1. Clone o repositório:

```bash
git clone https://github.com/cristianomattoss/calculadoraImc_JS.git
```

2. Acesse a pasta do projeto.

3. Execute o arquivo `index.html` ou utilize uma extensão como **Live Server** no Visual Studio Code.

## 📖 Fórmula utilizada

```text
IMC = Peso / Altura²
```

## 📊 Classificação do IMC

| IMC | Classificação |
|------|---------------|
| Menor que 18,5 | Magreza |
| Entre 18,5 e 24,9 | Normal |
| Entre 25,0 e 29,9 | Sobrepeso |
| Entre 30,0 e 39,9 | Obesidade |
| Acima de 40 | Obesidade Grave |

## 🌐 Demonstração

Acesse a aplicação:

**https://cristianomattoss.github.io/calculadoraImc_JS/**

## 👨‍💻 Autor

- GitHub: https://github.com/cristianomattoss
- LinkedIn: https://www.linkedin.com/in/cristiano-mattoss/