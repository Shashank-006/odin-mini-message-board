const express = require("express");
const indexRouter = require("./routers/indexRouter");
const newMessageRouter = require("./routers/newMessageRouter")
const app = express();


app.use("/new", newMessageRouter);
app.use("/", indexRouter);

app.listen(3000, () => console.log("hello"))