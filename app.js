const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require("./api/v1/routes");

//allow to do asyncronice action
(async () => {

    app.use(bodyParser.json());
    
    app.use("/", routes);
    app.use("*", (req, res) => {
        res.status(404).end();
    })
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    })
})()
