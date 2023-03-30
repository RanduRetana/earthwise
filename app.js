const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path'); // Add this line

app.use(bodyParser.urlencoded({ extended: false }));

// Set up EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Add this line if your views are in a 'views' folder

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
  console.log('Otro middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const postsRoutes = require('./routes/posts.routes');
app.use('/posts', postsRoutes);

app.listen(3000);
