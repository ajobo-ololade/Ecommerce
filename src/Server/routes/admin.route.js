const express = require('express')
const adminRouter= express.Router()
const adminController = require('../controllers/admin.controllers')
adminRouter.post('/sproduct',adminController.setProduct)
module.exports= adminRouter