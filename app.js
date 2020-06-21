const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// const restaurantRoutes = require('./router/restaurant');

// Init app
const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Load view engine
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use(restaurantRoutes);

app.get('/', (req, res) => {
    res.render('layout');
});

// Error 404 page
app.use('/', (req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>'); 
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});