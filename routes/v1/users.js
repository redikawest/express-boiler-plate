const express = require('express');
const router = express.Router();
const usersController = require("../../controllers/userController");
const { validate } = require('../../helpers');
const userValidator = require("../../helpers/validator/userValidator")

router.get('/', usersController.getAllUser)
router.get('/:id', usersController.getDetailUser)
router.post('', usersController.createUser)
router.put('/:id', usersController.updateUser)
router.delete('/:id', usersController.deleteUser)

module.exports = router; 