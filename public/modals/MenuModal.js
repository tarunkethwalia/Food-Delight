var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    Cate_name: String,
    price: Number,
    cat_img: {
        url: String,
        contentType: String
    }
});

var menuSchema = new Schema({
    img: {
            imgurl: String,
            contentType: String
        },
    Name: String,
    Desc: String,
    Category: [CategorySchema]
});

const MenuSchema = mongoose.model('Menuschema', menuSchema);

module.exports = MenuSchema;