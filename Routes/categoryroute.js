
const express = require('express');
// eslint-disable-next-line camelcase
const {getCategoryValidator, createCategory_validator, updateCategory_validator, deleteCategory_validator} = require("../utils/validators/categoryvalidator");
const {
    getCategories,
    getCategory,
    // eslint-disable-next-line camelcase
    create_Category,
    // eslint-disable-next-line camelcase
    delete_category,
    // eslint-disable-next-line camelcase
    apdate_category
} = require('../sevices/category_sevice');

const router = express.Router();


router
    .route("/")
    .get(getCategories)
    .post(createCategory_validator, create_Category);
router
    .route("/:ID")
    .get(getCategoryValidator, getCategory)
    .put(updateCategory_validator, apdate_category)
    .delete(deleteCategory_validator, delete_category);

module.exports = router;