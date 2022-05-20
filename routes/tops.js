const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render('tops.ejs'))
    .post((req, res) => res.render('tops.ejs'));
module.exports = router;
