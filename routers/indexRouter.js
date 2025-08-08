const { Router } = require("express");
const indexRouter = Router();

const messages = [
    {
        text: "hello1",
        user: "person1",
        added: new Date(),
    },
    {
        text: "hello2",
        user: "person2",
        added: new Date(),
    }
];

indexRouter.use("/", (req, res) => res.render("index", {messages}));

module.exports = { indexRouter, messages};