const express = require('express');
const {registerUser, authUser} = require("../controllers/userController");
let cors = require("cors");

const router = express.Router();
router.use(cors());
router.route('/').post(registerUser);
router.post('/login',authUser);

module.exports = router;