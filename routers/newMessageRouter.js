const { Router, urlencoded } = require("express");
const newMessageRouter = Router();
const { indexRouter } = require("./indexRouter.js");
const controllers = require("../controllers/controllers.js");

newMessageRouter.use(urlencoded({extended: true}));

newMessageRouter.get("/", controllers.newGet);

newMessageRouter.post("/", controllers.newPost);

module.exports = newMessageRouter;