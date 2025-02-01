function potencia(exp) {
  return function (base) {
    return Math.pow(base, exp);
  };
}

const aoQuadrado = potencia(2);
console.log(aoQuadrado(4));

const aoCubo = potencia(3);
console.log(aoCubo(2));
