function precoComDesconto(preco, desconto) {
  return preco * (1 - desconto);
}
const produto = {
  nome: "Macbook",
  preco: 3200,
  desconto: 0.25,

  precoComDesconto: function () {
    return this.preco * (1 - this.desconto);
    console.log("Estou em precoComDesconto!");
  },
};

console.log(`Usando pelo objeto diretamente: ${produto.precoComDesconto()}`);
console.log(
  `Usando uma função dentro da outra: ${precoComDesconto(
    produto.preco,
    produto.desconto
  )}`
);
