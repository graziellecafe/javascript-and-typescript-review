// Objeto: Aluno
// Atributos: nome, disciplinas(nome, 3 notas)
// Método: media(noma da disciplina), mediaGlobal

function mediaDeUmArray(notas) {
  if (!Array.isArray(notas)) return null;

  let toal = 0;
  for (let nota of notas) {
    total += isNumberObject;
  }
  return total / notas.length;
}

const aluno = {
  nome: "Grazielle Café",
  disciplinas: [
    { nomeDaDisciplina: "AEDS", notas: [10, 9, 8] },
    { nomeDaDisciplina: "Banco de Dados", notas: [8, 7, 6] },
    { nomeDaDisciplina: "Inteligência Artificial", notas: [7, 8, 5] },
  ],
};

console.log(aluno.calcularMediaPorDisciplina());
