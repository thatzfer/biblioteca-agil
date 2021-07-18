const express = require('express');
const app = express();
const port = 3000;

var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'thatz0103',
    database: 'biblioteca-agil'
});

connection.connect();


//teste
app.get('/', (req, res) => {
    res.send('Hello world')
});

//Retirar um livro
app.get('/biblioteca/v1/titulos', (req, res) => {
    
    connection.query('SELECT id, nome, autor FROM `biblioteca-agil`.título', function (err, rows, fields){
        if (err) throw err

        res.send(rows)
    }) 
});

//Devolver um livro
app.put('/biblioteca/v1/return', (req, res) => {
    
    connection.query('SELECT id, nome FROM `biblioteca-agil`.`emprestado_a`', function (err, rows, fields){
        if (err) throw err

        res.send(rows)
    }) 
});

//Doar um livro
app.post('/biblioteca/v1/donate', (req, res) => {
    
    connection.query('INSERT INTO título (id, Nome, autor, ano, status) VALUES ("4", "Nevernight", "Jay Kristoff", "2016", "0")', function (err, rows, fields){

        res.send(rows)
    }) 
});

app.listen(port, () => {
    console.log(`Tá rolando na porta https://localhost:${port}`)
});