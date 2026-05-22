const express = require("express");
const router = express.Router();
const { sendEmailToStudents } = require("../controllers/email.controller");

router.post("/send-emails", sendEmailToStudents);

module.exports = router;