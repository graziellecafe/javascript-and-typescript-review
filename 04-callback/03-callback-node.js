// Ler um arquivo que está dentro do nosso projeto
const path = require("path");
const caminho = path.join(__dirname, "..", "dados", "arquivo.txt");

console.log(caminho);

fs.readFile(caminho, function (erro, conteudo) {
  console.log(erro);
  console.log(conteudo.toString);
});

// Lê o arquivo primeiro
fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("Fim #2");
