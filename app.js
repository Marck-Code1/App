const express = require('express');
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || '3000'

app.use(express.json()) // Esta funcion parsea el body de la peticion y si trae JSON lo va a agregar a la propiedad body
app.use(cors())

app.get('/alumnos',(req,res) => {
    console.log(req.query)
    res.send('Hola Mundo!');
});

app.get('/docentes/:control',(req,res) => {
    console.log(req.params)
    res.send('Hola Mundo!');
});

app.get('/directivos',(req,res) => {
    console.log(req.body)
    res.send('Hola Mundo!');
});


app.post('/',(req,res) => {
    res.send('Hola Mundo! post!!!!!');
});

app.post('/directivos',(req,res) => {
    console.log(req.body)
    res.send('Hola Mundo! post!!!!!');
});


app.listen(PORT, () => {
    console.log('App listening on port 3000!')
});