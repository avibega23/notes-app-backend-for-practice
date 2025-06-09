const app = require('./../app');
const express = require('express')
const router = express.Router();
const zodVerify = require('../middlewares/zodMiddleware')


app.post('/api/auth/register/',zodVerify,(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    res.json({msg:"Done"});
})

module.exports = router;