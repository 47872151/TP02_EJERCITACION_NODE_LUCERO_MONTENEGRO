import {PI, Array, sumar, restar, multiplicar, dividir} from './modules/matematica.js'

let total, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`);
console.log(`Array:'${Array}'`);

let totalSUMA = sumar(numero1, numero2);
console.log(`sumar(${numero1}, ${numero2}) = ${totalSUMA}`); 

let totalRESTA = restar(numero1, numero2);
console.log(`restar(${numero1}, ${numero2}) = ${totalRESTA}`);

let totalMULTIPLICACION = multiplicar(numero1, numero2);
console.log(`multiplicar(${numero1}, ${numero2}) = ${totalMULTIPLICACION}`);

let totalDIVISION = dividir(numero1, numero2);
console.log(`dividir(${numero1}, ${numero2}) = ${totalDIVISION}`);