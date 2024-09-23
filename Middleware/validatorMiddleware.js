const { validationResult } = require('express-validator');

// eslint-disable-next-line camelcase
const validatorMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// eslint-disable-next-line camelcase
module.exports = validatorMiddleware;