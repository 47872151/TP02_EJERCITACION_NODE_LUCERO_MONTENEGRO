// Importamos axios
import axios from "axios";

const APIKEY = "b8b3928a";
const OMDBSearchByPage = async (searchText, page = 1) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    // Hacemos la solicitud a la API de OMDB
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: searchText,     // Título de la película a buscar
        page: page,        // Página de resultados (paginación)
        apikey: APIKEY     // La API key
      }
    });

    // Verificamos si la respuesta es exitosa y contiene resultados
    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = response.data.totalResults;
      returnObject.datos = response.data;
    }
  } catch (error) {
    console.error("Error al buscar por página:", error);
  }

  return returnObject;
};

const OMDBSearchComplete = async (searchText) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    // Hacemos la solicitud a la API de OMDB
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: searchText,     // Título de la película a buscar
        apikey: APIKEY     // La API key
      }
    });

    // Verificamos si la respuesta es exitosa y contiene resultados
    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = response.data.totalResults;
      returnObject.datos = response.data;
    }
  } catch (error) {
    console.error("Error al buscar completamente:", error);
  }

  return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: {}
  };

  try {
    // Hacemos la solicitud a la API de OMDB usando el IMDb ID
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        i: imdbID,        // El imdbID de la película
        apikey: APIKEY     // La API key
      }
    });

    // Verificamos si la respuesta es exitosa
    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.datos = response.data;
    }
  } catch (error) {
    console.error("Error al obtener por IMDb ID:", error);
  }

  return returnObject;
};

// Exportamos las funciones para que puedan ser usadas en otros módulos
export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };
