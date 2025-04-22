import express from "express"; 
import cors from "cors";
import {sumar, restar, multiplicar, dividir} from './src/modules/matematica.js'
const { searchByPage, searchComplete, getByOmdbId } = require('./omdb-wrapper');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//a
app.get('/', (req, res) => {
  res.status(200).send('Ya estoy respondiendo!');
})

app.get('/saludar/:nombre', (req, res) => { 
  res.status(200).send('Hola ' + req.params.nombre);
})

 app.get('/validarfecha', (req, res) => {
     const { ano, mes, dia } = req.params;
     const fechaString = `${ano}-${mes}-${dia}`;
     const fecha = Date.parse(fechaString);

     if (isNaN(fecha)) {
        res.status(400).send('Fecha inválida');
     } else {
        res.status(200).send('Fecha válida');
     }
     })

//b
app.get('/matematica/sumar', (req, res) => {
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);
  const resultado = sumar(n1, n2);
  res.status(200).send(`Resultado: ${resultado}`);
});
  
app.get('/matematica/restar', (req, res) => {
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);
  const resultado = restar(n1, n2);
  res.status(200).send(`Resultado: ${resultado}`);
});
  
app.get('/matematica/multiplicar', (req, res) => {
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);
  const resultado = multiplicar(n1, n2);
  res.status(200).send(`Resultado: ${resultado}`);
});
  
app.get('/matematica/dividir', (req, res) => {
  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);
  if (n2 === 0) {
    res.status(400).send('El divisor no puede ser cero');
    return;
  }
  const resultado = dividir(n1, n2);
  res.status(200).send(`Resultado: ${resultado}`);
});

//c
app.get('/omdb/searchbypage', async (req, res) => {
  try {
    const { search, p } = req.query;
    const page = p || 1;
    const resultado = await searchByPage(search, page);

    res.status(200).json({
      respuesta: true,
      cantidadTotal: resultado.totalResults || 0,
      datos: resultado.Search || [],
    });
  } catch (error) {
    res.status(400).json({
      respuesta: false,
      cantidadTotal: 0,
      datos: [],
    });
  }
});

app.get('/omdb/searchcomplete', async (req, res) => {
  try {
    const { search } = req.query;
    const resultado = await searchComplete(search);

    res.status(200).json({
      respuesta: true,
      cantidadTotal: resultado.totalResults || 0,
      datos: resultado.Search || [],
    });
  } catch (error) {
    res.status(400).json({
      respuesta: false,
      cantidadTotal: 0,
      datos: [],
    });
  }
});

app.get('/omdb/getbyomdbid', async (req, res) => {
  try {
    const { imdbID } = req.query;
    const resultado = await getByOmdbId(imdbID);

    res.status(200).json({
      respuesta: true,
      cantidadTotal: 1,
      datos: resultado || {},
    });
  } catch (error) {
    res.status(400).json({
      respuesta: false,
      cantidadTotal: 0,
      datos: {},
    });
  }
});

//d




//e






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})