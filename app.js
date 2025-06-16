const express = require('express')  
const app = express();
app.use(express.json());
const authRootes = require("./routes/authroutes");

app.get('/',(req,res)=> res.send('API WORKING'))
app.use('/api/auth',authRootes)
module.exports = app;