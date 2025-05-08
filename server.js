const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT =3000;
let users = []

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(__dirname))

app.post('/register',(req,res)=>{
    const user =req.body
    users.push(user)
    res.json({ message: 'User registered', user })
})

app.get('/user',(req,res)=>{
    res.json(users)
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})