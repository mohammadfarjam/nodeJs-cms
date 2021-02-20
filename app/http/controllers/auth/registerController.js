const controller = require('app/http/controllers/controller');

class registerController extends controller{
    showRegistionForm(req , res){
        res.render('register');
    }
}

module.exports = new registerController();