const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controllers')
router.post('/signup', userController.displaySignup)
router.post('/signin',userController.displaySignin)

module.exports=router