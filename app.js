const express = require('express');
const todoController = require('./controller/controller');

const app = express();
const port = process.env.PORT || 3000;

//template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./assets'));

//controller
todoController(app);

//listen to port
app.listen(3000);
console.log('Listening to port 3000');