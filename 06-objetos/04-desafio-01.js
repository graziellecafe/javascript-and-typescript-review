const data = {
  dia: 5,
  mes: 2,
  ano: 2025,
  formatar: function () {
    return `${this.dia} / ${this.mes} / ${this.ano}`;
  },
};

console.log(data.formatar());
