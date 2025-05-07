const express = require('express');
const db = require('./config/dbConfig');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8888;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/', routes);

app.listen(port, err => !err && console.log(`Server is Running is http://localhost:${port}`));