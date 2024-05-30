require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');

const app = express();
const port = 5000 || process.env.PORT;


connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//set up express static folder
app.use(express.static('public'));


//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


// HANDLE 404
// app.get("*", (req, res) => {
//   res.status(404).render('404');
// });
//View Route



// include routes
app.use('/', require('./server/routes/customer'));


app.listen(port, () => {
console.log(`listening on port ${port}`);
})