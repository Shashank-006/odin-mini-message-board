const queries = require("../db/queries.js");

function newGet(req, res) {
    res.render("form");
}

/*function newPost(req, res) {
    const { message, username } = req.body;
    messages.push({id: messages.length + 1, text: message, user: username, added: new Date()}); //TODO convert to db
    res.redirect("/");
}*/

async function indexGet(req, res) {
    const { rows } = await queries.selectAllMessages();
    const messages = rows;
    console.log(messages);
    res.render("index", {messages}); //TODO convert to db
}

/*function indexIdGet(req, res) {
    const { id } = req.params;
    const message = messages.find(message => Number(id) === message.id); //TODO convert to db
    if(!message) {
        res.status(404).send("404 Not found :(");
    }
    res.render("message", {message})
}*/

module.exports = {
    newGet,
    //newPost,
    indexGet,
    //indexIdGet
}