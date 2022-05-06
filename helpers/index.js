const bcrypt = require('bcrypt')

exports.successResponse = (
    req, 
    res, 
    code,
    message, 
    data) => res.send({
    success: true,
    code,
    message,
    data,
});
  
exports.errorResponse = (
    req,
    res,
    errorMessage = 'Something went wrong',
    code = 500,
    error = {},
  ) => res.status(500).json({
    success: false,
    code,
    errorMessage,
    error,
    data: null,
});

exports.generatePassword = async (data) => {
  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(data, salt)

  return password
}

exports.validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
      return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(400).json({
      errors: extractedErrors,
  })
}