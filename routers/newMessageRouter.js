const { Router, urlencoded } = require("express");
const newMessageRouter = Router();
const { indexRouter, messages } = require("./indexRouter.js");

newMessageRouter.use(urlencoded({extended: true}));

newMessageRouter.get("/", (req, res) => res.render("form"));

newMessageRouter.post("/", (req, res) => {
    const { message, username } = req.body;
    messages.push({id: messages.length + 1, text: message, user: username, added: new Date()});
    res.redirect("/");
});

module.exports = newMessageRouter;