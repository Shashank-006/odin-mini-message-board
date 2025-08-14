const pool = require("./pool.js");

async function selectMessage(messageId) {

}

const selectAllMessagesPromise = () => {
    return pool.query("select * from messages");
}

async function selectAllMessages() {
    const messages = await pool.query("select * from messages");
    return messages;
}

module.exports = {
    selectAllMessages,
    selectAllMessagesPromise,
}