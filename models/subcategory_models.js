const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: [true, 'subCategory must be unique'],
            minlength: [2, 'too short subCategory name'],
            maxlength: [32, 'too long subCategory name']
        },
        slug: {
            type: String,
            lowercase: true,

        },
        category: {
            type:mongoose.Schema.ObjectId,
            ref: 'category',
            required: [true, 'subcategory must be belong to parent category'],
        },
    }, 
{timestamps: true}
);

module.exports = mongoose.model('subCategory', subCategorySchema);