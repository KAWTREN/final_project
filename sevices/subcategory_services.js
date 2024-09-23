const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const Category = require('../models/category_models');

const SubCategory = require('../models/subcategory_models');

// @desc subcreate_category
// @Route POST /api/v1/subcategories
// @access Private
exports.createSubCategory = asyncHandler( async(req, res) => {
    const {name, category} = req.body;
    const subCategory = await SubCategory.create({name, slug:slugify(name), category});
        res.status(201).json({data: subCategory});
    
});
