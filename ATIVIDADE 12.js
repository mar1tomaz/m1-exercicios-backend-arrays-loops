const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
while (filaDeDentro.length < 5) {
    let pessoa = filaDeFora[1];
    filaDeDentro.push(pessoa);
    filaDeFora.shift();
}
console.log(filaDeDentro);
console.log(filaDeFora);