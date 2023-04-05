const express = require('express')
const port = 3500
const app = express()

app.get('/products', (req, res) => {
    res.send('lista de productos')
})

app.post('/products', (req, res) => {
    res.send('creando productos')
})

app.put('/products', (req, res) => {
    res.send('actualizando producto')
})

app.delete('/products', (req, res) => {
    res.send('eliminando producto')
})

app.patch('/products', (req, res) => {
    res.send('actualizando una parte del producto')
})

app.listen(port)
console.log(`Server on port ${port}`)