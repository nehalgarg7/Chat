const jwt = require('jsonwebtoken')
const data = "piyush";
require("dotenv").config();
const generateToken = (id) => {
    return jwt.sign({id},data,{
        expiresIn: "30d",
    });
};

module.exports = generateToken;