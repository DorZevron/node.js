const express = require("express");
const router = express.Router();
const serviceRoute = require("./ms-test/ms-test.route");

const routes = () => {
    router.use("/ms-test", serviceRoute);

    return router;
}


module.exports = routes;