const nome = ["G", "r", "a", "z", "i", "e", "l", "l", "e"];
const nomeArray = nome;
console.log(`O nome original passado é : ${nomeArray}`);

console.log("------------------------------------------------------");
const nomeJoin = nome.join("");
console.log(`O nome formado é: ${nomeJoin}`);

console.log("------------------------------------------------------");
console.log("- Verifica se o que está sendo passado está no array -");
const nomeIncludes = nomeArray.includes("G"); // true
console.log(nomeIncludes);

console.log("------------------------------------------------------");
console.log("indexOf: verifica o conteúdo que está no index passado ");
console.log(
  ` O conteúdo dentro da letra a está na posição de índice: ${nome.indexOf(
    "a"
  )}`
);

console.log("------------------------------------------------------");
const numeros = [1, 2, 3];
const numeros2 = numeros.concat(4, 5, 6);
console.log(`Os novos números são: ${numeros2}`); // 1, 2, 3, 4, 5, 6

console.log("------------------------------------------------------");
console.log(
  "Função slice: remove elementos e retorna os elementos removidos em um novo array"
);
const numerosOriginais = [1, 2, 3, 4, 5, 6];
const numerosSlice = numerosOriginais.splice(3, 1); // vai eliminar o índice na posição 3 e no segundo parâmetros quantos serão eliminados. Neste caso será eliminado o número 4.
console.log(
  `O novo número eliminando o elemento da terceira posição e o próximo é: ${numerosSlice}`
);
