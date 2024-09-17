const mongoose = require('mongoose');
// 1-Create Schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Category required'],
        unique: [true, "Category must be unique"],
        minlength: [3, "too short"],
        maxlength: [34, "too long"],
    },
    slug: {
        type: String,
        lowercase: true,
    },
    image: String,
},
{timestamps: true }
);

// 2-Create model
const Category_Model = mongoose.model('category', categorySchema);

module.exports = Category_Model;