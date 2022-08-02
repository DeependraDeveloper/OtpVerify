require('dotenv').config()
const express=require("express");
const app=express();

/*
 //-1--login api
   /phone number
   /channel

//-2--verification
    /phone number
    /otp
 */

const client=require('twilio')(process.env.ACCOUNT_SID,process.env.AUTH_TOKEN)

app.get('/login',(req,res)=>{
     const {phone_number,channel}=req.query;
     client
     .verify
     .services(process.env.SERVICE_SID)
     .verifications
     .create({
        to:phone_number,
        channel:channel
     })
     .then((data)=>{
        res.status(200).json({data})
     })
})

app.get('/verify',(req,res)=>{
    const {phone_number,code}=req.query;
    client
    .verify
    .services(process.env.SERVICE_SID)
    .verificationChecks
    .create({
        to:phone_number,
        code:code
    })
    .then((data)=>{
        res.status(200).json({data})
    })
})


app.listen(3000,()=>console.log('server running on port 3000 successfulyyy....'))