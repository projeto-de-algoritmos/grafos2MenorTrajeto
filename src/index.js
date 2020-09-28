const express = require('express');
const app = express();
const volleyball = require('volleyball');

const routes = require('./routes.js');

// settings
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

// middlewares
app.use(volleyball);
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', routes);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
