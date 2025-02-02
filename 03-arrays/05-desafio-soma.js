const { networkInterfaces } = require("os");

const notas = [7.3, 8.1, 9.2, 8.1, 6.3, 7.9, 5.0, 6.0, 8.9, 10];
console.log(`As notas do aluno foram: " ${notas}`);

let total = 0;
let media = 0;

for (let i = 0; i < notas.length; i++) {
  total += notas[i];
}

media = total / notas.length;
console.log(`A nota total do aluno é ${total}`);
console.log(`A média simples do aluno foi: ${media}`);
