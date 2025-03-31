
let miObjeto = null;
let miURL = null;

miURL = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
miObjeto = parsearUrl(miURL);

console.clear();
console.log(miObjeto);

function parsearUrl(miURL){
  
    let objeto = {
        href: miURL.href,
        origin: miURL.origin, 
        pathname: miURL.pathname, 
        search: miURL.search, 
        searchParams: miURL.searchParams,
        host: miURL.host, 
        protocol: miURL.protocol, 
        hostname: miURL.hostname, 
        port: miURL.port 
    };

    let params = {};
    miURL.searchParams.forEach((value, key) => {
        params[key] = value;
    });

    objeto.params = params;

    return objeto;
}