// Função: 3 parâmetros => mediaSimples => console.log
function mediaSimples(n1, n2, n3) {
  const mediaSimples = (n1 + n2 + n3) / 3;
  console.log(
    `A média simples entre os três números inseridos é ${mediaSimples}.`
  );
}

mediaSimples(2, 3, 4);

// Função: 3 parâmetros => mediaPonderada => console.log
function mediaPonderada(n1, n2, n3) {
  const mediaPonderada = (1 * n1 + 2 * n2 + 3 * n3) / 6;

  console.log(mediaPonderada);
}

mediaPonderada(6, 7, 8);
