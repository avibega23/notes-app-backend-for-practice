const app = require('../app');
const express = require('express')
const router = express.Router();
const zodVerify = require('../middlewares/zodMiddleware')
const jwtVerify= require('../middlewares/jwtVerify');


app.post('/api/auth/register/',zodVerify,(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    res.json({token:req.body.token});
})

app.post('/api/auth/login/',zodVerify,jwtVerify,(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    res.json({msg:"Done",token:req.body.token})
})
module.exports = router;