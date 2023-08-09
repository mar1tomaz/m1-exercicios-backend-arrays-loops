const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesComeçadosComA = [];
for (let nome of nomes) {
    const inicial = nome[0];

    if (inicial === "A" || inicial === "a") {
        nomesComeçadosComA.push(nome);
    }
}
console.log(nomesComeçadosComA);
