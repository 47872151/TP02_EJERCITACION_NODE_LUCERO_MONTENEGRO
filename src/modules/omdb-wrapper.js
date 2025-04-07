import axios from "axios";

const APIKEY = "b8b3928a";
const OMDBSearchByPage = async (searchText, page = 1) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: searchText,
        page: page,
        apikey: APIKEY
      }
    });

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
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        s: searchText,
        apikey: APIKEY
      }
    });

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
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        i: imdbID,
        apikey: APIKEY
      }
    });

    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.datos = response.data;
    }
  } catch (error) {
    console.error("Error al obtener por IMDb ID:", error);
  }

  return returnObject;
};

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };