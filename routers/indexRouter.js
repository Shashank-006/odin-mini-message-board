const { Router } = require("express");
const indexRouter = Router();

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

indexRouter.get("/", (req, res) => res.render("index", {messages}));
indexRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const message = messages.find(message => Number(id) === message.id);
    if(!message) {
        res.status(404).send("404 Not found :(");
    }
    res.render("message", {message})
});

module.exports = { indexRouter, messages};