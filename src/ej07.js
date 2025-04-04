import { getCountry } from 'currency-map-country';


function obtenerMoneda(codigoPais) {
    
    const moneda = JSON.stringify(getCountry(codigoPais));
    
    return moneda ? moneda : null;
}

let monedaDelPais, codigoPais;

codigoPais = 'ARG';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'USA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);