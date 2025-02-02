const nome = ["Ana", "Bia", "Carlos", "Daniel"];

// O primeiro parâmetro é o conteúdo e o segundo é o índice e o terceiro é o array inteiro
nome.forEach(function (elemento, i, array) {
  console.log(elemento, i, array);
});

const nomes = ["Rafaela", "Larissa", "Ana", "Pedro", "Gustavo"];

function forEach(array, funcao) {
  for (let i in array) {
    funcao(array[i], i, array);
  }
}

function paraCadaElemento(elemento, i, array) {
  console.log(elemento, i, array);
}
