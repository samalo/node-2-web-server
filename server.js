const express = require('express');
const hbs = require('hbs');

var app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); //Middleware

hbs.registerHelper('getCurrentYear', () => {
 return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})

app.get('/', (req, res) => {
 //res.send('<h1>Hello Express</h1>');
res.render('home.hbs',  {
   
  pageTitle: 'Home Page',
  welcomeMessage: 'Im here',
  
});

});


app.get('/About', (req, res) => {
res.render('about.hbs', {
  pageTitle: 'About Page',
 
});
});

app.get('/bad', (req, res) => {
res.send({
   errMessage: 'Unable to fulfill the job.'
})
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});