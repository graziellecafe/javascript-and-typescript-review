# 👩🏻‍💻 Javascript and Typescript Review

## 📚 Primeiro Curso: Evoluindo na Programação

### 🎯 1. Função

📓 **Programando sem o uso de função:**

```js
const d1 = 31;
const m1 = "Janeiro";
const ano1 = 2024;
console.log(`Dia ${d1} do mês de ${m1} do ano de ${ano1}`);
```

Utilizando função o código evita a **duplicação de código**, e vamos ver o mesmo exemplo com o mesmo uso de função, para vermos a usabilidade de função. Para dominar o uso das funções tem muito haver com **organização de código**, mais fácil de reutilizar.

📓 **Programando utilizando funções**

Utilizando funções podemos passar os parâmetros aos quais querem ser exibidas ou manipuladas de acordo com a lógica dentro da função.

```js
function exibirData(dia, mes, ano) {
  return `Hoje é dia ${dia} do mês de ${mes} do ano de ${ano}.`;
}

console.log(exibirData("primeiro", "fevereiro", 2024));
```

📓 **Comportamento: undefined e null**

- Quando você cria uma variável que está definida como null quer dizer que ela não está sendo apontada pra nenhum espaço de memória. Não tem nenhum tipo de apontador.

```js
let a = 2; // está definida em um espaço de memória
```

```js
let b = null;
```

### 2. 🎯 Array

É uma estrutura indexada, começando com 0. Você pode colocar qualquer coisa dentro do array, mas normalmente colocamos o mesmo tipo de valores. Ex: Notas dos alunos.

Podemos adicionar novos elementos, acrescentar valores ou seja, é uma estrutura dinâmica.

--> Heterogênea e dinâmica

📓 **Laço for para percorrer o array**

```js
const arrayNumeros = [68, 55, 123, 222, 95, 33, 45];

// Imprimir os valores dos índices
for (let i = 0; i <= arrayNumeros.length; i++) {
  console.log(i);
}

// Imprimir o conteúdo do array
for (let i = 0; i < arrayNumeros.length; i++) {
  console.log(`No índice ${i} temos o valor de ${arrayNumeros[i]}`);
}

// foreach => para cada elemento do array
for (let numero of arrayNumeros) {
  console.log(arrayNumeros);
}

// for para cada indice
for (let indice in arrayNumeros) {
  console.log(`${indice} => ${arrayNumeros[indice]}`);
}
```

📓 **Funções e métodos utilizados em arrays**

1. **length**:

```js
console.log(numeros.length);
```

2. **join**: Junta os índices de array

```js
const numeros = [];
console.log(numeros.join(""));
```

3. **includes**: Verifica se o que está sendo passado no método está no array

```js
const nomeIncludes = nomeArray.includes("G"); // true para 'Grazielle'
console.log(nomeIncludes);
```

4. **indexOf** Verifica o conteúdo que está no index passado

```js
console.log(
  ` O conteúdo dentro da letra a está na posição de índice: ${nome.indexOf(
    "a" // 2
  )}`
```

4. **concat**: Cria um novo array, diferente do push, com novos elementos adicionados

```js
const numeros = [1, 2, 3];
const numeros2 = numeros.concat(4, 5, 6);
console.log(`Os novos números são: ${numeros2}`);
```

4. **splice**: A função do splice() permite adicionar, remover ou substituir elementos de um array. Ele modifica o array original e retorna os elementos removidos como um novo array.

```js
const numerosOriginais = [1, 2, 3, 4, 5, 6];
const numerosSlice = numerosOriginais.splice(3, 1);
console.log(
  `O novo número eliminando o elemento da terceira posição e o próximo é: ${numerosSlice}`
);
```

📓 **Desafio forEach()**

```js
const nomes = ["Rafaela", "Larissa", "Ana", "Pedro", "Gustavo"];

function forEach(array, funcao) {
  for (let i in array) {
    funcao(array[i], i, array);
  }
}

function paraCadaElemento(elemento, i, array) {
  console.log(elemento, i, array);
}
```

### 3. 🎯 Objetos

Array: []
Objeto: {}

Exemplo de objeto: par chave valor:

```js
cliente {
  nome: "Leonardo Leitão",
  idade: 30,
  endereco: "Rua Avenida Paulista, 256"
}
```

Para acessar fazemos:

```js
console.log(cliente.nome);
console.log(cliente["nome"]);
```

Para alterar o parâmetro:

```js
cliente['nome'] = 'Caneta Bic Vermelha';
cliente.nome = 'Caneta Bic Vermelha;
```

## 📚 Segundo Curso: Funções em Javascript

### Declaração de funções: padrão e arrow function

```js
// Function declaration
function bomDia() {
  console.log("Bom dia!");
}

bomDia();

// Function expression
const boaTarde = function () {
  console.log("Boa tarde!");
};

boaTarde();
```

**Função dentro de outra função**

```js
function potencia(exp) {
  return function (base) {
    return Math.pow(base, exp);
  };
}

const aoQuadrado = potencia(2);
console.log(aoQuadrado(4));
```

### Função callback

```js
function bomDia() {
  console.log("Bom dia!");
}

Esperar quanto tempo que a primeira função, no caso a 'bomDia' seja executada:
setTimeout(bomDia, 3000);
```

### Função setInterval

Repete a chamada da função a cada x segundos de tempo determinado

```js
setInterval(function () {
  console.log("A cada 3 segundos a função vai se repetir");
}, 3000);
```

## 📚 Terceiro Curso: Node

**Node**: Runtime do Javascript

**Executar o Javascript em toda parte**: O Node.js é um ambiente de execução disponível para várias plataformas, de código aberto e gratuita, que permite os programadores criar servidores, aplicações da Web, ferramentas de linha de comando e programas de automação de tarefas.

## 📚 Quarto Curso: Javascript Funcional e Reativo: Pense como um Desenvolvedor Javascript
