const express = require("express");
const router = express.Router();

router.route("/list:id").get(getList);

async function getList(req, res) {
    // from param=>req.params.id
    // from queryParam => req.query.name

    let idNum = req.params.id;
    const title = "Your id is +" + idNum;
    let status = 200;
    res.status(status).json({ data: title });

}

module.exports = router;