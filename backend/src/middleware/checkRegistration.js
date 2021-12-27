import {body, validationResult} from 'express-validator';

const validationRulesReg = () => {
  return [
    body('email').isEmail(),
    body('password').isLength({min: 5}),
    body('username').isLength({min: 4}),
  ];
};

const validateReg = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({[err.param]: err.msg}));
  return res.status(422).json({
    errors: extractedErrors,
  });
};

export {validateReg, validationRulesReg};
