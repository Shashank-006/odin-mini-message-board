const { Router } = require("express");
const indexRouter = Router();
const controllers = require("../controllers/controllers.js");

const messages = [
    {
        id: 1,
        text: "hello1",
        user: "person1",
        added: new Date(),
    },
    {
        id: 2,
        text: "hello2",
        user: "person2",
        added: new Date(),
    }
];

indexRouter.get("/", controllers.indexGet);
indexRouter.get("/:id", controllers.indexIdGet);

module.exports = { indexRouter, messages};