const { Router } = require("express");
const indexRouter = Router();
const controllers = require("../controllers/controllers.js");

indexRouter.get("/", controllers.indexGet);
indexRouter.get("/:id", controllers.indexIdGet);

module.exports = { indexRouter };