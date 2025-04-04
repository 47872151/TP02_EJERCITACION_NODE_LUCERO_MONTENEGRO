import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/omdb-wrapper.js';

let resultado = null;

resultado = await OMDBSearchByPage("cars", 1);
console.log("OMDBSearchByPage", resultado);

resultado = await OMDBSearchComplete("batman");
console.log("OMDBSearchComplete", resultado);

resultado = await OMDBGetByImdbID("tt0848228");
console.log("OMDBGetByImdbID", resultado);