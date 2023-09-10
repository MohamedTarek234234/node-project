const path = require('path')

const express = require('express');
const app = express();

const port = 3000;


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

const usersRoutes = require(path.join(__dirname, 'routes', 'users.js'));
app.use(usersRoutes);

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}/`);
});
