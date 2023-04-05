const express = require('express')
const port = 3500
const app = express()

app.get('/', (req, res)=> {
    res.send('Hello World')
})

app.get('/myfile', (req, res)=> {
    res.sendFile('express-logo.jpg', {
        root: __dirname
    })
})

app.get('/user', (req, res) => {
    res.json({
        nombre: "Axel",
        apellido: "Chacon",
        edad: 19,
        points: [1, 2 ,3],
        adress: {
            ciudad: "Lima - Peru",
            distrito: "San Juan de Lurigancho",
            calle: "Las Flores"
        }
    })
})

app.get('/isAlive', (req, res) => {
    res.sendStatus(200)
})

app.listen(port)
console.log(`Server on port ${port}`)