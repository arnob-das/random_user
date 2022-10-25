const express = require('express');
const { updateSpecificUser } = require('../../controllers/updateSpecificUser.controller');

const router = express.Router();

router
    .route("/:_id")
    .patch(updateSpecificUser)


module.exports = router;