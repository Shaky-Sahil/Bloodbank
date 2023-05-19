const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()

const User = require('../model/userDB')

loginRouter.post('/', async (request, response) => {
  const { email, password } = request.body
    console.log(email)
  const user = await User.findOne({ userEmail : email })
  console.log(`the user is ${user}`)
  console.log(`the password is ${user.userPassword}`)
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.userPassword)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }
  console.log("password is valid")

  const userForToken = {
    userEmail: user.userEmail,
    id: user._id,
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter