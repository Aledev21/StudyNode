const express = require('express')

const app = express()

app.get("/", (req, res) =>{
    return res.json({message: 'nodejs fundatations'})
})

app.get("/courses", ( req, res) => {
    return res.json(['CURSO1', 'CURSO2', 'CURSO3' ])
})

app.post("/courses", ( req, res) => {
    return res.json(['CURSO1', 'CURSO2', 'CURSO3', 'CURSO4' ])
})

app.post("/courses/:id", ( req, res) => {
    return res.json(['CURSO7', 'CURSO2', 'CURSO3', 'CURSO4' ])
})

app.patch("/courses/:id", (req, res)=>{
    return res.json(['CURSO7', 'CURSO6', 'CURSO3', 'CURSO4' ])

} )


app.listen(3000)