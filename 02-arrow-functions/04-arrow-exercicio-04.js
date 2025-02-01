// Uma função executando outra função

const executar = (fn) => fn();

const bomDia = () => "Bom dia!";

console.log(executar(bomDia));
