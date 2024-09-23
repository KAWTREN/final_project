const { check } = require('express-validator');
const validatorMiddleware = require("../../Middleware/validatorMiddleware");

exports.getCategoryValidator = [
    check('ID').isMongoId().withMessage("invalid category ID"),
    validatorMiddleware,
];


exports.createCategory_validator =[
    check("name")
    .notEmpty()
    .withMessage("Category required")
    .isLength({min: 3})
    .withMessage("too short")
    .isLength({max: 32})
    .withMessage("too long"),
    validatorMiddleware,
];

exports.updateCategory_validator = [
    check('ID').isMongoId().withMessage("invalid category ID"),
    validatorMiddleware,
];

exports.deleteCategory_validator = [
    check('ID').isMongoId().withMessage("invalid category ID"),
    validatorMiddleware,
];