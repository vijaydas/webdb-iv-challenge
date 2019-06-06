const express = require('express');
const helmet = require('helmet');

const port = process.env.PORT || 8080;

const server = express();

server.use(helmet());
server.use(express.json());

// Custom Middleware
server.use(logger);

function logger(req, res, next) {
    console.log(`Received ${req.method} from ${req.url}`)
    next();
}

server.get("/", (req, res) => {
    res.status(200).json("Hello I am sending this from root!")
} )

//server.use('/projects', require("./routers/projectsRouter"))

server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});


