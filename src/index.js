const express = require('express')

const app = express()

app.use(express.json())

 
app.get("/", (req, res) =>{
    return res.json({message: 'nodejs fundatations'})
})
app.listen(3000)