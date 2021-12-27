import {body, validationResult} from 'express-validator';

const validationRulesGoogle = () => {
  return [body('tokenId').isString(), body('tokenId').isLength({min: 4})];
};

const validateGoogle = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  console.log(errors);
  errors.array().map(err => extractedErrors.push({[err.param]: err.msg}));
  return res.status(422).json({
    errors: extractedErrors,
  });
};

export {validateGoogle, validationRulesGoogle};
