# 👩🏻‍💻 Javascript and Typescript Review

## 📚 Primeiro Curso: Evoluindo na Programação

### Introdução

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
