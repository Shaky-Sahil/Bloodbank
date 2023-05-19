const express = require('express')
require('dotenv').config()
const userData = require("./model/userDB")
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const jwt = require('jsonwebtoken')



const app = new express()

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')) {
      return authorization.replace('Bearer ', '')
    }
    return null
  }


app.use(express.urlencoded({extended:true}))
app.use(express.json())
let cors = require('cors')
app.use(cors())


app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)


app.get('/',(request,response)=>{
    response.send("<h1>Bloodbank Api home</h1>")
})

app.get('/users', async (req,res)=>{
    let result = await UserInfo.find()
    res.json(result)
})

app.post('user/new',async (req,res)=>{
    let user = new UserInfo(req.body)
   user.save()
   res.send(req.body)
})

app.listen(5000)