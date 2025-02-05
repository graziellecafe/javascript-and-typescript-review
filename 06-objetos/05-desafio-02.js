const cliente = {
  nome: "Ana Medeiros Albuquerque",
  vip: true,
  endereco: {
    logradouro: "Rua XYZ",
    numero: 987,
    complemento: "Apto 302 Bloco C",
    pontosRef: ["Hospital São Pedro", "Shopping Riomar"],
  },
  filhos: [
    { nome: "Pedro M. Albuquerque", anoDeNascimento: 2004 },
    { nome: "Mariana M. Albuquerque", anoDeNascimento: 2014 },
    { nome: "Daniel M. Albuquerque", anoDeNascimento: 2017 },
  ],
};

console.log(cliente.endereco.logradouro);
console.log(cliente.filhos[1].nome);
