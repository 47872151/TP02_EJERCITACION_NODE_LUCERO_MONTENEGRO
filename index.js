import express from "express"; 
import cors from "cors";
import {sumar, restar, multiplicar, dividir} from './src/modules/matematica.js'
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).send('Ya estoy respondiendo!');
})

app.get('/saludar/:nombre', (req, res) => { 
  res.status(200).send('Hola ' + req.params.nombre);
})

// app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {
//     const { ano, mes, dia } = req.params;
//     const fechaString = `${ano}-${mes}-${dia}`;
//     const fecha = Date.parse(fechaString);

//     if (isNaN(fecha)) {
//         res.status(400).send('Fecha inválida');
//     } else {
//         res.status(200).send('Fecha válida');
//     }
// })

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})