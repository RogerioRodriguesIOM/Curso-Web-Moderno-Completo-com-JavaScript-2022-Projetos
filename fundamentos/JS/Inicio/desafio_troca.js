let a = 7;
let b = 94;
// Trocar os valores das variáveis usando uma variável auxiliar
let temp = a;
a = b;
b = temp;
console.log("Agora a = " + a + " e b = " + b + ".");

// uma alternativa seria usar o codigo abaixo:
// [a, b] = [b, a]

// trocar os valores das variaveis, tornando a = 94 e b = 7.
console.log(a)
console.log(b)