let miObjeto = null;
let miURL = null;

miURL = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
miObjeto = parsearUrl(miURL);

console.clear();
console.log(miObjeto);

function parsearUrl(miURL){
  
    let objeto = {
        host: miURL.host,
        pathname: miURL.pathname, 
        parametros: Object.fromEntries(miURL.searchParams)
    };
    return objeto;
}