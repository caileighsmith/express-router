const express = require('express');
const fruitRouter = express.Router();
const {check, validationResult} = require('express-validator');


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

fruitRouter.post('/add', [check("color").not().isEmpty().trim()] ,async(req, res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        await res.json({
            error: errors.array
        })
    }else{
        await fruits.push(req.body)
        await res.send(fruits)
    }
    
})

fruitRouter.delete('/delete/:id', async(req, res)=>{
    const targetIndex = fruits.findIndex(req.params.id)
    await fruits.splice(targetIndex, 1)
    res.send(fruits)
})


module.exports = fruitRouter