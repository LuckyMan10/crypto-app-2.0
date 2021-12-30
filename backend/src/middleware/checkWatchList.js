import { body, validationResult } from 'express-validator';

const validationRulesWatchList = () => {
  return [body('coinId').isLength({ min: 2 }).isString(), body('name').isLength({ min: 2 }).isString()];
};

const validateWatchList = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  return res.status(422).json({
    errors: extractedErrors
  });
};

export { validateWatchList, validationRulesWatchList };
