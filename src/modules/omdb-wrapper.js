import axios from "axios";

const APIKEY = "b8b3928a";  

const OMDBSearchByPage = async (searchText, page = 1) => {
    let returnObject = {
        respuesta: false,
        cantidadTotal: 0,
        datos: []
    };

    try {
      
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                apikey: APIKEY,
                s: searchText, 
                page: page 
            }
        });

        if (response.data.Response === 'True') {
            returnObject.respuesta = true;
            returnObject.cantidadTotal = response.data.totalResults;
            returnObject.datos = response.data.Search;
        }
    } catch (error) {
        console.error("Error en OMDBSearchByPage:", error);
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
        
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                apikey: APIKEY,
                s: searchText 
            }
        });

        
        if (response.data.Response === 'True') {
            returnObject.respuesta = true;
            returnObject.cantidadTotal = response.data.totalResults;
            returnObject.datos = response.data.Search;
        }
    } catch (error) {
        console.error("Error en OMDBSearchComplete:", error);
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
       
        const response = await axios.get('https://www.omdbapi.com/', {
            params: {
                apikey: APIKEY,
                i: imdbID 
            }
        });

        
        if (response.data.Response === 'True') {
            returnObject.respuesta = true;
            returnObject.datos = response.data;
        }
    } catch (error) {
        console.error("Error en OMDBGetByImdbID:", error);
    }

    return returnObject;
};

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };