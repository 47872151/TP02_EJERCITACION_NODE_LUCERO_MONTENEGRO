import express from "express"; 
import cors from "cors"; 
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

app.get('/validarfecha/:ano/:mes/:dia', (req, res) => { 
    
    })

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})