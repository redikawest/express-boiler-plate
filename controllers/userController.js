const { errorResponse, successResponse, passwordUtils, generatePassword } = require("../helpers")
const { createUserValidate } = require("../helpers/validator/userValidator")
const User = require("../models").User
const bcrypt = require('bcrypt')
const { createParser } = require("../helpers/parser/userParser")
const { createUserCode, createUserMessage } = require("../helpers/SuccessCode")

const createUser = async function (req, res)  {

    const {error} = createUserValidate(req.body)
    if (error) {
        return errorResponse(req, res, error.details[0].message)
    }

    try {
    
        const {name, email, phone, password, status} = req.body

        const create = await User.create({
            name: name,
            email: email,
            phone: phone,
            password: await generatePassword(password),
            status: status
        })
        const result = createParser(create)

        return successResponse(req, res, createUserCode, createUserMessage, result)
        
    } catch (error) {
        return errorResponse(req, res, error.message)
    }
}

const getDetailUser = async function (req, res) {
    try {
        const data = await User.findByPk(req.params.id)

        const result = createParser(data)
        return successResponse(req, res, 200, null, result)
    } catch (error) {
        return errorResponse(req, res, error.message)
    }
}

const getAllUser = async function (req, res) {
    try {
        const data = await User.findAll()
        const result = createParser(data)

        return successResponse(req, res, 200, null, data)
        
    } catch (error) {
        return errorResponse(req, res, error.message)
    }
}

const updateUser = async function (req, res) {

    //validation

    try {
        
    } catch (error) {
        return errorResponse(req, res, error.message)
    }
}

const deleteUser = async function (req, res) {
    try {
        null
    } catch (error) {
        return errorResponse(req, res, error.message)
    }
}

module.exports = {
    createUser: createUser,
    getDetailUser: getDetailUser,
    getAllUser: getAllUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}