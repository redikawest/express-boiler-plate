// require('dotenv').config();

// const express     = require('express');
// const app         = express();
// const bodyParser  = require('body-parser');
// const http        = require('http');
// const morganBody  = require('morgan-body');
// const httpServer  = http.createServer(app);

// const users       = require("./routes/users")

// app.use('/users',users)
// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json({ limit: '5mb' }));
// app.disable('x-powered-by');

// morganBody(app);

// app.get("/", function(req, res) {
//   console.log(req.body.name);
//   res.send({ status: 'SUCCESS' });
// });


// const port  = process.env.PORT || process.env.SERVICE_PORT;
// httpServer.listen(port);

// console.log(process.env.SERVICE_NAME + " started on port " + port);


require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const http        = require('http');
const morganBody  = require('morgan-body');

app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));

morganBody(app);

const routes     = require('./routes')


app.use(routes)


// app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Create a catch-all route for testing the installation.
app.get('*', (req, res) => res.status(200).send({
  message: 'Hello World!',
}));

const port = 3000;

app.listen(port, () => {
  console.log(process.env.SERVICE_NAME + " started on port " + port);
})
