const express = require('express');
const saveRandomUser = require('../../controllers/saveRandomUser.controller')

const router = express.Router();

router.route("/")
    .post(saveRandomUser.saveRandomUser)


module.exports = router;