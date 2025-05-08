const express = require('express');
const db = require('./config/dbConfig');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');

const app = express();
const port = 8888;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());
app.use(flash());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

app.use('/', routes);

app.listen(port, err => !err && console.log(`Server is Running is http://localhost:${port}`));