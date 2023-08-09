const numeros = [8, 11, 4, 1];
let maiorDiferença = -Number.MAX_VALUE;

for (let x of numeros) {
    for (let y of numeros) {
        const diferençaAtual = x - y;
        if (diferençaAtual > maiorDiferença) {
            maiorDiferença = diferençaAtual
        }
    }

}
console.log(maiorDiferença);