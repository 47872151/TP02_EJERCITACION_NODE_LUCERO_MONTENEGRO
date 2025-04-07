import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb-wrapper.js';

let resultado = null;

resultado = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado.datos);

resultado = await OMDBSearchComplete("Batman");
console.log("OMDBSearchComplete", resultado.datos);

resultado = await OMDBGetByImdbID("tt0111161");
console.log("OMDBGetByImdbID", resultado.datos);
