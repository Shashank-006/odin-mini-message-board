const pool = require("./pool.js");

async function selectMessage(messageId) {
    const message = await pool.query("select * from messages where id = $1", [messageId]);
    return message;
}

async function selectAllMessages() {
    const messages = await pool.query("select * from messages");
    return messages;
}

module.exports = {
    selectAllMessages,
    selectMessage
}