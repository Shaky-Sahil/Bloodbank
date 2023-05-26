const express = require('express')
require('dotenv').config()
const userData = require("./model/userDB")
const donorData = require('./model/DonorDB')
const requestData = require("./model/RequestDB")
const verfiedRequest = require('./model/Verifiedrequest')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')



const app = new express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/*let transporter = nodemailer.createTransport({
  service: 'Zoho',
  auth: {
    user: 'bl5dban4k2023ict@zohomail.in',
    pass: 'Bloodblood5', 
}});*/

let transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
   port: 587,
   auth: {
       user: "apikey",
       pass: process.env.SENDGRID_API_KEY
   }
});

/*transporter.sendMail({
  from: "sahilpk81@gmail.com", // verified sender email
  to: "sahilpk81@gmail.com", // recipient email
  subject: "Test message subject", // Subject line
  text: "Hello world!", // plain text body
  html: "<b>Hello world!</b>", // html body
}, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/

const mailOptions = {
  from: 'bl5dban4k2023ict@zohomail.in',  // sender address
    to: 'sahilpk81@gmail.com',   // list of receivers
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: '<b>Hey there! </b> <br> Your blood donation request has been approved<br/>',
  };

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
    let result = await userData.find()
    console.log("data fetched")
    res.json(result)
})

app.get('/requests', async (req,res)=>{
  let result = await requestData.find()
  console.log("data fetched")
  res.json(result)
})

app.get('/verified/requests', async (req,res)=>{
  let result = await verfiedRequest.find()
  console.log("data fetched")
  res.json(result)
})

app.post('/request/new',async (req,res)=>{
  let request = new requestData(req.body)
 request.save()
 res.send(`reques boyd is ${req.body}`)
})


app.post('/user/new',async (req,res)=>{
    let user = new userData(req.body)
   user.save()
   res.send(req.body)
})

app.post('/verified/request/new',async (req,res)=>{
  console.log(`ver req bod ${req.body}`)
  let request = new verfiedRequest(req.body)
  transporter.sendMail({
    from: "sahilpk81@gmail.com", // verified sender email
    to: "sahilpk81@gmail.com", // recipient email
    subject: "Test message subject", // Subject line
    text: "Hi,your donation request to Circulate Blood Bank has been Approved", // plain text body
  }, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 request.save()
 
 res.send(req.body)
})

app.post('/user/delete',async (req,res)=>{
  await userData.findByIdAndDelete(req.body._id)
  res.send("user deleted")

})

app.post('/request/delete',async (req,res)=>{
  await requestData.findByIdAndDelete(req.body._id)
  res.send("request deleted")
})

app.post('/verified/request/delete',async (req,res)=>{
  await verfiedRequest.findByIdAndDelete(req.body._id)
  res.send("request deleted")
})

app.get('/donors', async (req,res)=>{
  let result = await donorData.find()
  console.log("data fetched")
  console.log(result)
  res.json(result)
})

app.post('/donor/new',async (req,res)=>{
  let donor = new donorData(req.body)
 donor.save()
 res.send(req.body)
})

app.post('/verified/request/update', async (req,res)=>{
  console.log(`id is ${req.body._id}`)
  console.log(req.body)
  await verfiedRequest.findByIdAndUpdate(req.body._id,req.body)
  res.send("successfully updated")
})

app.get('/requests/donors', async (req,res)=>{
  let result = await requestData.find({requestCategory:"1"})
  console.log("data fetched")
  res.json(result)
})

app.post('/test/mail',(req,res)=>{
  transporter.sendMail({
    from: "sahilpk81@gmail.com", // verified sender email
    to: "sahilpk81@gmail.com", // recipient email
    subject: "Test message subject", // Subject line
    text: "Hello world!", // plain text body
    html: "<b>Hello world!</b>", // html body
  }, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send("success")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})