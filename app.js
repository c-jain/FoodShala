const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const viewRouter = require('./router/viewRouter');

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

app.use('/', viewRouter);

// Error 404 page
app.use('/', (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', Preference: null, Name: null }); 
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});