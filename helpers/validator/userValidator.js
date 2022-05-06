const Joi = require('joi')

exports.createUserValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        phone: Joi.string().required(),
        status: Joi.string().required()
    }).unknown()

    return schema.validate(data)
}

exports.updateUserValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(14).required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        phone: Joi.string().required(),
        status: Joi.string().required()
    }).unknown()

    return schema.validate(data)
}

exports.testing = () => {
    body: {
        firstName: Joi.string().required()
        lastName: Joi.string().required()
        email: Joi.string().email().required()
    }

}