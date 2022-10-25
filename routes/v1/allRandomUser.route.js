const express = require('express');
const allRandomUserController = require('../../controllers/allRandomUser.controller');

const router = express.Router();

router.route("/")
.get(allRandomUserController.getAllRamdomUsers)


module.exports = router;