const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const sqlQuery =
    `create table if not exists messages (
        id integer primary key generated always as identity,
        username varchar(150),
        text varchar(200),
        added varchar(150)
    );
    
    insert into messages (username, text, added) values ('Bob', 'This is a nice message board!', '${new Date()}'), ('funny man', 'hehe', '${new Date()}');`

//console.log(sqlQuery);
const {DB_PORT, DB_DATABASE, DB_PASSWORD, DB_USERNAME, DB_HOST} = process.env;
//console.log(`postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`);


const client = new Client({
    connectionString: `postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
});

client.connect()
    .then(() => client.query(sqlQuery))
    .then(() => client.end())
    .catch((err) => console.log(err));