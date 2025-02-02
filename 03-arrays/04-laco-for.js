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
