import express from "express"; 
import cors from "cors"; 
const app = express();
const port = 3000; 


app.use(cors()); 
app.use(express.json()); 


app.get('/', (req, res) => { // EndPoint "/"
    res.send('Ya estoy respondiendo!');
    })
app.get('/saludar', (req, res) => { // EndPoint "/saludar"
res.send('Hello World!');
})


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})