import express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
  // use the 'index' template and inject an object with a 'title' property with a val of 'Express'
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET home page = with /home */
router.get('/home', function(req, res, next) 
{
  // use the 'index' template and inject an object with a 'title' property with a val of 'Express'
  res.render('index', { title: 'Home' , page: 'home'});
});

/* GET about page  = with /about */
router.get('/about', function(req, res, next) 
{
  // use the 'index' template and inject an object with a 'title' property with a val of 'Express'
  res.render('index', { title: 'About' , page: 'about'});
});


/* GET services page = with /services */
router.get('/services', function(req, res, next) 
{
  // use the 'index' template and inject an object with a 'title' property with a val of 'Express'
  res.render('index', { title: 'Services' , page: 'services'});
});


/* GET project page = with /projects */
router.get('/projects', function(req, res, next) 
{
  // use the 'index' template and inject an object with a 'title' property with a val of 'Express'
  res.render('index', { title: 'Projects' , page: 'projects'});
});

/* GET contact page = with /contact */
router.get('/contact', function(req, res, next) 
{
  // use the 'index' template and inject an object with a 'title' property with a val of 'Express'
  res.render('index', { title: 'Contact Us', page: 'contact' });
});

/* GET login page = with /login */
router.get('/login', function(req, res, next) 
{
  // use the 'index' template and inject an object with a 'title' property with a val of 'Express'
  res.render('index', { title: 'Login', page: 'login' });
});


/* GET register page = with /register */
router.get('/register', function(req, res, next) 
{
  // use the 'index' template and inject an object with a 'title' property with a val of 'Express'
  res.render('index', { title: 'Register', page: 'register' });
});



module.exports = router;
