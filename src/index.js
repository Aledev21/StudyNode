const express = require('express')
const {v4: uuidv4} = require('uuid')


const app = express()

app.use(express.json())

const customers = []

 
app.post("/account", (req, res) =>{
    const {cpf, name} = req.body;

    const costumerAlreadyExists = customers.some(
    (customer)=> customer.cpf === cpf
    ); if(costumerAlreadyExists) {
         return res.status(404).json({error: "Customer already Exists"})
    }



    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });


    return res.status(201).send()
})
app.listen(3000)