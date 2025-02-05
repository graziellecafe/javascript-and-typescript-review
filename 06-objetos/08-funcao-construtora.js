// Função construtora: criar objetos

// 1. Inicia com letra maiúscula [ Não obrigatorio ]
// 2. Chamar função com new Data ()...
// 3. Uso do this para acrescentrar atributos e métodos no objeto
function Data(dia, mes, ano) {
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;

  this.formatar = function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  };
}

const data = new Data(5, 2, 2025);
console.log(data.formatar());

const data1 = new Data(6, 2, 2024);
console.log(data1.formatar());
