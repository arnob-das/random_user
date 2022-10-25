const express = require('express');
const randomUserController = require('../../controllers/randomUser.controller');

const router = express.Router();

router.route("/")
    .get(randomUserController.getRamdomUser)


module.exports = router;