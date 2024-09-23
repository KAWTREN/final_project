const express = require('express');



const {createSubCategory} = require('../sevices/subcategory_services');
const {createSubCategoryValidator} = require("../utils/validators/SubCategoryvalidator");


const router = express.Router();


router.route('/').post(createSubCategoryValidator, createSubCategory);


module.exports = router;