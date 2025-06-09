const express = require("express")
const zod = require("zod");

const verifyOnSignup = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
})
function zodVerify(req, res,next) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const result = verifyOnSignup.safeParse({ username: username, email: email, password: password, },)

    if(!(result.success))
    {
        res.status(400).json({msg: "Some error in credentials"});
        console.log(result);
        return;
    }
    next();
}

module.exports = zodVerify;