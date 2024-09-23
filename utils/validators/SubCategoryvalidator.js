const { check } = require('express-validator');
const validatorMiddleware = require("../../Middleware/validatorMiddleware");

//exports.getSubCategoryValidator = [
//    check('ID').isMongoId().withMessage("invalid Subcategory ID"),
//    validatorMiddleware,
//];


exports.createSubCategoryValidator =[
    check("name")
    .notEmpty()
    .withMessage("SubCategory required")
    .isLength({min: 3})
    .withMessage("too short")
    .isLength({max: 32})
    .withMessage("too long"),
    check("category").notEmpty().withMessage("subcategory must be belong to category")
    .isMongoId().withMessage("invalid category ID"),
    validatorMiddleware,
];

//exports.updateSubCategory_validator = [
//    check('ID').isMongoId().withMessage("invalid Subcategory ID"),
//    validatorMiddleware,
//];

//exports.deleteSubCategory_validator = [
//    check('ID').isMongoId().withMessage("invalid Subcategory ID"),
//    validatorMiddleware,
//];