const express = require("express")
const mongoose = require("mongoose")

const app = express()

// connection to mongodb
// mongoose.connect("mongodb://localhost:27017/db",{
    mongoose.connect("mongodb://localhost/todo_express",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// middlewares
app.use(express.urlencoded({ extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo.route"))

// server config...
app.listen(3000, () => console.log("Server started listening on port: 3000"))