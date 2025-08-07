const express = require("express");
const path = require("node:path");
const indexRouter = require("./routers/indexRouter");
const newMessageRouter = require("./routers/newMessageRouter");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath));

app.use("/new", newMessageRouter);
app.use("/", indexRouter);

app.listen(3000, () => console.log("Server is running"))