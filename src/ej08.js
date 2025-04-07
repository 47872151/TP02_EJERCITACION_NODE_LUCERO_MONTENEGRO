// Importamos las funciones del wrapper
import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb-wrapper.js';

let resultado = null;

// Test de la función OMDBSearchByPage
resultado = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado.datos);

// Test de la función OMDBSearchComplete
resultado = await OMDBSearchComplete("Batman");
console.log("OMDBSearchComplete", resultado.datos);

// Test de la función OMDBGetByImdbID
resultado = await OMDBGetByImdbID("tt0111161"); // IMDb ID de "The Shawshank Redemption"
console.log("OMDBGetByImdbID", resultado.datos);
