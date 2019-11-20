const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

// PORT NUMBER
const port = process.env.PORT || 3000;

// CORS Middleware
app.use(cors());

// passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Set Statis Files
app.use(express.static(path.join(__dirname, 'public')));

// Bodey Parser Middleware
app.use(bodyParser.json());

// INDEX ROUTE
app.get('/', (req, res) => {
  res.send('INVALID ENDPOINT');
});

// START SERVER
app.listen(port, () => {
  console.dir(`Server started on port ${port}`);
});
