
const currencyMap = require('currency-map-country');

function obtenerMoneda(codigoPais) {
    
    const moneda = currencyMap[codigoPais];
    
    return moneda ? moneda : null;
}

let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
