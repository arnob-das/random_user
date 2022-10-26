const express = require('express');
const { deleteSpecificUser } = require('../../controllers/deleteSpecificUser.controller');

const router = express.Router();

router.route("/:_id")
    .delete(deleteSpecificUser)


module.exports = router;