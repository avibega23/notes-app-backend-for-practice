const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
const zodVerify = require('../middlewares/zodMiddleware')
const {jwtVerify,authrizer}= require('../middlewares/jwtVerify');
const User = require('../models/userModel')


router.get('/api/notes',(req,res)=>{})

router.post('/api/notes',(req,res)=>{})

router.post('/api/notes/:id',(req,res)=>{})

router.delete('/api/notes/:id',(req,res)=>{})
