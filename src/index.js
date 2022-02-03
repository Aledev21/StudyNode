const express = require('express')

const app = express()





/**
 * TIPOS DE PARAMETROS
 * 
 * Routes Params =>  Indentificar um recurso editar/deletar/buscar
 */



/**
 * GET -BUSCAR UMA INFORMAÇÃO DENTRO DO SERVIDOR 
 * POST - INSERIR UMA INFROMAÇÃO NO SERVIDOR 
 * PUT - ALTERA UMA INFROMAÇÃO NO SERVIDOR 
 * PATCH - ALTERAR UMA INFORMAÇÃO  ESPECIFICA NO SERVIDOR 
 * DELETE - DELETAR UMA INFORMAÇÃO NO SERVIDOR 
 */
app.get("/", (req, res) =>{
    return res.json({message: 'nodejs fundatations'})
})

app.get("/courses", ( req, res) => {
    return res.json(['CURSO1', 'CURSO2', 'CURSO3' ])
})

app.post("/courses", ( req, res) => {
    return res.json(['CURSO1', 'CURSO2', 'CURSO3', 'CURSO4' ])
})

app.put("/courses/:id", ( req, res) => {
    const 
    return res.json(['CURSO7', 'CURSO2', 'CURSO3', 'CURSO4' ])
})

app.patch("/courses/:id", (req, res)=>{
    return res.json(['CURSO7', 'CURSO6', 'CURSO3', 'CURSO4' ])
})

app.delete("/courses/:id", (req, res)=>{
    return res.json(['CURSO4'])
})


app.listen(3000)