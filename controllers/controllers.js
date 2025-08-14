function newGet(req, res) {
    res.render("form");
}

function newPost(req, res) {
    const { message, username } = req.body;
    messages.push({id: messages.length + 1, text: message, user: username, added: new Date()});
    res.redirect("/");
}

function indexGet(req, res) {
    res.render("index", {messages});
}

function indexIdGet(req, res) {
    const { id } = req.params;
    const message = messages.find(message => Number(id) === message.id);
    if(!message) {
        res.status(404).send("404 Not found :(");
    }
    res.render("message", {message})
}

module.exports = {
    newGet,
    newPost,
    indexGet,
    indexIdGet
}