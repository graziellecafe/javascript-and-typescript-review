function comRetorno() {
  return `Bom dia!`;
}

function semRetorno() {
  console.log("Bom dia!");
}

saudacaoComRetorno = comRetorno(); // 'Bom dia'
saudacaoSemRetorno = semRetorno(); // undefined

console.log(saudacaoComRetorno, saudacaoSemRetorno); // Bom dia | undefined
