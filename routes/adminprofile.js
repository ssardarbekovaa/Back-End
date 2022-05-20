const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render('adminprofile.ejs'))

    .post((req, res) => res.render('adminprofile.ejs'));


module.exports = router;
