let texto1 = "Paloma";
let texto2 = "Eugenia";
let textoSalida = " ";

textoSalida = concatInvert(texto1, texto2);

console.clear();
console.log(`Textos de Entrada: "${texto1}" y "${texto2}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1, texto2){
    let concatenado = texto1 + texto2;
    let textoSalida = concatenado.split('').reverse().join('');
    return textoSalida;
}