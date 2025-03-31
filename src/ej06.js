let miObjeto = null;
let miURL = null;
let miURLInvalida = null;

miURL = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
miURLInvalida = new URL('http://url-invalida');
miObjeto = parsearUrl(miURLInvalida);

console.clear();
console.log(miObjeto);

function parsearUrl(miURLInvalida){
    let objeto;
    try{
    objeto = {
        href: miURLInvalida.href,
        origin: miURLInvalida.origin, 
        pathname: miURLInvalida.pathname, 
        search: miURLInvalida.search, 
        searchParams: miURLInvalida.searchParams,
        host: miURLInvalida.host, 
        protocol: miURLInvalida.protocol, 
        hostname: miURLInvalida.hostname, 
        port: miURLInvalida.port 
    };

    let params = {};
    miURLInvalida.searchParams.forEach((value, key) => {
        params[key] = value;
    });

    objeto.params = params;
    }
    catch(error){
        objeto = null;
    }

    return objeto;
}