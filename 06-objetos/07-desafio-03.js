function criarData(dia, mes, ano) {
  return {
    dia: dia,
    mes: mes,
    ano: ano,
    formatar: function () {
      return `${this.dia} / ${this.mes} / ${this.ano}`;
    },
  };
}

console.log(criarData(3, 4, 2024));
