const express = require('express')
const fruitRouter = express.Router()

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

fruitRouter.get('/all', (req, res)=>{
    res.send(fruits)
})

fruitRouter.get('/:fruit', async(req, res)=>{
    res.send(fruits.filter(x => x.name == req.params.fruit))
})

fruitRouter.post('/add', async(req, res)=>{
    await fruits.push(req.body)
    await res.send(fruits)
})

fruitRouter.delete('/delete/:id', async(req, res)=>{
    const targetIndex = fruits.findIndex(req.params.id)
    await fruits.splice(targetIndex, 1)
    res.send(fruits)
})

module.exports = fruitRouter