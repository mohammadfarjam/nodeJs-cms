const express = require('express');
const router = express.Router();

const adminRouter = require('./admin');
//admin router
router.use('/admin' , adminRouter);


//home router
const homeRouter = require('./home');
router.use('/' , homeRouter);




module.exports = router;