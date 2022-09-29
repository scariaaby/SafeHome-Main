require("dotenv").config() // load .env variables
var express = require("express") // import express
const morgan = require("morgan") //import morgan
const {log} = require("mercedlogger") // import mercedlogger's log function
const cors = require("cors") // import cors
const UserRouter = require("./controllers/User") //import User Routes
const TodoRouter = require("./controllers/Todo") // import Todo Routes
const {createContext} = require("./controllers/middleware")

let dbConnect = require("./dbConnect");
let http = require('http').createServer(app);
let io = require('socket.io')(http);

//DESTRUCTURE ENV VARIABLES WITH DEFAULT VALUES
const {PORT = 3000} = process.env

// Create Application Object
const app = express()

// GLOBAL MIDDLEWARE
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({ extended: false }))
app.use(cors()) // add cors headers
app.use(morgan("tiny")) // log the request for debugging
app.use(express.json()) // parse json bodies
app.use(createContext) // create req.context


// ROUTES AND ROUTES
/* app.get("/", (req, res) => {
    res.send("this is the test route to make sure server is working")
}) */
app.use("/user", UserRouter) // send all "/user" requests to UserRouter for routing
app.use("/todos", TodoRouter) // send all "/todos" request to TodoROuter

//Abys Routes
// routes
let projectsRoute = require('./routes/projects')
app.use('/api/projects',projectsRoute)

app.use(express.json());

// APP LISTENER
app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))
