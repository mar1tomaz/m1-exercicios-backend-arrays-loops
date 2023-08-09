const letras = ["A", "a", "B", "C", "E", "e"];
let contagem = 0
for (let letra of letras) {
    if (letra === "e" || letra === "E") {
        contagem++
    }
}
if (contagem === 0) {
    console.log('Não encontramos nenhuma letra "E" ou "e".');
} else if (contagem === 1) {
    console.log('Encontramos 1 letra "E" ou "e".');
} else {
    console.log('Encontramos ' + contagem + ' letras "E" ou "e".');
}
