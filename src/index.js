const express = require('express')
const {v4: uuidv4} = require('uuid')


const app = express()

app.use(express.json())

 
app.post("/account", (req, res) =>{
    const {cpf, name} = req.body;

    const id = uuidv4()

    

    return res.json({message: 'nodejs fundatations'})
})
app.listen(3000)