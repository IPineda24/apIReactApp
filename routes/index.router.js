const express = require("express");
const router = express.Router();

const apiRouter = require("./api.router");

router.use(["/api/v1", "/api", "/v1"], apiRouter);

module.exports = router;