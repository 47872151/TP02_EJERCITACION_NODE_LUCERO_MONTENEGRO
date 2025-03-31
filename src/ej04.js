import fs from 'fs';

const archivoEntrada = "./archivoEntrada.txt";
const archivoSalida = "./archivoSalida.txt";

console.clear();

copiar(archivoEntrada, archivoSalida);

function copiar(origen, destino) {
    fs.readFile(origen, { encoding: 'utf8' }, (err, data) => {
        if (err) {
            console.error('Error al leer el archivo de origen:', err);
            return;
        }

        fs.writeFile(destino, data, (err) => {
            if (err) {
                console.error('Error al escribir el archivo de destino:', err);
                return;
            }
            console.log(`Archivo copiado exitosamente de ${origen} a ${destino}`);
        });
    });
}
