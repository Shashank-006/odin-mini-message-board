const { Router } = require("express");
const newMessageRouter = Router();

newMessageRouter.use((req, res) => res.send("Hello from new router"));

module.exports = newMessageRouter;