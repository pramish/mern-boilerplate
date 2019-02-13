const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

// Routes
const users = require('./routes/api/users');

const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
require('./config/db-setup');

// Passport Config
app.use(passport.initialize());
require('./config/passport');

// Routes
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
