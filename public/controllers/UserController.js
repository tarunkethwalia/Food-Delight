var express = require('express');
var router = express.Router();
var UserScheme = require('../modals/UserModel');

//For SignIn

router.post('/signin', (req,res)=>{
    UserScheme.findOne({ Username: req.body.Username, Password: req.body.Password}).then(result=>{
        if(result < 1){
            res.send('Invalid');
        }
        else {
            res.status(200).send({ Message: 'You have successfully Logged In..', result });
        }
    }).catch(err=>{
        res.status(401).send({ Message: 'Error Occured', Error: err});
    });
});

//For SignUp
router.post('/signup', (req, res)=>{
    var Signup = new UserScheme({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Username: req.body.Username,
        Password: req.body.Password,
        Mobile: req.body.Mobile
    });

    Signup.save().then(result=>{
        res.status(200).send({Message: 'You have successfully Signed Up..', result});
    }).catch(err => {
        res.status(401).send({ Message: 'Error Occured', Error: err });
    });
});

module.exports = router;