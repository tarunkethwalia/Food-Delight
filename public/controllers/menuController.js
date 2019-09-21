var express = require('express');
var router = express.Router();
var MenuScheme = require('../modals/MenuModal');
var multer = require('multer');

//Used Multer to store files
var storage = multer.diskStorage({
    destination: (req,file,call)=> {
        call(null,'./uploads/');
    },
    filename: (req, file, call) => {
        call(null,file.originalname);
    }
});
var upload = multer({storage: storage});

//To recieve the data
router.get('/imageget', (req, res) => {
    MenuScheme.find().then((result)=>{
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
});

//To store data on the collection
router.post('/imageuploads', upload.fields([{name: 'img', maxCount: 1},{name: 'cat_img', maxCount: 2}]) ,(req, res) => {

    var menu = new MenuScheme({
        id: 5,
        img: {
            imgurl: req.files['img'][0].path,
            contentType: req.files['img'][0].mimetype
        },
        Name: 'Beverages',
        Desc: "Let's have some Drink.",
        Category: [{
            Cate_name: 'Coffee', price: 80, cat_img: {
                url: req.files['cat_img'][0].path,
                contentType: req.files['cat_img'][0].mimetype
                }
            },
            {
                Cate_name: 'Coke(1 ltr)', price: 60, cat_img: {
                url: req.files['cat_img'][1].path,
                contentType: req.files['cat_img'][1].mimetype
                }
            }]
    });

    menu.save().then(() => {
        console.log('Menu Saved');
    });     
    
});


module.exports = router;