const express = require('express');
const router = express.Router();


const adminController = require('app/http/controllers/admin/adminController');

router.get('/' , adminController.index);


router.get('/course' , (req , res) => {
    res.json('courcse admin page');
});



module.exports = router; 