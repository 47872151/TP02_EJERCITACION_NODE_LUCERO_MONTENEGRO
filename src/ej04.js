import fs from 'fs';


const archivoEntrada           = "./archivoEntrada.txt";
const archivoSalida          = "./archivoSalida.txt";

console.clear();

copiar(archivoEntrada, archivoSalida);

function copiar(origen, destino){
   
    fs.readFile('./archivoEntrada.txt', { encoding: 'utf8'}, (err, data)=> {
        if (err) throw err;
        console.log(data);
      });

      

}