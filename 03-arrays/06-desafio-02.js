const numeros = [7, 99, 1683, 4674, 33, 38, 47, 59];
// 47, 33, 1683, 7

for (let i = numeros.length - 2; i >= 0; i -= 2) {
  console.log(numeros[i]);
}

console.log("---------------------------");
console.log("Utilizando função reverse: ");
const numerosInvertidos = numeros.reverse();
for (let i in numerosInvertidos) {
  if (i % 2 === 1) {
    console.log(numerosInvertidos[i]);
  }
}
