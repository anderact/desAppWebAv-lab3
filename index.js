const express = require('express')
const port = 3500
const app = express()

app.get('/hello/:usernmae', (req, res) => {
    console.log(typeof req.params.usernmae)
    res.send(`Hello ${req.params.usernmae.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
    const {x, y} = req.params
    res.send(`Result: ${ parseInt(x) + parseInt(y)}`)
})

app.get('/users/:username/photo', (req, res) => {
    if(req.params.username.toUpperCase() === "AXEL"){
        return res.sendFile('./user.jpg', {
            root: __dirname
        })
    }

    res.send('El usuario no tiene acceso !')
})

app.get('/name/:name/age/:age', (req, res) => {
    res.send(`El usuario ${req.params.name} tiene ${req.params.age} años`)
})

app.listen(port)
console.log(`Server on port ${port}`)