const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let pares = 0
for (let numero of numeros) {
    if (numero % 2 === 0) {
        pares = pares + numero;
    }
}
console.log(pares);