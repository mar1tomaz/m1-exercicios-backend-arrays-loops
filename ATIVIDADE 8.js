const numeros = [3, 24, 1, 8, 11, 7, 15];
let resposta = []
for (numero of numeros) {
    if (numero > resposta) {
        resposta = numero;
    }
}
console.log(resposta)