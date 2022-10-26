const express = require('express');
const { bulkUpdateMultipleUser } = require('../../controllers/bulkUpdateMultipleUser.controller');

const router = express.Router();

router
    .route("/")
    .patch(bulkUpdateMultipleUser)


module.exports = router;