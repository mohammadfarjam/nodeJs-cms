const controller = require('app/http/controllers/controller');

class registerController extends controller{
    showRegistionForm(req , res){
        res.render('register');
    }

    registerProccess(req,res,next){
        req.checkBody('name','فیلد نام نمی تواند خالی باشد.').notEmpty();
    }
}

module.exports = new registerController();