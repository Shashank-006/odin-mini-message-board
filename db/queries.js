const pool = require("./pool.js");

async function selectMessage(messageId) {
    const message = await pool.query("select * from messages where id = $1", [messageId]);
    return message;
}

async function selectAllMessages() {
    const messages = await pool.query("select * from messages");
    return messages;
}

async function addMessage(username, message) {
    await pool.query("insert into messages (username, text, added) values ($1, $2, $3)", [username, message, new Date()]);
}

module.exports = {
    selectAllMessages,
    selectMessage,
    addMessage
}