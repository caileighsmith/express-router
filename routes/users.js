const express = require('express')
const userRouter = express.Router()

let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    },
    {
        name: 'cai',
        age: 20
    }
]


userRouter.get('/all', (req, res)=>{
    res.send(users)
})

userRouter.get('/find/:id', async(req, res)=>{
    await res.send(users.filter(x => x.name == req.params.id))
})

userRouter.post('/add', async(req, res)=>{
    await users.push(req.body)
    await res.send(req.body)
})


module.exports = userRouter
