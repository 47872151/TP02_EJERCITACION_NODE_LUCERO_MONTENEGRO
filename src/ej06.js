let miObjeto = null;
let miURL = null;
let miURLInvalida = null;

miURL = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
miURLInvalida = 'url-invalida';
miObjeto = parsearUrl(miURLInvalida);

console.clear();
console.log(miObjeto);

function parsearUrl(miURL) {
    let objeto;
    try {
        objeto = {
            host: miURL.host,
            pathname: miURL.pathname,
            parametros: Object.fromEntries(miURL.searchParams)
        };
    } catch (error) {
        objeto = {
            host: null, 
            pathname: null, 
            parametros: null 
        };
    }
    return objeto;
}